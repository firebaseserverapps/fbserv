from utils import SUBMIT_URL
from utils import ge
from dom import Div, TextInput, PasswordInput, Button
from widgets import TabPane, Tab

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
        firebase.auth().signInWithEmailAndPassword(email, password).catch(lambda error: print(error))

    def signoutcallback(self):
        if firebase.auth().currentUser:            
            print("signing out")
            firebase.auth().signOut()
        else:
            print("already signed out")

    def signupcallback(self):
        email = self.emailinput.getText()
        password = self.passwordinput.getText()
        print("signing up user with", email, password)
        firebase.auth().createUserWithEmailAndPassword(email, password).catch(lambda error: print(error))

    def sendverificationcallback(self):
        firebase.auth().currentUser.sendEmailVerification().catch(lambda error: print(error))

    def resetpasswordcallback(self):
        email = self.emailinput.getText()
        firebase.auth().sendPasswordResetEmail(email).then(
            lambda: window.alert("Password reset email has been sent to {} !".format(email)),
            lambda error: print(error)
        )

    def buildsignupdiv(self):
        self.signupdiv = Div()
        self.emailinput = TextInput()
        self.passwordinput = PasswordInput()
        self.signinbutton = Button("Sign in", self.signincallback)
        self.signoutbutton = Button("Sign out", self.signoutcallback)
        self.signupbutton = Button("Sign up", self.signupcallback)
        self.sendverificationbutton = Button("Send verification", self.sendverificationcallback)
        self.resetpasswordbutton = Button("Reset password", self.resetpasswordcallback)
        self.userinfodiv = Div()
        self.signupdiv.a([self.emailinput, self.passwordinput, self.signinbutton, self.signoutbutton, self.signupbutton, self.sendverificationbutton, self.resetpasswordbutton, self.userinfodiv])

    def build(self):        
        self.root.innerHTML = ""        
        self.buildsignupdiv()
        self.mainelement = TabPane({
            "id": "maintabpane",
            "fillwindow": True,
            "tabs": [
                Tab("main", "Main", Div("contentplaceholder").html("Main.")),
                Tab("log", "Log", Div("contentplaceholder").html("Log.")),
                Tab("profile", "Profile", self.signupdiv),
                Tab("about", "About", Div("contentplaceholder").html("About."))
            ],
            "selected": "profile"
        })        
        self.root.appendChild(self.mainelement.e)

    def onconnect(self):
        self.sioreq({"kind": "connected"})

    def sioreq(self, obj):
        print("->", obj)
        self.socket.emit("sioreq", obj)    

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
            print("user", self.email)
            self.userinfodiv.ms().html("email: {}<br>verified: {}<br>uid: {}<br>".format(self.email, self.emailVerified, self.uid))
            self.emailinput.setText(self.email)            
        else:
            print("no user")
            self.userinfodiv.x()

    def siores(self, obj):
        print("<-", obj)
        if "kind" in obj:
            kind = obj["kind"]
            if kind == "connectedack":
                self.build()
                self.firebaseconfig = obj["firebaseconfig"]
                print("initializing firebase from", self.firebaseconfig)
                firebase.initializeApp(self.firebaseconfig)
                firebase.auth().onAuthStateChanged(self.authstatechanged)

    def startup(self):
        print("creating socket {}".format(SUBMIT_URL))

        self.socket = io.connect(SUBMIT_URL)

        print("socket created ok")        

        self.socket.on('connect', self.onconnect)
        self.socket.on('siores', self.siores)
######################################################