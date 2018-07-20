######################################################
# utils
if window.location.protocol == "https:":
    ws_scheme = "wss://"
else:
    ws_scheme = "ws://"

SUBMIT_URL = ws_scheme + window.location.host

def ce(tag):
    return document.createElement(tag)

def ge(id):
    return document.getElementById(id)
######################################################