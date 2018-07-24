######################################################
# utils
if window.location.protocol == "https:":
    ws_scheme = "wss://"
else:
    ws_scheme = "ws://"

SUBMIT_URL = ws_scheme + window.location.host

def getitem(obj, key, default):
    if key in obj:
        return obj[key]
    return default

def cpick(cond, valuetrue, valuefalse):
    if cond:
        return valuetrue
    return valuefalse

def getelse(value, elsevalue):
    if value:
        return value
    return elsevalue

def ce(tag):
    return document.createElement(tag)

def ge(id):
    return document.getElementById(id)

# https://stackoverflow.com/questions/13382516/getting-scroll-bar-width-using-javascript
def getScrollBarWidth():
    outer = document.createElement("div")
    outer.style.visibility = "hidden"
    outer.style.width = "100px"
    outer.style.msOverflowStyle = "scrollbar" # needed for WinJS apps

    document.body.appendChild(outer)

    widthNoScroll = outer.offsetWidth
    # force scrollbars
    outer.style.overflow = "scroll"

    # add innerdiv
    inner = document.createElement("div")
    inner.style.width = "100%"
    outer.appendChild(inner)       

    widthWithScroll = inner.offsetWidth

    # remove divs
    outer.parentNode.removeChild(outer)

    return widthNoScroll - widthWithScroll
######################################################
