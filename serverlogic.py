import json

from utils.misc import write_string_to_file, read_string_from_file
import sys
from traceback import print_exc

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
    except:
        print_exc(file = sys.stderr)
    return resobj
