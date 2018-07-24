from utils import SUBMIT_URL
from utils import ge, cpick, getelse
from dom import Div, Span, TextInput, PasswordInput, Button
from widgets import TabPane, Tab
from schema import Schema

######################################################
# client
class Client:
    def __init__(self):
        self.socket = None
        self.root = ge("clientroot")

    def signincallback(self):
        email = self.emailinput.getText()
        password = self.passwordinput.getText()
        print("signing in user with", email, password)
        firebase.auth().signInWithEmailAndPassword(email, password).then(
            lambda: print("ok"),
            lambda error: window.alert("{}".format(error))
        )

    def signoutcallback(self):
        if firebase.auth().currentUser:            
            print("signing out")
            firebase.auth().signOut()
        else:
            window.alert("Already signed out.")

    def signupcallback(self):
        email = self.emailinput.getText()
        password = self.passwordinput.getText()
        print("signing up user with", email, password)
        firebase.auth().createUserWithEmailAndPassword(email, password).then(
            lambda: print("ok"),
            lambda error: window.alert("{}".format(error))
        )

    def sendverificationcallback(self):
        email = self.emailinput.getText()
        firebase.auth().currentUser.sendEmailVerification().then(
            lambda: window.alert("Verification email has been sent to {} !".format(email)),
            lambda error: window.alert("{}".format(error))
        )

    def resetpasswordcallback(self):
        email = self.emailinput.getText()
        firebase.auth().sendPasswordResetEmail(email).then(
            lambda: window.alert("Password reset email has been sent to {} !".format(email)),
            lambda error: window.alert("{}".format(error))
        )

    def buildsignupdiv(self):
        self.signupdiv = Div()
        self.signupmaildiv = Div("signupmaildiv")
        self.emaillabel = Span().html("Email:")
        self.emailinput = TextInput().ac("profiletextinput").w(250)
        self.passwordlabel = Span().html("Password:")
        self.passwordinput = PasswordInput().ac("profiletextinput").w(100)
        self.signinbutton = Button("Sign in", self.signincallback)
        self.signoutbutton = Button("Sign out", self.signoutcallback)
        self.signupbutton = Button("Sign up", self.signupcallback)
        self.sendverificationbutton = Button("Send verification", self.sendverificationcallback)
        self.resetpasswordbutton = Button("Reset password", self.resetpasswordcallback)
        self.userinfodiv = Div("userinfodiv")
        self.signupmaildiv.a([self.emaillabel, self.emailinput, self.passwordlabel, self.passwordinput, self.signinbutton, self.signoutbutton, self.signupbutton, self.sendverificationbutton, self.resetpasswordbutton])        
        self.signupdiv.a([self.signupmaildiv, self.userinfodiv])
        self.firebaseuidiv = Div().sa("id", "firebaseuidiv")        
        self.signupdiv.a(self.firebaseuidiv)

    def serializeconfig(self):
        self.sioreq({
            "kind": "serializeconfig",
            "data": self.configschema.toargs()
        })

    def buildconfigdiv(self):
        self.configdiv = Div()
        self.configdiv.a(Button("Serialize", self.serializeconfig))        
        self.configschema = Schema(self.schemaconfig)
        self.configdiv.a(self.configschema)

    def build(self):        
        self.root.innerHTML = ""        
        self.buildconfigdiv()
        self.signupdiv = Div()
        #self.buildsignupdiv()        
        self.profiletab = Tab("profile", "Profile", self.signupdiv)
        self.mainelement = TabPane({
            "id": "maintabpane",
            "fillwindow": True,
            "tabs": [
                Tab("main", "Main", Div("contentplaceholder").html("Main.")),
                Tab("config", "Config", self.configdiv),
                Tab("log", "Log", Div("contentplaceholder").html("Log.")),
                self.profiletab,
                Tab("about", "About", Div("contentplaceholder").html("About."))
            ],
            "selected": "config"
        })        
        self.root.appendChild(self.mainelement.e)

    def onconnect(self):
        self.sioreq({"kind": "connected"})

    def sioreq(self, obj):
        print("->", obj)
        self.socket.emit("sioreq", obj)    

    def getuserdisplayname(self):
        if self.user:
            if self.displayName:
                return self.displayName
            return self.email
        return None

    def setprofiletab(self):
        self.profiletab.rc(["profilelogged", "profileanon"])
        dn = self.getuserdisplayname()
        if dn:
            self.profiletab.container.html(dn)
            self.profiletab.ac("profilelogged")
        else:
            if self.user:
                self.profiletab.container.html("Anonymous")
                self.profiletab.ac("profileanon")
            else:
                self.profiletab.container.html("Profile")

    def signinanonymously(self):
        firebase.auth().signInAnonymously().then(
            lambda: print("ok"),
            lambda error: print(error)
        )

    def userstatusverbal(self):
        if not self.user:
            return "[logged out]"
        if self.user.isAnonymous:
            return "anonymous"
        return cpick(self.emailVerified, "verified", "not verified")

    def userverified(self):
        if not self.user:
            return False
        if self.user.isAnonymous:
            return False
        return self.user.emailVerified

    def authstatechanged(self, user):        
        self.user = user
        if user:        
            self.displayName = user.displayName
            self.email = user.email
            self.emailVerified = user.emailVerified
            self.photoURL = user.photoURL
            self.isAnonymous = user.isAnonymous
            self.uid = user.uid
            self.providerData = user.providerData        
            print("user", self.displayName, self.email)
            print(self.providerData)
            self.nameinfodiv = Div().html("name : <span class='{}'>{}</span>".format(cpick(self.displayName, "uiinfo", "uiinfored"), getelse(self.displayName,"&lt;NA&gt;"))).pt(5)
            self.emailinfodiv = Div().html("email : <span class='{}'>{}</span>".format(cpick(self.email, "uiinfo", "uiinfored"), getelse(self.email, "&lt;NA&gt;")))
            self.verifiedinfodiv = Div().html("status : <span class='{}'>{}</span>".format(cpick(self.userverified(), "uiinfo", "uiinfored"), self.userstatusverbal()))            
            self.uidinfodiv = Div().html("uid : <span class='uiinfo'>{}</span>".format(self.uid)).pb(5)
            self.userinfodiv.x().a([self.nameinfodiv, self.emailinfodiv, self.verifiedinfodiv, self.uidinfodiv])
            self.emailinput.setText(self.email)            
            self.database.ref("users/" + self.uid + "/lastseen").set({
                "timems": (__new__(Date())).getTime()
            })
        else:
            print("no user")
            self.userinfodiv.x().a([
                Div().html("Please sign up or sign in !"),
                Button("Sign in anonymously", self.signinanonymously())
            ])
        self.setprofiletab()
        self.userinfodiv.fs(cpick(self.user, 10, 14))

    def initializefirebaseui(self):
        self.uiConfig = {
            "signInSuccessUrl": '/',
            "signInOptions": [            
                firebase.auth.GoogleAuthProvider.PROVIDER_ID,
                #firebase.auth.FacebookAuthProvider.PROVIDER_ID,
                #firebase.auth.TwitterAuthProvider.PROVIDER_ID,
                #firebase.auth.GithubAuthProvider.PROVIDER_ID,
                firebase.auth.EmailAuthProvider.PROVIDER_ID,
                #firebase.auth.PhoneAuthProvider.PROVIDER_ID
            ],        
           "tosUrl": '/tos'
        }
        self.ui = __new__(firebaseui.auth.AuthUI(firebase.auth()))        

    def getschemaconfigfromobj(self, obj):
        self.schemaconfig = {
            "kind": "collection",
            "disposition": "dict"
        }
        if "schemaconfig" in obj:
            self.schemaconfig = obj["schemaconfig"]            

    def siores(self, obj):
        print("<-", obj)
        if "kind" in obj:
            kind = obj["kind"]
            if kind == "connectedack":
                self.getschemaconfigfromobj(obj)
                self.build()
                """
                self.firebaseconfig = obj["firebaseconfig"]
                print("initializing firebase from", self.firebaseconfig)
                firebase.initializeApp(self.firebaseconfig)
                self.database = firebase.database()
                firebase.auth().onAuthStateChanged(self.authstatechanged)
                self.initializefirebaseui()
                self.ui.start('#firebaseuidiv', self.uiConfig)                           
                """
            elif kind == "configsaved":
                window.alert("Config saved, {} characters".format(obj["size"]))

    def startup(self):
        print("creating socket {}".format(SUBMIT_URL))

        self.socket = io.connect(SUBMIT_URL)

        print("socket created ok")        

        self.socket.on('connect', self.onconnect)
        self.socket.on('siores', self.siores)
######################################################