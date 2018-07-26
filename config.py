import random

from utils.misc import read_json_from_file

def randurl():
    return random.randint(1e9,1e10)

def getrec(path, currobj):
    parts = path.split("/")
    key = parts[0]
    if currobj["disposition"] == "dict":
        for child in currobj["childsarg"]:
            if child["key"] == key:
                if len(parts) == 1:
                    return child["value"]
                else:
                    return getrec("/".join(parts[1:]), child)
    return None

def get(path):
    return getrec(path, read_json_from_file("schemaconfig.json", {}))

def authenabled():
    return get("global/auth/enabled")