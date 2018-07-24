#############################################
# global imports
from http.server import BaseHTTPRequestHandler, HTTPServer
import json
#############################################

#############################################
# local imports
from serverlogic import serverlogic
#############################################

#############################################
# server
class SimpleHTTPRequestHandler(BaseHTTPRequestHandler):     
    def do_POST(self):
        content_length = int(self.headers['Content-Length'])
        print("POST content length {}".format(content_length))
        post_data = self.rfile.read(content_length).decode("utf-8")
        print("POST data", post_data)
        self.send_response(200)
        self.send_header("Content-type", "application/json")
        self.end_headers()
        try:
            reqobj = json.loads(post_data)
            resobj = serverlogic(reqobj)
        except:
            print("error processing request")
            resobj = {
                "ok": False,
                "status": "error parsing request as json"
            }
        print("response", resobj)
        self.wfile.write(bytes(json.dumps(resobj), "utf8"))

def start_server(server_address):
    print("starting server at {}".format(server_address))

    httpd = HTTPServer(server_address, SimpleHTTPRequestHandler)

    httpd.serve_forever()
#############################################

start_server(("", 4000))