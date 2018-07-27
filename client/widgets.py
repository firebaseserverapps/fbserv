from dom import e, Div, P, Form, FileInput, Label
from utils import getScrollBarWidth

######################################################
# widgets
class SplitPane(e):
    def resize(self, width, height):
        self.width = max(width, self.minwidth)
        self.height = height
        self.contentheight = max(self.height - self.controlheight, self.mincontentheight)
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
        return self

    def setcontentelement(self, contentelement):
        self.contentelement = contentelement
        self.resize(self.width, self.height)
        return self

    def resizetowindow(self):
        self.resize(window.innerWidth, window.innerHeight)
        return self

    def __init__(self, args = {}):
        super().__init__("div")
        self.controlheight = args.get("controlheight", 100)
        self.container = Div(["splitpane", "container"])
        self.controlpanel = Div(["splitpane", "controlpanel"])
        self.contentdiv = Div(["splitpane", "contentdiv"])
        self.container.a([self.controlpanel, self.contentdiv])        
        self.contentelement = Div()
        self.minwidth = args.get("minwidth", 400)
        self.mincontentheight = args.get("mincontentheight", 200)
        self.resize(args.get("width", 600), args.get("height", 400))
        self.fillwindow = args.get("fillwindow", False)
        if self.fillwindow:
            window.addEventListener("resize", self.resizetowindow)
            self.resizetowindow()
        self.a(self.container)

class Tab(e):
    def __init__(self, key, displayname, element):
        super().__init__("div")
        self.key = key
        self.displayname = displayname
        self.element = element
        self.container = Div(["tab", "container", "noselect"]).html(displayname)
        self.a(self.container)

class TabPane(SplitPane):
    def __init__(self, args = {}):
        args["controlheight"] = args.get("controlheight", 35)        
        super().__init__(args)
        self.tabmargin = args.get("tabmargin", 5)
        self.tabpadding = args.get("tabpadding", 5)
        self.tabs = args.get("tabs", [])
        self.settabs(self.tabs)
        self.tabheight = self.controlheight - 2 * ( self.tabmargin + self.tabpadding )                
        self.tabfontsize = self.tabheight        
        self.id = args.get("id", None)
        self.selected = args.get("selected", None)
        if self.id:
            stored = localStorage.getItem(self.id)
            if stored:
                self.selected = stored                
        self.build()

    def tabclickedfactory(self, tab):
        def tabclicked():
            self.selected = tab.key
            if self.id:
                localStorage.setItem(self.id, self.selected)            
            self.build()            
        return tabclicked

    def settabs(self, tabs):
        self.tabs = tabs
        for tab in self.tabs:
            tab.ae("mousedown", self.tabclickedfactory(tab))
        return self

    def build(self):        
        self.controlpanel.x()
        for tab in self.tabs:            
            tab.container.h(self.tabheight).pad(self.tabpadding).pl(2 * self.tabpadding).par(2 * self.tabpadding)
            self.controlpanel.a(tab)
            tab.container.arc(tab.key == self.selected, "selected").fs(self.tabfontsize)
            if tab.key == self.selected:
                self.setcontentelement(tab.element)            
        return self

#https://www.smashingmagazine.com/2018/01/drag-drop-file-uploader-vanilla-js/

class FileUploader(e):
    def fileinputchanged(self):
        self.files = self.fileinput.files()
        self.handlefiles()

    def preventdefaults(self, ev):
        ev.preventDefault()
        ev.stopPropagation()

    def highlight(self):
        self.droparea.ac("highlight")

    def unhighlight(self):
        self.droparea.rc("highlight")

    def log(self, html):
        self.infoitems.append(html)
        self.infoitems.reverse()
        self.info.html("<br>".join(self.infoitems))
        self.infoitems.reverse()

    def loginfo(self, content):
        try:
            json = JSON.parse(content)
            if json["success"]:
                path = "/uploads/{}".format(json["savefilename"])                
                self.log("uploaded <span class='fileuploadfilename'>{}</span> <a href='{}' target='_blank' rel='noopener noreferrer'>{}</a>".format(json["filename"], path, path))    
            else:
                self.log("File upload failed.", json["status"])
        except:            
            self.log("Error parsing response as JSON.")

    def uploadfile(self, file):        
        if self.url is None:
            print("no upload url")
            return

        formdata = __new__ (FormData())

        formdata.append('files', file)

        __pragma__("jsiter")

        args = {
            "method": 'POST',
            "body": formdata
        }

        __pragma__("nojsiter")

        fetch(self.url, args).then(
            lambda response: response.text().then(
                lambda content: self.loginfo(content),
                lambda err: self.loginfo(err)    
            ),
            lambda err: self.loginfo(err)
        )

    def handlefiles(self, files = self.files):
        for i in range(files.length):
            print("uploading file {}".format(i))
            self.uploadfile(files.item(i))

    def handledrop(self, ev):
        self.dt = ev.dataTransfer
        self.files = self.dt.files

        self.handlefiles()

    def build(self):
        self.x()
        self.droparea = Div("fileuploaddroparea")
        self.form = Form().ac("fileuploadform")
        self.desc = P().ac("fileuploadp").html("Upload {}s with the file dialog or by dragging and dropping them onto the dashed region".format(self.acceptdisplay))
        self.fileinput = FileInput().ac("fileuploadfileelem").setmultiple(self.multiple).setaccept(self.accept)        
        self.fileinput.sa("id", "fileinputelement")
        self.fileinput.ae("change", self.fileinputchanged)
        self.button = Label().ac("fileuploadbutton").sa("for", "fileinputelement").html("Select some {}s".format(self.acceptdisplay))
        self.form.a([self.desc, self.fileinput, self.button])
        self.droparea.a(self.form)
        for eventname in ["dragenter", "dragover", "dragleave", "drop"]:
            self.droparea.ae(eventname, self.preventdefaults)
        for eventname in ["dragenter", "dragover"]:
            self.droparea.ae(eventname, self.highlight)
        for eventname in ["dragleave", "drop"]:
            self.droparea.ae(eventname, self.unhighlight)
        self.droparea.ae("drop", self.handledrop)
        self.info = Div("fileuploadinfo")
        self.infoitems = []
        self.a([self.droparea, self.info])

    def __init__(self, args = {}):
        super().__init__("div")
        self.url = args.get("url", None)
        self.multiple = args.get("multiple", True)
        self.accept = args.get("accept", "image/*")
        self.acceptdisplay = args.get("acceptdisplay", "image")
        self.build()
######################################################