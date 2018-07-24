	__nest__ (
		__all__,
		'dom', {
			__all__: {
				__inited__: false,
				__init__: function (__all__) {
					var __name__ = 'dom';
					var ce = __init__ (__world__.utils).ce;
					var e = __class__ ('e', [object], {
						__module__: __name__,
						get __init__ () {return __get__ (this, function (self, tag) {
							self.e = ce (tag);
						});},
						get bc () {return __get__ (this, function (self, color) {
							self.e.style.backgroundColor = color;
							return self;
						});},
						get cp () {return __get__ (this, function (self) {
							self.e.style.cursor = 'pointer';
							return self;
						});},
						get c () {return __get__ (this, function (self, color) {
							self.e.style.color = color;
							return self;
						});},
						get zi () {return __get__ (this, function (self, zindex) {
							self.e.style.zIndex = zindex;
							return self;
						});},
						get op () {return __get__ (this, function (self, opacity) {
							self.e.style.opacity = opacity;
							return self;
						});},
						get ms () {return __get__ (this, function (self) {
							self.e.style.fontFamily = 'monospace';
							return self;
						});},
						get a () {return __get__ (this, function (self, element) {
							if (Array.isArray (element)) {
								var __iterable0__ = element;
								for (var __index0__ = 0; __index0__ < len (__iterable0__); __index0__++) {
									var eitem = __iterable0__ [__index0__];
									self.e.appendChild (eitem.e);
								}
							}
							else {
								self.e.appendChild (element.e);
							}
							return self;
						});},
						get sa () {return __get__ (this, function (self, key, value) {
							self.e.setAttribute (key, value);
							return self;
						});},
						get ra () {return __get__ (this, function (self, key) {
							self.e.removeAttribute (key);
							return self;
						});},
						get srac () {return __get__ (this, function (self, cond, key, value) {
							if (cond) {
								self.sa (key, value);
							}
							else {
								self.ra (key);
							}
						});},
						get ga () {return __get__ (this, function (self, key) {
							return self.e.getAttribute (key);
						});},
						get sv () {return __get__ (this, function (self, value) {
							self.e.value = value;
							return self;
						});},
						get html () {return __get__ (this, function (self, value) {
							self.e.innerHTML = value;
							return self;
						});},
						get x () {return __get__ (this, function (self) {
							while (self.e.firstChild) {
								self.e.removeChild (self.e.firstChild);
							}
							return self;
						});},
						get w () {return __get__ (this, function (self, w) {
							self.e.style.width = w + 'px';
							return self;
						});},
						get mw () {return __get__ (this, function (self, w) {
							self.e.style.minWidth = w + 'px';
							return self;
						});},
						get h () {return __get__ (this, function (self, h) {
							self.e.style.height = h + 'px';
							return self;
						});},
						get mh () {return __get__ (this, function (self, h) {
							self.e.style.minHeight = h + 'px';
							return self;
						});},
						get t () {return __get__ (this, function (self, t) {
							self.e.style.top = t + 'px';
							return self;
						});},
						get l () {return __get__ (this, function (self, l) {
							self.e.style.left = l + 'px';
							return self;
						});},
						get pv () {return __get__ (this, function (self, v) {
							return self.l (v.x).t (v.y);
						});},
						get pa () {return __get__ (this, function (self) {
							self.e.style.position = 'absolute';
							return self;
						});},
						get pr () {return __get__ (this, function (self) {
							self.e.style.position = 'relative';
							return self;
						});},
						get pad () {return __get__ (this, function (self, pad) {
							self.e.style.padding = pad + 'px';
							return self;
						});},
						get ml () {return __get__ (this, function (self, ml) {
							self.e.style.marginLeft = ml + 'px';
							return self;
						});},
						get mr () {return __get__ (this, function (self, mr) {
							self.e.style.marginRight = mr + 'px';
							return self;
						});},
						get mt () {return __get__ (this, function (self, mt) {
							self.e.style.marginTop = mt + 'px';
							return self;
						});},
						get mb () {return __get__ (this, function (self, mb) {
							self.e.style.marginBottom = mb + 'px';
							return self;
						});},
						get pl () {return __get__ (this, function (self, pl) {
							self.e.style.paddingLeft = pl + 'px';
							return self;
						});},
						get par () {return __get__ (this, function (self, pr) {
							self.e.style.paddingRight = pr + 'px';
							return self;
						});},
						get pt () {return __get__ (this, function (self, pt) {
							self.e.style.paddingTop = pt + 'px';
							return self;
						});},
						get pb () {return __get__ (this, function (self, pb) {
							self.e.style.paddingBottom = pb + 'px';
							return self;
						});},
						get ac () {return __get__ (this, function (self, klass) {
							if (Array.isArray (klass)) {
								var __iterable0__ = klass;
								for (var __index0__ = 0; __index0__ < len (__iterable0__); __index0__++) {
									var classitem = __iterable0__ [__index0__];
									self.e.classList.add (classitem);
								}
							}
							else {
								self.e.classList.add (klass);
							}
							return self;
						});},
						get acc () {return __get__ (this, function (self, cond, klass) {
							if (cond) {
								self.e.classList.add (klass);
							}
							return self;
						});},
						get rc () {return __get__ (this, function (self, klass) {
							if (Array.isArray (klass)) {
								var __iterable0__ = klass;
								for (var __index0__ = 0; __index0__ < len (__iterable0__); __index0__++) {
									var classitem = __iterable0__ [__index0__];
									self.e.classList.remove (classitem);
								}
							}
							else {
								self.e.classList.remove (klass);
							}
							return self;
						});},
						get arc () {return __get__ (this, function (self, cond, klass) {
							if (cond) {
								self.e.classList.add (klass);
							}
							else {
								self.e.classList.remove (klass);
							}
							return self;
						});},
						get v () {return __get__ (this, function (self) {
							return self.e.value;
						});},
						get focusme () {return __get__ (this, function (self) {
							self.e.focus ();
							return self;
						});},
						get fl () {return __get__ (this, function (self, timeout) {
							if (typeof timeout == 'undefined' || (timeout != null && timeout .hasOwnProperty ("__kwargtrans__"))) {;
								var timeout = 50;
							};
							setTimeout (self.focusme, timeout);
							return self;
						});},
						get ae () {return __get__ (this, function (self, kind, callback, arg) {
							if (typeof arg == 'undefined' || (arg != null && arg .hasOwnProperty ("__kwargtrans__"))) {;
								var arg = false;
							};
							self.e.addEventListener (kind, callback, arg);
							return self;
						});},
						get disable () {return __get__ (this, function (self) {
							return self.sa ('disabled', true);
						});},
						get enable () {return __get__ (this, function (self) {
							return self.ra ('disabled');
						});},
						get able () {return __get__ (this, function (self, able) {
							if (able) {
								return self.enable ();
							}
							return self.disable ();
						});},
						get fs () {return __get__ (this, function (self, size) {
							self.e.style.fontSize = size + 'px';
							return self;
						});}
					});
					var Div = __class__ ('Div', [e], {
						__module__: __name__,
						get __init__ () {return __get__ (this, function (self, klass) {
							if (typeof klass == 'undefined' || (klass != null && klass .hasOwnProperty ("__kwargtrans__"))) {;
								var klass = null;
							};
							__super__ (Div, '__init__') (self, 'div');
							if (klass) {
								self.ac (klass);
							}
						});}
					});
					var Span = __class__ ('Span', [e], {
						__module__: __name__,
						get __init__ () {return __get__ (this, function (self, klass) {
							if (typeof klass == 'undefined' || (klass != null && klass .hasOwnProperty ("__kwargtrans__"))) {;
								var klass = null;
							};
							__super__ (Span, '__init__') (self, 'span');
							if (klass) {
								self.ac (klass);
							}
						});}
					});
					var Input = __class__ ('Input', [e], {
						__module__: __name__,
						get __init__ () {return __get__ (this, function (self, kind) {
							__super__ (Input, '__init__') (self, 'input');
							self.sa ('type', kind);
						});}
					});
					var Button = __class__ ('Button', [Input], {
						__module__: __name__,
						get __init__ () {return __get__ (this, function (self, caption, callback) {
							__super__ (Button, '__init__') (self, 'button');
							self.sa ('value', caption);
							self.ae ('mousedown', callback);
						});}
					});
					var Select = __class__ ('Select', [e], {
						__module__: __name__,
						get __init__ () {return __get__ (this, function (self) {
							__super__ (Select, '__init__') (self, 'select');
						});}
					});
					var Option = __class__ ('Option', [e], {
						__module__: __name__,
						get __init__ () {return __get__ (this, function (self, key, displayname, selected) {
							if (typeof selected == 'undefined' || (selected != null && selected .hasOwnProperty ("__kwargtrans__"))) {;
								var selected = false;
							};
							__super__ (Option, '__init__') (self, 'option');
							self.sa ('name', key);
							self.sa ('id', key);
							self.sv (key);
							self.html (displayname);
							if (selected) {
								self.sa ('selected', true);
							}
						});}
					});
					var Slider = __class__ ('Slider', [Input], {
						__module__: __name__,
						get setmin () {return __get__ (this, function (self, min) {
							self.sa ('min', min);
							return self;
						});},
						get setmax () {return __get__ (this, function (self, max) {
							self.sa ('max', max);
							return self;
						});},
						get __init__ () {return __get__ (this, function (self) {
							__super__ (Slider, '__init__') (self, 'range');
						});}
					});
					var CheckBox = __class__ ('CheckBox', [Input], {
						__module__: __name__,
						get setchecked () {return __get__ (this, function (self, checked) {
							self.e.checked = checked;
							return self;
						});},
						get getchecked () {return __get__ (this, function (self) {
							return self.e.checked;
						});},
						get __init__ () {return __get__ (this, function (self, checked) {
							if (typeof checked == 'undefined' || (checked != null && checked .hasOwnProperty ("__kwargtrans__"))) {;
								var checked = false;
							};
							__super__ (CheckBox, '__init__') (self, 'checkbox');
							self.setchecked (checked);
						});}
					});
					var TextInput = __class__ ('TextInput', [Input], {
						__module__: __name__,
						get __init__ () {return __get__ (this, function (self) {
							__super__ (TextInput, '__init__') (self, 'text');
						});},
						get setText () {return __get__ (this, function (self, content) {
							self.sv (content);
							return self;
						});},
						get getText () {return __get__ (this, function (self) {
							return self.v ();
						});}
					});
					var PasswordInput = __class__ ('PasswordInput', [Input], {
						__module__: __name__,
						get __init__ () {return __get__ (this, function (self) {
							__super__ (PasswordInput, '__init__') (self, 'password');
						});},
						get setText () {return __get__ (this, function (self, content) {
							self.sv (content);
							return self;
						});},
						get getText () {return __get__ (this, function (self) {
							return self.v ();
						});}
					});
					var TextArea = __class__ ('TextArea', [e], {
						__module__: __name__,
						get __init__ () {return __get__ (this, function (self) {
							__super__ (TextArea, '__init__') (self, 'textarea');
						});},
						get setText () {return __get__ (this, function (self, content) {
							self.sv (content);
							return self;
						});},
						get getText () {return __get__ (this, function (self) {
							return self.v ();
						});}
					});
					var Canvas = __class__ ('Canvas', [e], {
						__module__: __name__,
						get __init__ () {return __get__ (this, function (self, width, height) {
							__super__ (Canvas, '__init__') (self, 'canvas');
							self.width = width;
							self.height = height;
							self.sa ('width', self.width);
							self.sa ('height', self.height);
							self.ctx = self.e.getContext ('2d');
						});},
						get lineWidth () {return __get__ (this, function (self, linewidth) {
							self.ctx.lineWidth = linewidth;
						});},
						get strokeStyle () {return __get__ (this, function (self, strokestyle) {
							self.ctx.strokeStyle = strokestyle;
						});},
						get fillStyle () {return __get__ (this, function (self, fillstyle) {
							self.ctx.fillStyle = fillstyle;
						});},
						get fillRect () {return __get__ (this, function (self, tlv, brv) {
							self.ctx.fillRect (tlv.x, tlv.y, brv.m (tlv).x, brv.m (tlv).y);
						});},
						get py_clear () {return __get__ (this, function (self) {
							self.ctx.clearRect (0, 0, self.width, self.height);
						});},
						get drawline () {return __get__ (this, function (self, fromv, tov) {
							self.ctx.beginPath ();
							self.ctx.moveTo (fromv.x, fromv.y);
							self.ctx.lineTo (tov.x, tov.y);
							self.ctx.stroke ();
						});}
					});
					var Form = __class__ ('Form', [e], {
						__module__: __name__,
						get __init__ () {return __get__ (this, function (self) {
							__super__ (Form, '__init__') (self, 'form');
						});}
					});
					var P = __class__ ('P', [e], {
						__module__: __name__,
						get __init__ () {return __get__ (this, function (self) {
							__super__ (P, '__init__') (self, 'p');
						});}
					});
					var Label = __class__ ('Label', [e], {
						__module__: __name__,
						get __init__ () {return __get__ (this, function (self) {
							__super__ (Label, '__init__') (self, 'label');
						});}
					});
					var FileInput = __class__ ('FileInput', [Input], {
						__module__: __name__,
						get setmultiple () {return __get__ (this, function (self, multiple) {
							self.srac (multiple, 'multiple', true);
							return self;
						});},
						get getmultiple () {return __get__ (this, function (self) {
							return self.ga ('multiple');
						});},
						get setaccept () {return __get__ (this, function (self, accept) {
							return self.sa ('accept', accept);
						});},
						get getaccept () {return __get__ (this, function (self) {
							return self.ga ('accept');
						});},
						get files () {return __get__ (this, function (self) {
							return self.e.files;
						});},
						get __init__ () {return __get__ (this, function (self) {
							__super__ (FileInput, '__init__') (self, 'file');
						});}
					});
					__pragma__ ('<use>' +
						'utils' +
					'</use>')
					__pragma__ ('<all>')
						__all__.Button = Button;
						__all__.Canvas = Canvas;
						__all__.CheckBox = CheckBox;
						__all__.Div = Div;
						__all__.FileInput = FileInput;
						__all__.Form = Form;
						__all__.Input = Input;
						__all__.Label = Label;
						__all__.Option = Option;
						__all__.P = P;
						__all__.PasswordInput = PasswordInput;
						__all__.Select = Select;
						__all__.Slider = Slider;
						__all__.Span = Span;
						__all__.TextArea = TextArea;
						__all__.TextInput = TextInput;
						__all__.__name__ = __name__;
						__all__.ce = ce;
						__all__.e = e;
					__pragma__ ('</all>')
				}
			}
		}
	);
