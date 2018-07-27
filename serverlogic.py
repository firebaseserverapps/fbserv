import firebase_admin
from firebase_admin import credentials, db, auth, storage

import json

from utils.misc import write_string_to_file, read_string_from_file
import sys
from traceback import print_exc

try:
    cred = credentials.Certificate('firebase/fbsacckey.json')
    default_app = firebase_admin.initialize_app(cred, {
        "databaseURL": "https://fbserv-36b3e.firebaseio.com",
        "storageBucket": "fbserv-36b3e.appspot.com"
    })
    bucket = storage.bucket(app = default_app)
except:
    #print_exc(file = sys.stderr)
    print("firebase could not be initialized")

def serverlogic(reqobj):
    resobj = reqobj
    try:
        if "kind" in reqobj:
            kind = reqobj["kind"]
            if kind == "serializeconfig":
                jsontext = json.dumps(reqobj["data"], indent = 2)
                write_string_to_file("schemaconfig.json", jsontext)
                resobj = {
                    "kind": "configsaved",
                    "size": len(jsontext)
                }
            elif kind == "storecloudconfig":
                try:
                    data = reqobj["data"]
                    jsontext = json.dumps(data, indent = 2)
                    db.reference("schemaconfig").set(data)
                    resobj = {
                        "kind": "configsaved",
                        "size": len(jsontext)
                    }
                except:
                    print_exc(file = sys.stderr)
            elif kind == "retrievecloudconfig":
                try:                    
                    data = db.reference("schemaconfig").get()
                    resobj = {
                        "kind": "setcloudconfig",
                        "schemaconfig": data
                    }
                except:
                    print_exc(file = sys.stderr)
            elif kind == "updateuserdetails":
                try:
                    uid = reqobj["uid"]
                    userdetails = reqobj["userdetails"]
                    displayname = userdetails["displayname"]
                    photourl = userdetails["photourl"]                    
                    if not ( displayname == "" ):
                        auth.update_user(
                            uid,
                            display_name = displayname                        
                        )
                    if not ( photourl == "" ):
                        auth.update_user(
                            uid,
                            photo_url = photourl
                        )
                    else:
                        photourl = None
                        auth.update_user(
                            uid,
                            photo_url = None
                        )
                    msg = "Updated user [{}] with display name [{}] and photo url [{}].".format(uid, displayname, photourl)
                    print(msg)
                    resobj = {
                        "kind": "alert",
                        "reload": True,
                        "data": msg
                    }
                except:
                    resobj = {
                        "kind": "alert",
                        "data": "There was a problem updating user details."
                    }
                    print_exc(file = sys.stderr)
            elif kind == "saveupload":
                try:
                    filename = reqobj["filename"]
                    savefilename = reqobj["savefilename"]
                    savepath = reqobj["savepath"]
                    blobpath = "uploads/{}".format(savefilename)
                    print("upload", blobpath)
                    blob = bucket.blob(blobpath)
                    blob.upload_from_filename(savepath)
                    resobj = {
                        "success": True,
                        "filename": filename,
                        "savefilename": savefilename,
                        "savepath": savepath,
                        "blobpath": blobpath
                    }
                except:
                    print_exc(file = sys.stderr)
                    resobj = {
                        "success": False,
                        "status": "could not upload file"
                    }
            elif kind == "getupload":
                try:
                    filepath = reqobj["filepath"]
                    filename = reqobj["filename"]
                    blobpath = "uploads/{}".format(filename)
                    print("download", blobpath)
                    blob = bucket.blob(blobpath)
                    blob.download_to_filename(filepath)
                    resobj = {
                        "success": True,
                        "filename": filename,
                        "filepath": filepath,
                        "blobpath": blobpath
                    }
                except:
                    resobj = {
                        "success": False,
                        "status": "could not download file"
                    }
    except:
        print_exc(file = sys.stderr)
    return resobj
