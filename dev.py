import time
import threading
import os

from selenium import webdriver

from utils.process import ProcessManager, runcmd
from utils.misc import read_yaml_from_file, write_yaml_to_file, dir_listing_as_list, dir_listing_as_dict, getlastmod

BROWSER_CONFIG_PATH = "cache/browserconfig.yml"

browser = webdriver.Chrome()

CHECK_DIRS = [
    os.path.join("static", "css")
]

dir_dicts = {}

for dir in CHECK_DIRS:
    dir_dicts[dir] = dir_listing_as_dict(dir)

def check_dirs():
    for dir in CHECK_DIRS:
        dictionary = dir_listing_as_dict(dir)
        compareto = dir_dicts[dir]
        for name, item in dictionary.items():
            compareitem = compareto[name]
            if item["st_mtime"] > compareitem["st_mtime"]:
                compareitem["st_mtime"] = item["st_mtime"]
                browser.refresh()

server = ProcessManager({
    "name": "flask server",
    "command": "python",
    "command_args": ["-u", "server.py"],    
    "verbose": True
})

server.start()

browserconfig = read_yaml_from_file(BROWSER_CONFIG_PATH, {})
browser_x = browserconfig.get("x", 400)
browser_y = browserconfig.get("y", 50)
browser_w = browserconfig.get("width", 600)
browser_h = browserconfig.get("height", 400)

browser.set_window_position(browser_x, browser_y)
browser.set_window_size(browser_w, browser_h)

def watch_browser_thread_target(browser, browserconfig):
    time.sleep(10)
    browser.get('http://localhost:5000')
    while True:
        pos = browser.get_window_position()
        size = browser.get_window_size()
        browserconfig["x"] = pos["x"]
        browserconfig["y"] = pos["y"]
        browserconfig["width"] = size["width"]
        browserconfig["height"] = size["height"]
        write_yaml_to_file(BROWSER_CONFIG_PATH, browserconfig)
        time.sleep(5)

threading.Thread(target = watch_browser_thread_target, args = (browser, browserconfig)).start()

def check_client():
    listing = dir_listing_as_list("client")
    anychanged = False        
    for item in listing:        
        if ( item["ext"] == "py" ) and ( not ( item["name"] == "app.py" ) ):
            lastmodpy = item["st_mtime"]
            jspath = os.path.join("client", "__javascript__", item["basename"] + ".mod.js")
            lastmodjs = getlastmod(jspath)                        
            if lastmodpy > lastmodjs:                
                anychanged = True
    if anychanged:
        runcmd({
            "command": os.path.join("s", "tra.bat"),                
            "color": "BRIGHTCYAN",
            "verbose": True
        })
        browser.refresh()

while True:
    check_client()
    check_dirs()
    time.sleep(2)
