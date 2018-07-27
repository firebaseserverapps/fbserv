from utils import SUBMIT_URL, ge, cpick, getelse, getrec
from dom import Div, Span, TextInput, PasswordInput, Button
from widgets import TabPane, Tab, FileUploader
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

    def updatedetailscallback(self):
        userdetails = {
            "displayname": self.displaynameinput.getText(),
            "photourl": self.photourlinput.getText()
        }
        self.sioreq({
            "kind": "updateuserdetails",
            "uid": self.uid,
            "userdetails": userdetails
        })

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
        self.userdetailsdiv = Div("userdetailsdiv")
        self.displaynamelabel = Span().html("Display name:")
        self.displaynameinput = TextInput().ac("profiletextinput").w(250)
        self.photourllabel = Span().html("Photo url:")        
        self.photourlinput = TextInput().ac("profiletextinput").w(250)
        self.updatedetailsbutton = Button("Update details", self.updatedetailscallback)
        self.userdetailsdiv.a([self.displaynamelabel, self.displaynameinput, self.photourllabel, self.photourlinput, self.updatedetailsbutton])
        self.signupdiv.a([self.signupmaildiv, self.userdetailsdiv, self.userinfodiv])                
        self.firebaseuidiv = Div().sa("id", "firebaseuidiv")        
        self.signupdiv.a(self.firebaseuidiv)

    def serializeconfig(self):
        self.sioreq({
            "kind": "serializeconfig",
            "data": self.configschema.toargs()
        })

    def storecloud(self):
        self.sioreq({
            "kind": "storecloudconfig",
            "data": self.configschema.toargs()
        })

    def retrievecloud(self):
        self.sioreq({
            "kind": "retrievecloudconfig"
        })

    def buildconfigdiv(self):
        self.configdiv = Div()
        self.configdiv.a(Button("Serialize", self.serializeconfig))        
        self.configdiv.a(Button("Store cloud", self.storecloud))        
        self.configdiv.a(Button("Retrieve cloud", self.retrievecloud))        
        self.configschema = Schema(self.schemaconfig)
        self.configdiv.a(self.configschema)

    def build(self):        
        self.root.innerHTML = ""        
        self.buildconfigdiv()
        self.signupdiv = Div()        
        if self.authenabled:
            self.buildsignupdiv()        
        self.profiletab = Tab("profile", "Profile", self.signupdiv)
        self.mainelement = TabPane({
            "id": "maintabpane",
            "fillwindow": True,
            "tabs": [
                Tab("main", "Main", Div("contentplaceholder").html("Main.")),
                Tab("config", "Config", self.configdiv),
                Tab("upload", "Upload", FileUploader({"url": "/upload"})),
                Tab("log", "Log", Div("contentplaceholder").html("Log.")),
                self.profiletab,
                Tab("about", "About", Div("contentplaceholder").html("About."))
            ],
            "selected": "upload"
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
            self.photourldiv = Div().html("photo url : <span class='{}'>{}</span>".format(cpick(self.photoURL, "uiinfo", "uiinfored"), getelse(self.photoURL,"&lt;NA&gt;")))
            self.uidinfodiv = Div().html("uid : <span class='uiinfo'>{}</span>".format(self.uid)).pb(8)
            self.userinfodiv.x().a([self.nameinfodiv, self.emailinfodiv, self.verifiedinfodiv, self.photourldiv, self.uidinfodiv])
            self.emailinput.setText(self.email)        
            self.displaynameinput.setText(self.displayName)                
            self.photourlinput.setText(self.photoURL)                
            if self.photoURL:
                self.photodiv = Div("photodiv").html("<img src='{}'></img>".format(self.photoURL))
                self.signupdiv.a(self.photodiv)
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
        self.authenabled = ( getrec("global/auth/enabled", self.schemaconfig) == "true" )

    def startui(self):
        self.ui.start('#firebaseuidiv', self.uiConfig)

    def siores(self, obj):
        print("<-", obj)
        if "kind" in obj:
            kind = obj["kind"]
            if kind == "connectedack":
                self.getschemaconfigfromobj(obj)
                self.build()
                if self.authenabled:                
                    self.firebaseconfig = obj["firebaseconfig"]
                    print("initializing firebase from", self.firebaseconfig)
                    firebase.initializeApp(self.firebaseconfig)
                    self.database = firebase.database()
                    firebase.auth().onAuthStateChanged(self.authstatechanged)
                    self.initializefirebaseui()
                    setTimeout(self.startui, 2000)
            elif kind == "configsaved":
                window.alert("Config saved, {} characters".format(obj["size"]))
            elif kind == "setcloudconfig":
                self.getschemaconfigfromobj(obj)
                self.build()
                setTimeout(lambda: window.alert("Config set from cloud."), 10)
            elif kind == "alert":
                window.alert(obj["data"])
                if obj["reload"]:
                    location.reload()

    def startup(self):
        print("creating socket {}".format(SUBMIT_URL))

        self.socket = io.connect(SUBMIT_URL)

        print("socket created ok")        

        self.socket.on('connect', self.onconnect)
        self.socket.on('siores', self.siores)
######################################################