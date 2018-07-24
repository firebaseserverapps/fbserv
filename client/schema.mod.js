	__nest__ (
		__all__,
		'schema', {
			__all__: {
				__inited__: false,
				__init__: function (__all__) {
					var __name__ = 'schema';
					var e = __init__ (__world__.dom).e;
					var Div = __init__ (__world__.dom).Div;
					var iscollection = function (schema) {
						if (schema) {
							return schema.kind == 'collection';
						}
						return false;
					};
					var isdict = function (schema) {
						if (iscollection (schema)) {
							return schema.disposition == 'dict';
						}
						return false;
					};
					var islist = function (schema) {
						if (iscollection (schema)) {
							return schema.disposition == 'list';
						}
						return false;
					};
					var Schema = __class__ ('Schema', [e], {
						__module__: __name__,
						get build () {return __get__ (this, function (self) {
							self.x ().ac ('schema');
							self.itemdiv = Div ('item');
							self.keydiv = Div ('key');
							self.valuediv = Div ('value');
							self.helpdiv = Div (list (['box', 'help'])).html ('?');
							self.copydiv = Div (list (['box', 'copy'])).html ('C');
							self.deletediv = Div (list (['box', 'delete'])).html ('X');
							if (isdict (self.parent)) {
								self.itemdiv.a (self.keydiv);
							}
							self.itemdiv.a (list ([self.valuediv, self.helpdiv, self.copydiv, self.deletediv]));
							if (iscollection (self)) {
								self.openbutton = Div ('openbutton');
								self.valuediv.a (self.openbutton);
							}
							self.childsdiv = Div ('childs');
							self.container = Div ('container');
							self.container.a (list ([self.itemdiv, self.childsdiv]));
							self.a (self.container);
						});},
						get __init__ () {return __get__ (this, function (self, args) {
							if (typeof args == 'undefined' || (args != null && args .hasOwnProperty ("__kwargtrans__"))) {;
								var args = dict ({});
							};
							__super__ (Schema, '__init__') (self, 'div');
							self.parent = args.py_get ('parent', null);
							self.kind = args.py_get ('kind', 'scalar');
							self.disposition = args.py_get ('disposition', 'string');
							self.constraint = args.py_get ('constraint', null);
							self.key = args.py_get ('key', null);
							self.value = args.py_get ('value', '');
							self.build ();
						});}
					});
					__pragma__ ('<use>' +
						'dom' +
					'</use>')
					__pragma__ ('<all>')
						__all__.Div = Div;
						__all__.Schema = Schema;
						__all__.__name__ = __name__;
						__all__.e = e;
						__all__.iscollection = iscollection;
						__all__.isdict = isdict;
						__all__.islist = islist;
					__pragma__ ('</all>')
				}
			}
		}
	);
