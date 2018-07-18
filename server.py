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
# app routes
@app.route("/")
def index():
    printreq(request)
    return render_template("index.html")
#########################################################

#########################################################
# utils
SEP = "----------"
def printreq(req):
    print(SEP, "request")
    for key in list(req.__dict__.keys()):
        if not key in ["environ", "routing_exception"]:
            print(key, req.__dict__[key])
    print(SEP)
#########################################################

#########################################################
# socketio event handlers
@socketio.on('sioreq')
def handle_sioreq(json):
    printreq(request)
    if "kind" in json:
        kind = json["kind"]
        if kind == "connected":
            socketio.emit("siores", {"kind": "connectedack"}, room = request.sid, namespace = "/")
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
