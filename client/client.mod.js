	__nest__ (
		__all__,
		'client', {
			__all__: {
				__inited__: false,
				__init__: function (__all__) {
					var __name__ = 'client';
					var SUBMIT_URL = __init__ (__world__.utils).SUBMIT_URL;
					var ge = __init__ (__world__.utils).ge;
					var cpick = __init__ (__world__.utils).cpick;
					var getelse = __init__ (__world__.utils).getelse;
					var Div = __init__ (__world__.dom).Div;
					var Span = __init__ (__world__.dom).Span;
					var TextInput = __init__ (__world__.dom).TextInput;
					var PasswordInput = __init__ (__world__.dom).PasswordInput;
					var Button = __init__ (__world__.dom).Button;
					var TabPane = __init__ (__world__.widgets).TabPane;
					var Tab = __init__ (__world__.widgets).Tab;
					var Schema = __init__ (__world__.schema).Schema;
					var Client = __class__ ('Client', [object], {
						__module__: __name__,
						get __init__ () {return __get__ (this, function (self) {
							self.socket = null;
							self.root = ge ('clientroot');
						});},
						get signincallback () {return __get__ (this, function (self) {
							var email = self.emailinput.getText ();
							var password = self.passwordinput.getText ();
							print ('signing in user with', email, password);
							firebase.auth ().signInWithEmailAndPassword (email, password).then ((function __lambda__ () {
								return print ('ok');
							}), (function __lambda__ (error) {
								return window.alert ('{}'.format (error));
							}));
						});},
						get signoutcallback () {return __get__ (this, function (self) {
							if (firebase.auth ().currentUser) {
								print ('signing out');
								firebase.auth ().signOut ();
							}
							else {
								window.alert ('Already signed out.');
							}
						});},
						get signupcallback () {return __get__ (this, function (self) {
							var email = self.emailinput.getText ();
							var password = self.passwordinput.getText ();
							print ('signing up user with', email, password);
							firebase.auth ().createUserWithEmailAndPassword (email, password).then ((function __lambda__ () {
								return print ('ok');
							}), (function __lambda__ (error) {
								return window.alert ('{}'.format (error));
							}));
						});},
						get sendverificationcallback () {return __get__ (this, function (self) {
							var email = self.emailinput.getText ();
							firebase.auth ().currentUser.sendEmailVerification ().then ((function __lambda__ () {
								return window.alert ('Verification email has been sent to {} !'.format (email));
							}), (function __lambda__ (error) {
								return window.alert ('{}'.format (error));
							}));
						});},
						get resetpasswordcallback () {return __get__ (this, function (self) {
							var email = self.emailinput.getText ();
							firebase.auth ().sendPasswordResetEmail (email).then ((function __lambda__ () {
								return window.alert ('Password reset email has been sent to {} !'.format (email));
							}), (function __lambda__ (error) {
								return window.alert ('{}'.format (error));
							}));
						});},
						get buildsignupdiv () {return __get__ (this, function (self) {
							self.signupdiv = Div ();
							self.signupmaildiv = Div ('signupmaildiv');
							self.emaillabel = Span ().html ('Email:');
							self.emailinput = TextInput ().ac ('profiletextinput').w (250);
							self.passwordlabel = Span ().html ('Password:');
							self.passwordinput = PasswordInput ().ac ('profiletextinput').w (100);
							self.signinbutton = Button ('Sign in', self.signincallback);
							self.signoutbutton = Button ('Sign out', self.signoutcallback);
							self.signupbutton = Button ('Sign up', self.signupcallback);
							self.sendverificationbutton = Button ('Send verification', self.sendverificationcallback);
							self.resetpasswordbutton = Button ('Reset password', self.resetpasswordcallback);
							self.userinfodiv = Div ('userinfodiv');
							self.signupmaildiv.a (list ([self.emaillabel, self.emailinput, self.passwordlabel, self.passwordinput, self.signinbutton, self.signoutbutton, self.signupbutton, self.sendverificationbutton, self.resetpasswordbutton]));
							self.signupdiv.a (list ([self.signupmaildiv, self.userinfodiv]));
							self.firebaseuidiv = Div ().sa ('id', 'firebaseuidiv');
							self.signupdiv.a (self.firebaseuidiv);
						});},
						get build () {return __get__ (this, function (self) {
							self.root.innerHTML = '';
							self.signupdiv = Div ();
							self.profiletab = Tab ('profile', 'Profile', self.signupdiv);
							self.mainelement = TabPane (dict ({'id': 'maintabpane', 'fillwindow': true, 'tabs': list ([Tab ('main', 'Main', Div ('contentplaceholder').html ('Main.')), Tab ('config', 'Config', Schema (dict ({'kind': 'collection', 'disposition': 'dict'}))), Tab ('log', 'Log', Div ('contentplaceholder').html ('Log.')), self.profiletab, Tab ('about', 'About', Div ('contentplaceholder').html ('About.'))]), 'selected': 'config'}));
							self.root.appendChild (self.mainelement.e);
						});},
						get onconnect () {return __get__ (this, function (self) {
							self.sioreq (dict ({'kind': 'connected'}));
						});},
						get sioreq () {return __get__ (this, function (self, obj) {
							print ('->', obj);
							self.socket.emit ('sioreq', obj);
						});},
						get getuserdisplayname () {return __get__ (this, function (self) {
							if (self.user) {
								if (self.displayName) {
									return self.displayName;
								}
								return self.email;
							}
							return null;
						});},
						get setprofiletab () {return __get__ (this, function (self) {
							self.profiletab.rc (list (['profilelogged', 'profileanon']));
							var dn = self.getuserdisplayname ();
							if (dn) {
								self.profiletab.container.html (dn);
								self.profiletab.ac ('profilelogged');
							}
							else if (self.user) {
								self.profiletab.container.html ('Anonymous');
								self.profiletab.ac ('profileanon');
							}
							else {
								self.profiletab.container.html ('Profile');
							}
						});},
						get signinanonymously () {return __get__ (this, function (self) {
							firebase.auth ().signInAnonymously ().then ((function __lambda__ () {
								return print ('ok');
							}), (function __lambda__ (error) {
								return print (error);
							}));
						});},
						get userstatusverbal () {return __get__ (this, function (self) {
							if (!(self.user)) {
								return '[logged out]';
							}
							if (self.user.isAnonymous) {
								return 'anonymous';
							}
							return cpick (self.emailVerified, 'verified', 'not verified');
						});},
						get userverified () {return __get__ (this, function (self) {
							if (!(self.user)) {
								return false;
							}
							if (self.user.isAnonymous) {
								return false;
							}
							return self.user.emailVerified;
						});},
						get authstatechanged () {return __get__ (this, function (self, user) {
							self.user = user;
							if (user) {
								self.displayName = user.displayName;
								self.email = user.email;
								self.emailVerified = user.emailVerified;
								self.photoURL = user.photoURL;
								self.isAnonymous = user.isAnonymous;
								self.uid = user.uid;
								self.providerData = user.providerData;
								print ('user', self.displayName, self.email);
								print (self.providerData);
								self.nameinfodiv = Div ().html ("name : <span class='{}'>{}</span>".format (cpick (self.displayName, 'uiinfo', 'uiinfored'), getelse (self.displayName, '&lt;NA&gt;'))).pt (5);
								self.emailinfodiv = Div ().html ("email : <span class='{}'>{}</span>".format (cpick (self.email, 'uiinfo', 'uiinfored'), getelse (self.email, '&lt;NA&gt;')));
								self.verifiedinfodiv = Div ().html ("status : <span class='{}'>{}</span>".format (cpick (self.userverified (), 'uiinfo', 'uiinfored'), self.userstatusverbal ()));
								self.uidinfodiv = Div ().html ("uid : <span class='uiinfo'>{}</span>".format (self.uid)).pb (5);
								self.userinfodiv.x ().a (list ([self.nameinfodiv, self.emailinfodiv, self.verifiedinfodiv, self.uidinfodiv]));
								self.emailinput.setText (self.email);
								self.database.ref (('users/' + self.uid) + '/lastseen').set (dict ({'timems': new Date ().getTime ()}));
							}
							else {
								print ('no user');
								self.userinfodiv.x ().a (list ([Div ().html ('Please sign up or sign in !'), Button ('Sign in anonymously', self.signinanonymously ())]));
							}
							self.setprofiletab ();
							self.userinfodiv.fs (cpick (self.user, 10, 14));
						});},
						get initializefirebaseui () {return __get__ (this, function (self) {
							self.uiConfig = dict ({'signInSuccessUrl': '/', 'signInOptions': list ([firebase.auth.GoogleAuthProvider.PROVIDER_ID, firebase.auth.EmailAuthProvider.PROVIDER_ID]), 'tosUrl': '/tos'});
							self.ui = new firebaseui.auth.AuthUI (firebase.auth ());
						});},
						get siores () {return __get__ (this, function (self, obj) {
							print ('<-', obj);
							if (__in__ ('kind', obj)) {
								var kind = obj ['kind'];
								if (kind == 'connectedack') {
									self.build ();
								}
							}
						});},
						get startup () {return __get__ (this, function (self) {
							print ('creating socket {}'.format (SUBMIT_URL));
							self.socket = io.connect (SUBMIT_URL);
							print ('socket created ok');
							self.socket.on ('connect', self.onconnect);
							self.socket.on ('siores', self.siores);
						});}
					});
					__pragma__ ('<use>' +
						'dom' +
						'schema' +
						'utils' +
						'widgets' +
					'</use>')
					__pragma__ ('<all>')
						__all__.Button = Button;
						__all__.Client = Client;
						__all__.Div = Div;
						__all__.PasswordInput = PasswordInput;
						__all__.SUBMIT_URL = SUBMIT_URL;
						__all__.Schema = Schema;
						__all__.Span = Span;
						__all__.Tab = Tab;
						__all__.TabPane = TabPane;
						__all__.TextInput = TextInput;
						__all__.__name__ = __name__;
						__all__.cpick = cpick;
						__all__.ge = ge;
						__all__.getelse = getelse;
					__pragma__ ('</all>')
				}
			}
		}
	);
