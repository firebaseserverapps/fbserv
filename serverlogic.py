import firebase_admin
from firebase_admin import credentials, db

import json

from utils.misc import write_string_to_file, read_string_from_file
import sys
from traceback import print_exc

try:
    cred = credentials.Certificate('firebase/fbsacckey.json')
    default_app = firebase_admin.initialize_app(cred, {
        "databaseURL": "https://fbserv-36b3e.firebaseio.com"
    })
except:
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

    except:
        print_exc(file = sys.stderr)
    return resobj
