from utils import ce

######################################################
# dom
class e:
    # create tag
    def __init__(self, tag):
        self.e = ce(tag)

    # background color
    def bc(self, color):
        self.e.style.backgroundColor = color
        return self

    # cursor pointer
    def cp(self):
        self.e.style.cursor = "pointer"
        return self

    # color
    def c(self, color):
        self.e.style.color = color
        return self

    # z-index
    def zi(self, zindex):
        self.e.style.zIndex = zindex
        return self

    # opacity
    def op(self, opacity):
        self.e.style.opacity = opacity
        return self

    # monospace
    def ms(self):
        self.e.style.fontFamily = "monospace"
        return self

    # append element
    def a(self, element):
        if Array.isArray(element):
            for eitem in element:
                self.e.appendChild(eitem.e)
        else:
            self.e.appendChild(element.e)
        return self

    # shorthand for setAttribute
    def sa(self, key, value):
        self.e.setAttribute(key,value)
        return self

    # shorthand for removeAttribute
    def ra(self, key):
        self.e.removeAttribute(key)
        return self

    # set or remove attribute conditional
    def srac(self, cond, key, value):
        if cond:
            self.sa(key, value)
        else:
            self.ra(key)

    # shorthand for getAttribute
    def ga(self, key):
        return self.e.getAttribute(key)

    # shorthand for setting value
    def sv(self, value):
        self.e.value = value
        return self

    # set inner html
    def html(self, value):
        self.e.innerHTML = value
        return self

    # clear
    def x(self):
        #self.html("")
        while self.e.firstChild:
            self.e.removeChild(self.e.firstChild)
        return self

    # width
    def w(self, w):
        self.e.style.width = w + "px"
        return self

    # min width
    def mw(self, w):
        self.e.style.minWidth = w + "px"
        return self

    # height
    def h(self, h):
        self.e.style.height = h + "px"
        return self

    # min height
    def mh(self, h):
        self.e.style.minHeight = h + "px"
        return self

    # top
    def t(self, t):
        self.e.style.top = t + "px"
        return self

    # left
    def l(self, l):
        self.e.style.left = l + "px"
        return self

    # position vector
    def pv(self, v):
        return self.l(v.x).t(v.y)

    # position absolute
    def pa(self):
        self.e.style.position = "absolute"
        return self

    # position relative
    def pr(self):
        self.e.style.position = "relative"
        return self

    def pad(self, pad):
        self.e.style.padding = pad + "px"
        return self

    # margin left
    def ml(self, ml):
        self.e.style.marginLeft = ml + "px"
        return self

    # margin right
    def mr(self, mr):
        self.e.style.marginRight = mr + "px"
        return self

    # margin top
    def mt(self, mt):
        self.e.style.marginTop = mt + "px"
        return self

    # margin bottom
    def mb(self, mb):
        self.e.style.marginBottom = mb + "px"
        return self

    # padding left
    def pl(self, pl):
        self.e.style.paddingLeft = pl + "px"
        return self

    # padding right
    def par(self, pr):
        self.e.style.paddingRight = pr + "px"
        return self

    # padding top
    def pt(self, pt):
        self.e.style.paddingTop = pt + "px"
        return self

    # padding bottom
    def pb(self, pb):
        self.e.style.paddingBottom = pb + "px"
        return self

    # add class
    def ac(self, klass):
        if Array.isArray(klass):
            for classitem in klass:
                self.e.classList.add(classitem)
        else:
            self.e.classList.add(klass)
        return self

    # add class conditional
    def acc(self, cond, klass):
        if cond:
            self.e.classList.add(klass)
        return self

    # remove class
    def rc(self, klass):
        if Array.isArray(klass):
            for classitem in klass:
                self.e.classList.remove(classitem)
        else:
            self.e.classList.remove(klass)
        return self

    # add or remove class based on condition
    def arc(self, cond, klass):
        if cond:
            self.e.classList.add(klass)
        else:
            self.e.classList.remove(klass)
        return self

    # return value
    def v(self):
        return self.e.value

    # focus me
    def focusme(self):                
        self.e.focus()
        return self

    # focus me later
    def fl(self, timeout = 50):                
        setTimeout(self.focusme, timeout)
        return self

    # add event listener
    def ae(self, kind, callback, arg = False):
        self.e.addEventListener(kind, callback, arg)
        return self

    # disable
    def disable(self):
        return self.sa("disabled", True)

    # enable
    def enable(self):
        return self.ra("disabled")

    # able
    def able(self, able):
        if able:
            return self.enable()
        return self.disable()

    # font size
    def fs(self, size):
        self.e.style.fontSize = size + "px"
        return self

class Div(e):
    def __init__(self, klass = None):
        super().__init__("div")
        if klass:            
            self.ac(klass)

class Span(e):
    def __init__(self, klass = None):
        super().__init__("span")
        if klass:
            self.ac(klass)

class Input(e):
    def __init__(self, kind):
        super().__init__("input")
        self.sa("type", kind)

class Button(Input):
    def __init__(self, caption, callback):
        super().__init__("button")
        self.sa("value", caption)
        self.ae("mousedown", callback)

class Select(e):
    def __init__(self):
        super().__init__("select")

class Option(e):
    def __init__(self, key, displayname, selected = False):
        super().__init__("option")
        self.sa("name", key)
        self.sa("id", key)
        self.sv(key)
        self.html(displayname)
        if selected:
            self.sa("selected", True)

class ComboBox(e):
    def changed(self):
        if self.changecallback:
            self.changecallback(self.v())

    def __init__(self):        
        super().__init__("select")
        self.ae("change", self.changed)

    def setoptions(self, options, selected, changecallback):
        self.changecallback = changecallback
        self.x()
        for option in options:                        
            self.a(Option(option[0], option[1], option[0] == selected))
        return self

class Slider(Input):
    def setmin(self, min):
        self.sa("min", min)
        return self

    def setmax(self, max):
        self.sa("max", max)
        return self

    def __init__(self):
        super().__init__("range")

class CheckBox(Input):
    def setchecked(self, checked):
        self.e.checked = checked
        return self

    def getchecked(self):
        return self.e.checked

    def __init__(self, checked = False):
        super().__init__("checkbox")
        self.setchecked(checked)

class TextInput(Input):
    def __init__(self):
        super().__init__("text")
        self.ac("textinput")

    def setText(self, content):
        self.sv(content)
        return self

    def getText(self):
        return self.v()

class PasswordInput(Input):
    def __init__(self):
        super().__init__("password")

    def setText(self, content):
        self.sv(content)
        return self

    def getText(self):
        return self.v()

class TextArea(e):
    def __init__(self):
        super().__init__("textarea")

    def setText(self, content):
        self.sv(content)
        return self

    def getText(self):
        return self.v()

class Canvas(e):
    def __init__(self, width, height):
        super().__init__("canvas")
        self.width = width
        self.height = height
        self.sa("width", self.width)
        self.sa("height", self.height)        
        self.ctx = self.e.getContext("2d")

    def lineWidth(self, linewidth):        
        self.ctx.lineWidth = linewidth

    def strokeStyle(self, strokestyle):        
        self.ctx.strokeStyle = strokestyle

    def fillStyle(self, fillstyle):        
        self.ctx.fillStyle = fillstyle

    def fillRect(self, tlv, brv):          
        self.ctx.fillRect(tlv.x, tlv.y, brv.m(tlv).x, brv.m(tlv).y)

    def clear(self):        
        self.ctx.clearRect(0, 0, self.width, self.height)

    def drawline(self, fromv, tov):        
        self.ctx.beginPath()
        self.ctx.moveTo(fromv.x, fromv.y)
        self.ctx.lineTo(tov.x, tov.y)
        self.ctx.stroke()

class Form(e):
    def __init__(self):
        super().__init__("form")

class P(e):
    def __init__(self):
        super().__init__("p")

class Label(e):
    def __init__(self):
        super().__init__("label")

class FileInput(Input):
    def setmultiple(self, multiple):
        self.srac(multiple, "multiple", True)
        return self

    def getmultiple(self):
        return self.ga("multiple")

    def setaccept(self, accept):
        return self.sa("accept", accept)

    def getaccept(self):
        return self.ga("accept")

    def files(self):
        return self.e.files

    def __init__(self):
        super().__init__("file")
######################################################
