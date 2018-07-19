import time
import threading

from selenium import webdriver

from utils.process import ProcessManager
from utils.misc import read_yaml_from_file, write_yaml_to_file

BROWSER_CONFIG_PATH = "cache/browserconfig.yml"

browser = webdriver.Chrome()

server = ProcessManager({
    "command": "python",
    "command_args": ["-u", "server.py"],    
    "verbose": True
})

server.start()

browser.get('http://localhost:5000')

browserconfig = read_yaml_from_file(BROWSER_CONFIG_PATH, {})
browser_x = browserconfig.get("x", 400)
browser_y = browserconfig.get("y", 50)
browser_w = browserconfig.get("width", 600)
browser_h = browserconfig.get("height", 400)

browser.set_window_position(browser_x, browser_y)
browser.set_window_size(browser_w, browser_h)

def watch_browser_thread_target(browser, browserconfig):
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

while server.process.is_alive():
    pass
