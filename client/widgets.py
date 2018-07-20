from dom import e, Div
from utils import getScrollBarWidth

######################################################
# widgets
class SplitPane(e):
    def resize(self, width, height):
        self.width = width
        self.height = height
        self.contentheight = max(self.height - self.controlheight, 200)
        self.height = self.controlheight + self.contentheight
        self.container.w(self.width).h(self.height)
        self.controlpanel.w(self.width).h(self.controlheight)
        self.contentdiv.w(self.width).h(self.contentheight)
        sbw = getScrollBarWidth()
        self.contentinnerwidth = self.width - sbw
        self.contentinnerheight = self.contentheight - sbw        
        self.contentdiv.x().a(self.contentelement)
        try:
            self.contentelement.resize(self.contentinnerwidth, self.contentinnerheight)
        except:
            pass

    def setcontentelement(self, contentelement):
        self.contentelement = contentelement
        self.resize(self.width, self.height)

    def resizetowindow(self):
        self.resize(window.innerWidth, window.innerHeight)

    def __init__(self, args = {}):
        super().__init__("div")
        self.controlheight = args.get("controlheight", 100)
        self.container = Div(["splitpane", "container"])
        self.controlpanel = Div(["splitpane", "controlpanel"])
        self.contentdiv = Div(["splitpane", "contentdiv"])
        self.container.a([self.controlpanel, self.contentdiv])        
        self.contentelement = Div()
        self.resize(args.get("width", 600), args.get("height", 400))
        self.fillwindow = args.get("fillwindow", False)
        if self.fillwindow:
            window.addEventListener("resize", self.resizetowindow)
            self.resizetowindow()
        self.a(self.container)

######################################################