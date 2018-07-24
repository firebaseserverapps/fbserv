	__nest__ (
		__all__,
		'widgets', {
			__all__: {
				__inited__: false,
				__init__: function (__all__) {
					var __name__ = 'widgets';
					var e = __init__ (__world__.dom).e;
					var Div = __init__ (__world__.dom).Div;
					var getScrollBarWidth = __init__ (__world__.utils).getScrollBarWidth;
					var SplitPane = __class__ ('SplitPane', [e], {
						__module__: __name__,
						get resize () {return __get__ (this, function (self, width, height) {
							self.width = max (width, self.minwidth);
							self.height = height;
							self.contentheight = max (self.height - self.controlheight, self.mincontentheight);
							self.height = self.controlheight + self.contentheight;
							self.container.w (self.width).h (self.height);
							self.controlpanel.w (self.width).h (self.controlheight);
							self.contentdiv.w (self.width).h (self.contentheight);
							var sbw = getScrollBarWidth ();
							self.contentinnerwidth = self.width - sbw;
							self.contentinnerheight = self.contentheight - sbw;
							self.contentdiv.x ().a (self.contentelement);
							try {
								self.contentelement.resize (self.contentinnerwidth, self.contentinnerheight);
							}
							catch (__except0__) {
								// pass;
							}
							return self;
						});},
						get setcontentelement () {return __get__ (this, function (self, contentelement) {
							self.contentelement = contentelement;
							self.resize (self.width, self.height);
							return self;
						});},
						get resizetowindow () {return __get__ (this, function (self) {
							self.resize (window.innerWidth, window.innerHeight);
							return self;
						});},
						get __init__ () {return __get__ (this, function (self, args) {
							if (typeof args == 'undefined' || (args != null && args .hasOwnProperty ("__kwargtrans__"))) {;
								var args = dict ({});
							};
							__super__ (SplitPane, '__init__') (self, 'div');
							self.controlheight = args.py_get ('controlheight', 100);
							self.container = Div (list (['splitpane', 'container']));
							self.controlpanel = Div (list (['splitpane', 'controlpanel']));
							self.contentdiv = Div (list (['splitpane', 'contentdiv']));
							self.container.a (list ([self.controlpanel, self.contentdiv]));
							self.contentelement = Div ();
							self.minwidth = args.py_get ('minwidth', 400);
							self.mincontentheight = args.py_get ('mincontentheight', 200);
							self.resize (args.py_get ('width', 600), args.py_get ('height', 400));
							self.fillwindow = args.py_get ('fillwindow', false);
							if (self.fillwindow) {
								window.addEventListener ('resize', self.resizetowindow);
								self.resizetowindow ();
							}
							self.a (self.container);
						});}
					});
					var Tab = __class__ ('Tab', [e], {
						__module__: __name__,
						get __init__ () {return __get__ (this, function (self, key, displayname, element) {
							__super__ (Tab, '__init__') (self, 'div');
							self.key = key;
							self.displayname = displayname;
							self.element = element;
							self.container = Div (list (['tab', 'container', 'noselect'])).html (displayname);
							self.a (self.container);
						});}
					});
					var TabPane = __class__ ('TabPane', [SplitPane], {
						__module__: __name__,
						get __init__ () {return __get__ (this, function (self, args) {
							if (typeof args == 'undefined' || (args != null && args .hasOwnProperty ("__kwargtrans__"))) {;
								var args = dict ({});
							};
							args ['controlheight'] = args.py_get ('controlheight', 35);
							__super__ (TabPane, '__init__') (self, args);
							self.tabmargin = args.py_get ('tabmargin', 5);
							self.tabpadding = args.py_get ('tabpadding', 5);
							self.tabs = args.py_get ('tabs', list ([]));
							self.settabs (self.tabs);
							self.tabheight = self.controlheight - 2 * (self.tabmargin + self.tabpadding);
							self.tabfontsize = self.tabheight;
							self.id = args.py_get ('id', null);
							self.selected = args.py_get ('selected', null);
							if (self.id) {
								var stored = localStorage.getItem (self.id);
								if (stored) {
									self.selected = stored;
								}
							}
							self.build ();
						});},
						get tabclickedfactory () {return __get__ (this, function (self, tab) {
							var tabclicked = function () {
								self.selected = tab.key;
								if (self.id) {
									localStorage.setItem (self.id, self.selected);
								}
								self.build ();
							};
							return tabclicked;
						});},
						get settabs () {return __get__ (this, function (self, tabs) {
							self.tabs = tabs;
							var __iterable0__ = self.tabs;
							for (var __index0__ = 0; __index0__ < len (__iterable0__); __index0__++) {
								var tab = __iterable0__ [__index0__];
								tab.ae ('mousedown', self.tabclickedfactory (tab));
							}
							return self;
						});},
						get build () {return __get__ (this, function (self) {
							self.controlpanel.x ();
							var __iterable0__ = self.tabs;
							for (var __index0__ = 0; __index0__ < len (__iterable0__); __index0__++) {
								var tab = __iterable0__ [__index0__];
								tab.container.h (self.tabheight).pad (self.tabpadding).pl (2 * self.tabpadding).par (2 * self.tabpadding);
								self.controlpanel.a (tab);
								tab.container.arc (tab.key == self.selected, 'selected').fs (self.tabfontsize);
								if (tab.key == self.selected) {
									self.setcontentelement (tab.element);
								}
							}
							return self;
						});}
					});
					__pragma__ ('<use>' +
						'dom' +
						'utils' +
					'</use>')
					__pragma__ ('<all>')
						__all__.Div = Div;
						__all__.SplitPane = SplitPane;
						__all__.Tab = Tab;
						__all__.TabPane = TabPane;
						__all__.__name__ = __name__;
						__all__.e = e;
						__all__.getScrollBarWidth = getScrollBarWidth;
					__pragma__ ('</all>')
				}
			}
		}
	);
