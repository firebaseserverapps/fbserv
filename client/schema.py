from dom import e, Div

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
    def build(self):
        self.x().ac("schema")
        self.itemdiv = Div("item")
        self.keydiv = Div("key")
        self.valuediv = Div("value")
        self.helpdiv = Div(["box","help"]).html("?")
        self.copydiv = Div(["box","copy"]).html("C")
        self.deletediv = Div(["box","delete"]).html("X")
        if isdict(self.parent):
            self.itemdiv.a(self.keydiv)
        self.itemdiv.a([self.valuediv, self.helpdiv, self.copydiv, self.deletediv])
        if iscollection(self):
            self.openbutton = Div("openbutton")
            self.valuediv.a(self.openbutton)            
        self.a(self.itemdiv)

    def __init__(self, args = {}):
        super().__init__("div")
        self.parent = args.get("parent", None)
        self.kind = args.get("kind", "scalar")
        self.disposition = args.get("disposition", "string")
        self.constraint = args.get("constraint", None)
        self.key = args.get("key", None)
        self.value = args.get("value", "")        
        self.build()
