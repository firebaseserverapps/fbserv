#########################################################
# global imports
import random
import json
import sys
from traceback import print_exc
#########################################################

#########################################################
# local imports
from utils.misc import read_yaml_from_file, postjson
#########################################################

#########################################################
# flask imports
from flask import Flask, render_template, request
#########################################################

#########################################################
# create app
app = Flask(__name__, static_url_path = '/static')
app.config['SECRET_KEY'] = 'secret!'
#########################################################

#########################################################
# flask socketio imports
from flask_socketio import SocketIO, emit
#########################################################

#########################################################
# mount socket
socketio = SocketIO(app)
#########################################################

#########################################################
# utils
SEP = "----------"
def printreq(req):
    print(f"{SEP} request -{SEP}")
    for key in list(req.__dict__.keys()):
        if not key in ["environ", "routing_exception", "shallow", "cookies", "view_args", "namespace"]:
            print(key, req.__dict__[key])
    print(f"{SEP}{SEP}{SEP}")

def randurl():
    return random.randint(1e9,1e10)
#########################################################

#########################################################
# app routes
@app.route("/tos")
def tos():
    printreq(request)
    return render_template("tos.html")

@app.route("/")
def index():
    printreq(request)
    return render_template("index.html", randurl = randurl)
#########################################################

#########################################################
# socketio event handlers
@socketio.on('sioreq')
def handle_sioreq(obj):
    printreq(request)
    if "kind" in obj:
        kind = obj["kind"]
        if kind == "connected":
            firebaseconfig = read_yaml_from_file("firebase/fbcreds.yml", {})
            socketio.emit("siores", {
                "kind": "connectedack",
                "firebaseconfig": firebaseconfig
            }, room = request.sid, namespace = "/")
    try:
        simpleresponsecontent = postjson("http://localhost:4000", obj)        
        simpleresobj = json.loads(simpleresponsecontent)        
        socketio.emit("siores", simpleresobj, room = request.sid, namespace = "/")
    except:
        print_exc(file = sys.stderr)
#########################################################

#########################################################
# startup
def startup(port = 5000):
    socketio.run(app, port = port)
#########################################################

#########################################################
# main
if __name__ == '__main__':    
    startup()
#########################################################
