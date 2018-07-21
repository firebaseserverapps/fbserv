from utils import SUBMIT_URL
from utils import ge
from dom import Div, Span, TextInput, PasswordInput, Button
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
        self.emailinput = TextInput().w(250)
        self.passwordlabel = Span().html("Password:")
        self.passwordinput = PasswordInput().w(100)
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
            print("user", self.displayName, self.email)
            print(self.providerData)
            self.userinfodiv.html("name: {}<br>email: {}<br>verified: {}<br>uid: {}<br>".format(self.displayName, self.email, self.emailVerified, self.uid))
            self.emailinput.setText(self.email)            
        else:
            print("no user")
            self.userinfodiv.html("Please sign up or sign in !")

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
                self.initializefirebaseui()
                self.ui.start('#firebaseuidiv', self.uiConfig)                

    def startup(self):
        print("creating socket {}".format(SUBMIT_URL))

        self.socket = io.connect(SUBMIT_URL)

        print("socket created ok")        

        self.socket.on('connect', self.onconnect)
        self.socket.on('siores', self.siores)
######################################################