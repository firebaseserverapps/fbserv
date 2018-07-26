from dom import e, Div, ComboBox, TextInput, Button
from utils import getitem

clipboard = None

SCHEMA_DEFAULT_ARGS = [
    [ "kind", "scalar" ],
    [ "disposition", "string" ],
    [ "constraint", None ],
    [ "key", None],
    [ "value", "" ],
    [ "childsarg", [] ],
    [ "childsopened", False ]
]

def iscollection(schema):
    if schema:
        return schema.kind == "collection"
    return False

def isdict(schema):
    if iscollection(schema):
        return schema.disposition == "dict"
    return False

def islist(schema):
    if iscollection(schema):
        return schema.disposition == "list"
    return False

class Schema(e):    
    def copydivclicked(self):
        global clipboard
        clipboard = self.toargs()

    def openbuttonclicked(self):
        self.childsopened = not self.childsopened
        self.build()

    def createcombochanged(self, v):
        if v == "scalar":
            sch = Schema({
                "parent": self,
                "kind": "scalar"                
            })
        elif v == "dict":
            sch = Schema({
                "parent": self,
                "kind": "collection",
                "disposition": "dict"
            })
        elif v == "list":
            sch = Schema({
                "parent": self,
                "kind": "collection",
                "disposition": "list"
            })
        self.childs.append(sch)
        self.build()

    def stringvalueinputchanged(self):
        self.value = self.stringvalueinput.getText()

    def keyinputchanged(self):
        self.key = self.keyinput.getText()

    def deletechild(self, child):
        global clipboard
        newchilds = []
        for currchild in self.childs:
            if not ( currchild == child ):
                newchilds.append(currchild)
            else:
                clipboard = child.toargs()
        self.childs = newchilds
        self.build()

    def deletedivclicked(self):
        self.parent.deletechild(self)        

    def pastebuttonpushed(self):
        global clipboard        
        if clipboard:
            clipboard["parent"] = self
            sch = Schema(clipboard)
            self.childs.append(sch)
            self.build()

    def build(self):
        self.x().ac("schema")
        self.itemdiv = Div(["item", self.disposition])        
        self.valuediv = Div(["value", self.disposition])
        if self.kind == "scalar":
            if self.disposition == "string":
                self.stringvalueinput = TextInput().ac("string").setText(self.value)
                self.stringvalueinput.ae("keyup", self.stringvalueinputchanged)
                self.valuediv.a(self.stringvalueinput)
        self.helpdiv = Div(["box","help"]).html("?")
        self.copydiv = Div(["box","copy"]).html("C").ae("mousedown", self.copydivclicked)        
        if isdict(self.parent):
            self.keydiv = Div("key")
            self.keyinput = TextInput().ac("key").setText(self.key)
            self.keyinput.ae("keyup", self.keyinputchanged)
            self.keydiv.a(self.keyinput)
            self.itemdiv.a(self.keydiv)
        self.itemdiv.a([self.valuediv, self.helpdiv, self.copydiv])
        if self.parent:
            self.deletediv = Div(["box","delete"]).html("X").ae("mousedown", self.deletedivclicked)
            self.itemdiv.a(self.deletediv)
        if iscollection(self):
            self.openbutton = Div("openbutton").ae("mousedown", self.openbuttonclicked)
            self.valuediv.a(self.openbutton)   
        self.childsdiv = Div("childs")
        if self.childsopened:
            self.creatediv = Div("create")
            cc = self.createcombo            
            self.createcombo = ComboBox().setoptions([
                [ "create" , "Create new"],
                [ "scalar" , "Scalar"],
                [ "dict" , "Dict"],
                [ "list" , "List"]
            ], "create", self.createcombochanged).ac("createcombo")
            self.creatediv.a(self.createcombo)
            self.pastebutton = Button("Paste", self.pastebuttonpushed).ac("pastebutton")
            self.creatediv.a(self.pastebutton)
            self.childsdiv.a(self.creatediv)
            for child in self.childs:
                self.childsdiv.a(child)
        self.container = Div("container")
        self.container.a([self.itemdiv, self.childsdiv])
        self.a(self.container)                
        return self

    def tojsontext(self):
        return JSON.stringify(self.toargs(), None, 2)

    def toargs(self):
        args = {}
        for arg in SCHEMA_DEFAULT_ARGS:
            args[arg[0]] = self[arg[0]]
        args["childsarg"] = []
        for child in self.childs:
            args["childsarg"].append(child.toargs())
        return args

    def __init__(self, args = {}):
        super().__init__("div")
        self.parent = getitem(args, "parent", None)
        for arg in SCHEMA_DEFAULT_ARGS:
            self[arg[0]] = getitem(args, arg[0], arg[1])
        self.childs = []
        for childarg in self.childsarg:
            childarg["parent"] = self
            child = Schema(childarg)
            self.childs.append(child)        
        self.build()
