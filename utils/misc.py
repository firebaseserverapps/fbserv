import os
import yaml
import json
import stat
import certifi
import urllib3
import sys
from traceback import print_exc

###################################################
# post
http = urllib3.PoolManager(
    cert_reqs='CERT_REQUIRED',
    ca_certs=certifi.where()
)

def geturl(url):
    print("get url", url)
    r = http.request("GET", url)
    content = r.data.decode("utf-8")
    return content

def postjson(url, obj):
    #print("post json", url, obj)
    try:
        r = http.request('POST', url, headers = {'Content-Type': 'application/json'}, body = json.dumps(obj))
        content = r.data.decode("utf-8")
        #print("response", content)
        return content
    except:
        #print_exc(file = sys.stderr)
        return None
###################################################

###################################################
# misc

def cpick(cond, valuetrue, valuefalse):
    if cond:
        return valuetrue
    return valuefalse

###################################################

###################################################
# ANSI

ANSI = {
    "NONE" : "",

    "BLACK" : '\033[30m',
    "RED" : '\033[31m', 
    "GREEN" : '\033[32m',
    "YELLOW" : '\033[33m',
    "BLUE" : '\033[34m',
    "MAGENTA" : '\033[35m',
    "CYAN" : '\033[36m',
    "WHITE" : '\033[37m',
    "BRIGHTBLACK" : '\033[90m',
    "BRIGHTRED" : '\033[91m',
    "BRIGHTGREEN" : '\033[92m',
    "BRIGHTYELLOW" : '\033[93m',
    "BRIGHTBLUE" : '\033[94m',
    "BRIGHTMAGENTA" : '\033[95m',
    "BRIGHTCYAN" : '\033[96m',
    "BRIGHTWHITE" : '\033[97m',
        
    "ENDC" : '\033[0m',

    "BOLD" : '\033[1m',
    "UNDERLINE" : '\033[4m'
}

def GETANSI(a):
    if a in ANSI:
        return ANSI[a]
    return None

ANSI_BLACK = ANSI["BLACK"]
ANSI_RED = ANSI["RED"]
ANSI_GREEN = ANSI["GREEN"]
ANSI_YELLOW = ANSI["YELLOW"]
ANSI_BLUE = ANSI["BLUE"]
ANSI_MAGENTA = ANSI["MAGENTA"]
ANSI_CYAN = ANSI["CYAN"]
ANSI_WHITE = ANSI["WHITE"]
ANSI_BRIGHTBLACK = ANSI["BRIGHTBLACK"]
ANSI_BRIGHTRED = ANSI["BRIGHTRED"]
ANSI_BRIGHTGREEN = ANSI["BRIGHTGREEN"]
ANSI_BRIGHTYELLOW = ANSI["BRIGHTYELLOW"]
ANSI_BRIGHTBLUE = ANSI["BRIGHTBLUE"]
ANSI_BRIGHTMAGENTA = ANSI["BRIGHTMAGENTA"]
ANSI_BRIGHTCYAN = ANSI["BRIGHTCYAN"]
ANSI_BRIGHTWHITE = ANSI["BRIGHTWHITE"]

ANSI_ENDC = ANSI["ENDC"]

ANSI_BOLD = ANSI["BOLD"]
ANSI_UNDERLINE = ANSI["UNDERLINE"]

###################################################

#############################################
# file utils

def write_string_to_file(path, content, verbose = False):
    with open(path,"w") as outfile:
        outfile.write(content)
    if verbose:
        print(f"written file { path } ( { len(str) } characters )")

def read_string_from_file(path, default):
	try:
		content = open(path).read()
		return content
	except:
		return default

def write_yaml_to_file(path, obj):
    yaml.dump(obj, open(path, "w"))

def read_yaml_from_file(path, default):
    try:
        obj = yaml.load(open(path))
        return obj
    except:
        return default

def os_stats_as_dict(stats, name, isdir):
    parts = name.split(".")
    ext = parts[-1]
    basename = name
    if len(parts) > 1:
        basename = ".".join(parts[:-1])
    return {
        "name": name,
        "basename": basename,
        "ext": ext,
        "isdir": isdir,
        "st_mode": stats.st_mode,
        "st_mode_unix_rwx": stat.filemode(stats.st_mode),
        "st_ino": stats.st_ino,
        "st_dev": stats.st_dev,
        "st_nlink": stats.st_nlink,
        "st_uid": stats.st_uid,
        "st_gid": stats.st_gid,
        "st_size": stats.st_size,
        "st_atime": stats.st_atime,
        "st_mtime": stats.st_mtime,
        "st_ctime": stats.st_ctime
    }

def dir_listing_as_list(path):
    try:
        listing = []
        for name in os.listdir(path):            
            currpath = os.path.join(path, name)
            stats = os.stat(currpath)
            isdir = os.path.isdir(currpath)
            listing.append(os_stats_as_dict(stats, name, isdir))
        return listing
    except:
        return []

def dir_listing_as_dict(path):
    listing = dir_listing_as_list(path)
    dictionary = {}
    for item in listing:
        dictionary[item["name"]] = item
    return dictionary

def getlastmod(path):
    try:
        stats = os.stat(path)
        mtime = stats.st_mtime
        return mtime
    except:
        return 0

#############################################
