#########################################################
# global imports
import random
import json
import sys
import os
import uuid
from traceback import print_exc
#########################################################

#########################################################
# local imports
import config

from utils.misc import read_yaml_from_file, read_json_from_file, postjson
#########################################################

#########################################################
# flask imports
from flask import Flask, render_template, request, Response, send_from_directory
#########################################################

#########################################################
# create app
app = Flask(__name__, static_url_path = '/static')
app.config['SECRET_KEY'] = 'secret!'
app.config['UPLOAD_FOLDER'] = 'upload'
app.config['DOWNLOAD_FOLDER'] = 'download'
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
    return render_template("index.html", config = config)

@app.route("/upload", methods = ["POST"])
def upload():
    if 'files' not in request.files:            
        return Response(json.dumps({
            "success": False,
            "status": "no file input"
        }), content_type = "application/json")
    file = request.files['files']
    if file:            
        filename = file.filename
        parts = filename.split(".")            
        savefilename = uuid.uuid1().hex + "." + parts[-1]            
        savepath = os.path.join(app.config['UPLOAD_FOLDER'], savefilename)
        file.save(savepath)            
        simpleresponsecontent = postjson("http://localhost:4000", {
            "kind": "saveupload",
            "filename": filename,
            "savefilename": savefilename,
            "savepath": savepath
        })                
        return Response(simpleresponsecontent, content_type = "application/json")

@app.route("/uploads/<path:path>")
def serve_uploaded_file(path):        
    filepath = os.path.join(app.config['DOWNLOAD_FOLDER'], path)    
    postjson("http://localhost:4000", {
        "kind": "getupload",
        "filepath": filepath,
        "filename": path
    })                
    return send_from_directory('.', "download/{}".format(path))
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
            schemaconfig = read_json_from_file("schemaconfig.json", {})
            socketio.emit("siores", {
                "kind": "connectedack",
                "firebaseconfig": firebaseconfig,
                "schemaconfig": schemaconfig
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
