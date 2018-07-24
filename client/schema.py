from dom import e, Div, ComboBox
from utils import getitem

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
        print(self.tojsontext())

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

    def build(self):
        self.x().ac("schema")
        self.itemdiv = Div(["item", self.disposition])
        self.keydiv = Div("key")
        self.valuediv = Div(["value", self.disposition])
        self.helpdiv = Div(["box","help"]).html("?")
        self.copydiv = Div(["box","copy"]).html("C").ae("mousedown", self.copydivclicked)
        self.deletediv = Div(["box","delete"]).html("X")
        if isdict(self.parent):
            self.itemdiv.a(self.keydiv)
        self.itemdiv.a([self.valuediv, self.helpdiv, self.copydiv, self.deletediv])
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
