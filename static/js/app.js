"use strict";
// Transcrypt'ed from Python, 2018-07-27 20:44:42
function app () {
    var __symbols__ = ['__py3.6__', '__esv5__'];
    var __all__ = {};
    var __world__ = __all__;
    var __nest__ = function (headObject, tailNames, value) {
        var current = headObject;
        if (tailNames != '') {
            var tailChain = tailNames.split ('.');
            var firstNewIndex = tailChain.length;
            for (var index = 0; index < tailChain.length; index++) {
                if (!current.hasOwnProperty (tailChain [index])) {
                    firstNewIndex = index;
                    break;
                }
                current = current [tailChain [index]];
            }
            for (var index = firstNewIndex; index < tailChain.length; index++) {
                current [tailChain [index]] = {};
                current = current [tailChain [index]];
            }
        }
        for (var attrib in value) {
            current [attrib] = value [attrib];
        }
    };
    __all__.__nest__ = __nest__;
    var __init__ = function (module) {
        if (!module.__inited__) {
            module.__all__.__init__ (module.__all__);
            module.__inited__ = true;
        }
        return module.__all__;
    };
    __all__.__init__ = __init__;
    var __get__ = function (self, func, quotedFuncName) {
        if (self) {
            if (self.hasOwnProperty ('__class__') || typeof self == 'string' || self instanceof String) {
                if (quotedFuncName) {
                    Object.defineProperty (self, quotedFuncName, {
                        value: function () {
                            var args = [] .slice.apply (arguments);
                            return func.apply (null, [self] .concat (args));
                        },
                        writable: true,
                        enumerable: true,
                        configurable: true
                    });
                }
                return function () {
                    var args = [] .slice.apply (arguments);
                    return func.apply (null, [self] .concat (args));
                };
            }
            else {
                return func;
            }
        }
        else {
            return func;
        }
    }
    __all__.__get__ = __get__;
    var __getcm__ = function (self, func, quotedFuncName) {
        if (self.hasOwnProperty ('__class__')) {
            return function () {
                var args = [] .slice.apply (arguments);
                return func.apply (null, [self.__class__] .concat (args));
            };
        }
        else {
            return function () {
                var args = [] .slice.apply (arguments);
                return func.apply (null, [self] .concat (args));
            };
        }
    }
    __all__.__getcm__ = __getcm__;
    var __getsm__ = function (self, func, quotedFuncName) {
        return func;
    }
    __all__.__getsm__ = __getsm__;
    var py_metatype = {
        __name__: 'type',
        __bases__: [],
        __new__: function (meta, name, bases, attribs) {
            var cls = function () {
                var args = [] .slice.apply (arguments);
                return cls.__new__ (args);
            };
            for (var index = bases.length - 1; index >= 0; index--) {
                var base = bases [index];
                for (var attrib in base) {
                    var descrip = Object.getOwnPropertyDescriptor (base, attrib);
                    Object.defineProperty (cls, attrib, descrip);
                }
            }
            cls.__metaclass__ = meta;
            cls.__name__ = name.startsWith ('py_') ? name.slice (3) : name;
            cls.__bases__ = bases;
            for (var attrib in attribs) {
                var descrip = Object.getOwnPropertyDescriptor (attribs, attrib);
                Object.defineProperty (cls, attrib, descrip);
            }
            return cls;
        }
    };
    py_metatype.__metaclass__ = py_metatype;
    __all__.py_metatype = py_metatype;
    var object = {
        __init__: function (self) {},
        __metaclass__: py_metatype,
        __name__: 'object',
        __bases__: [],
        __new__: function (args) {
            var instance = Object.create (this, {__class__: {value: this, enumerable: true}});
            this.__init__.apply (null, [instance] .concat (args));
            return instance;
        }
    };
    __all__.object = object;
    var __class__ = function (name, bases, attribs, meta) {
        if (meta === undefined) {
            meta = bases [0] .__metaclass__;
        }
        return meta.__new__ (meta, name, bases, attribs);
    }
    __all__.__class__ = __class__;
    var __pragma__ = function () {};
    __all__.__pragma__ = __pragma__;
	__nest__ (
		__all__,
		'org.transcrypt.__base__', {
			__all__: {
				__inited__: false,
				__init__: function (__all__) {
					var __name__ = 'org.transcrypt.__base__';
					var __Envir__ = __class__ ('__Envir__', [object], {
						__module__: __name__,
						get __init__ () {return __get__ (this, function (self) {
							self.interpreter_name = 'python';
							self.transpiler_name = 'transcrypt';
							self.transpiler_version = '3.6.101';
							self.target_subdir = '__javascript__';
						});}
					});
					var __envir__ = __Envir__ ();
					__pragma__ ('<all>')
						__all__.__Envir__ = __Envir__;
						__all__.__envir__ = __envir__;
						__all__.__name__ = __name__;
					__pragma__ ('</all>')
				}
			}
		}
	);

	__nest__ (
		__all__,
		'org.transcrypt.__standard__', {
			__all__: {
				__inited__: false,
				__init__: function (__all__) {
					var __name__ = 'org.transcrypt.__standard__';
					var Exception = __class__ ('Exception', [object], {
						__module__: __name__,
						get __init__ () {return __get__ (this, function (self) {
							var kwargs = dict ();
							if (arguments.length) {
								var __ilastarg0__ = arguments.length - 1;
								if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
									var __allkwargs0__ = arguments [__ilastarg0__--];
									for (var __attrib0__ in __allkwargs0__) {
										switch (__attrib0__) {
											case 'self': var self = __allkwargs0__ [__attrib0__]; break;
											default: kwargs [__attrib0__] = __allkwargs0__ [__attrib0__];
										}
									}
									delete kwargs.__kwargtrans__;
								}
								var args = tuple ([].slice.apply (arguments).slice (1, __ilastarg0__ + 1));
							}
							else {
								var args = tuple ();
							}
							self.__args__ = args;
							try {
								self.stack = kwargs.error.stack;
							}
							catch (__except0__) {
								self.stack = 'No stack trace available';
							}
						});},
						get __repr__ () {return __get__ (this, function (self) {
							if (len (self.__args__)) {
								return '{}{}'.format (self.__class__.__name__, repr (tuple (self.__args__)));
							}
							else {
								return '{}()'.format (self.__class__.__name__);
							}
						});},
						get __str__ () {return __get__ (this, function (self) {
							if (len (self.__args__) > 1) {
								return str (tuple (self.__args__));
							}
							else if (len (self.__args__)) {
								return str (self.__args__ [0]);
							}
							else {
								return '';
							}
						});}
					});
					var IterableError = __class__ ('IterableError', [Exception], {
						__module__: __name__,
						get __init__ () {return __get__ (this, function (self, error) {
							Exception.__init__ (self, "Can't iterate over non-iterable", __kwargtrans__ ({error: error}));
						});}
					});
					var StopIteration = __class__ ('StopIteration', [Exception], {
						__module__: __name__,
						get __init__ () {return __get__ (this, function (self, error) {
							Exception.__init__ (self, 'Iterator exhausted', __kwargtrans__ ({error: error}));
						});}
					});
					var ValueError = __class__ ('ValueError', [Exception], {
						__module__: __name__,
						get __init__ () {return __get__ (this, function (self, message, error) {
							Exception.__init__ (self, message, __kwargtrans__ ({error: error}));
						});}
					});
					var KeyError = __class__ ('KeyError', [Exception], {
						__module__: __name__,
						get __init__ () {return __get__ (this, function (self, message, error) {
							Exception.__init__ (self, message, __kwargtrans__ ({error: error}));
						});}
					});
					var AssertionError = __class__ ('AssertionError', [Exception], {
						__module__: __name__,
						get __init__ () {return __get__ (this, function (self, message, error) {
							if (message) {
								Exception.__init__ (self, message, __kwargtrans__ ({error: error}));
							}
							else {
								Exception.__init__ (self, __kwargtrans__ ({error: error}));
							}
						});}
					});
					var NotImplementedError = __class__ ('NotImplementedError', [Exception], {
						__module__: __name__,
						get __init__ () {return __get__ (this, function (self, message, error) {
							Exception.__init__ (self, message, __kwargtrans__ ({error: error}));
						});}
					});
					var IndexError = __class__ ('IndexError', [Exception], {
						__module__: __name__,
						get __init__ () {return __get__ (this, function (self, message, error) {
							Exception.__init__ (self, message, __kwargtrans__ ({error: error}));
						});}
					});
					var AttributeError = __class__ ('AttributeError', [Exception], {
						__module__: __name__,
						get __init__ () {return __get__ (this, function (self, message, error) {
							Exception.__init__ (self, message, __kwargtrans__ ({error: error}));
						});}
					});
					var py_TypeError = __class__ ('py_TypeError', [Exception], {
						__module__: __name__,
						get __init__ () {return __get__ (this, function (self, message, error) {
							Exception.__init__ (self, message, __kwargtrans__ ({error: error}));
						});}
					});
					var Warning = __class__ ('Warning', [Exception], {
						__module__: __name__,
					});
					var UserWarning = __class__ ('UserWarning', [Warning], {
						__module__: __name__,
					});
					var DeprecationWarning = __class__ ('DeprecationWarning', [Warning], {
						__module__: __name__,
					});
					var RuntimeWarning = __class__ ('RuntimeWarning', [Warning], {
						__module__: __name__,
					});
					var __sort__ = function (iterable, key, reverse) {
						if (typeof key == 'undefined' || (key != null && key .hasOwnProperty ("__kwargtrans__"))) {;
							var key = null;
						};
						if (typeof reverse == 'undefined' || (reverse != null && reverse .hasOwnProperty ("__kwargtrans__"))) {;
							var reverse = false;
						};
						if (arguments.length) {
							var __ilastarg0__ = arguments.length - 1;
							if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
								var __allkwargs0__ = arguments [__ilastarg0__--];
								for (var __attrib0__ in __allkwargs0__) {
									switch (__attrib0__) {
										case 'iterable': var iterable = __allkwargs0__ [__attrib0__]; break;
										case 'key': var key = __allkwargs0__ [__attrib0__]; break;
										case 'reverse': var reverse = __allkwargs0__ [__attrib0__]; break;
									}
								}
							}
						}
						else {
						}
						if (key) {
							iterable.sort ((function __lambda__ (a, b) {
								if (arguments.length) {
									var __ilastarg0__ = arguments.length - 1;
									if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
										var __allkwargs0__ = arguments [__ilastarg0__--];
										for (var __attrib0__ in __allkwargs0__) {
											switch (__attrib0__) {
												case 'a': var a = __allkwargs0__ [__attrib0__]; break;
												case 'b': var b = __allkwargs0__ [__attrib0__]; break;
											}
										}
									}
								}
								else {
								}
								return (key (a) > key (b) ? 1 : -(1));
							}));
						}
						else {
							iterable.sort ();
						}
						if (reverse) {
							iterable.reverse ();
						}
					};
					var sorted = function (iterable, key, reverse) {
						if (typeof key == 'undefined' || (key != null && key .hasOwnProperty ("__kwargtrans__"))) {;
							var key = null;
						};
						if (typeof reverse == 'undefined' || (reverse != null && reverse .hasOwnProperty ("__kwargtrans__"))) {;
							var reverse = false;
						};
						if (arguments.length) {
							var __ilastarg0__ = arguments.length - 1;
							if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
								var __allkwargs0__ = arguments [__ilastarg0__--];
								for (var __attrib0__ in __allkwargs0__) {
									switch (__attrib0__) {
										case 'iterable': var iterable = __allkwargs0__ [__attrib0__]; break;
										case 'key': var key = __allkwargs0__ [__attrib0__]; break;
										case 'reverse': var reverse = __allkwargs0__ [__attrib0__]; break;
									}
								}
							}
						}
						else {
						}
						if (py_typeof (iterable) == dict) {
							var result = copy (iterable.py_keys ());
						}
						else {
							var result = copy (iterable);
						}
						__sort__ (result, key, reverse);
						return result;
					};
					var map = function (func, iterable) {
						return (function () {
							var __accu0__ = [];
							var __iterable0__ = iterable;
							for (var __index0__ = 0; __index0__ < len (__iterable0__); __index0__++) {
								var item = __iterable0__ [__index0__];
								__accu0__.append (func (item));
							}
							return __accu0__;
						}) ();
					};
					var filter = function (func, iterable) {
						if (func == null) {
							var func = bool;
						}
						return (function () {
							var __accu0__ = [];
							var __iterable0__ = iterable;
							for (var __index0__ = 0; __index0__ < len (__iterable0__); __index0__++) {
								var item = __iterable0__ [__index0__];
								if (func (item)) {
									__accu0__.append (item);
								}
							}
							return __accu0__;
						}) ();
					};
					var __Terminal__ = __class__ ('__Terminal__', [object], {
						__module__: __name__,
						get __init__ () {return __get__ (this, function (self) {
							self.buffer = '';
							try {
								self.element = document.getElementById ('__terminal__');
							}
							catch (__except0__) {
								self.element = null;
							}
							if (self.element) {
								self.element.style.overflowX = 'auto';
								self.element.style.boxSizing = 'border-box';
								self.element.style.padding = '5px';
								self.element.innerHTML = '_';
							}
						});},
						get print () {return __get__ (this, function (self) {
							var sep = ' ';
							var end = '\n';
							if (arguments.length) {
								var __ilastarg0__ = arguments.length - 1;
								if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
									var __allkwargs0__ = arguments [__ilastarg0__--];
									for (var __attrib0__ in __allkwargs0__) {
										switch (__attrib0__) {
											case 'self': var self = __allkwargs0__ [__attrib0__]; break;
											case 'sep': var sep = __allkwargs0__ [__attrib0__]; break;
											case 'end': var end = __allkwargs0__ [__attrib0__]; break;
										}
									}
								}
								var args = tuple ([].slice.apply (arguments).slice (1, __ilastarg0__ + 1));
							}
							else {
								var args = tuple ();
							}
							self.buffer = '{}{}{}'.format (self.buffer, sep.join ((function () {
								var __accu0__ = [];
								var __iterable0__ = args;
								for (var __index0__ = 0; __index0__ < len (__iterable0__); __index0__++) {
									var arg = __iterable0__ [__index0__];
									__accu0__.append (str (arg));
								}
								return __accu0__;
							}) ()), end).__getslice__ (-(4096), null, 1);
							if (self.element) {
								self.element.innerHTML = self.buffer.py_replace ('\n', '<br>').py_replace (' ', '&nbsp');
								self.element.scrollTop = self.element.scrollHeight;
							}
							else {
								console.log (sep.join ((function () {
									var __accu0__ = [];
									var __iterable0__ = args;
									for (var __index0__ = 0; __index0__ < len (__iterable0__); __index0__++) {
										var arg = __iterable0__ [__index0__];
										__accu0__.append (str (arg));
									}
									return __accu0__;
								}) ()));
							}
						});},
						get input () {return __get__ (this, function (self, question) {
							if (arguments.length) {
								var __ilastarg0__ = arguments.length - 1;
								if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
									var __allkwargs0__ = arguments [__ilastarg0__--];
									for (var __attrib0__ in __allkwargs0__) {
										switch (__attrib0__) {
											case 'self': var self = __allkwargs0__ [__attrib0__]; break;
											case 'question': var question = __allkwargs0__ [__attrib0__]; break;
										}
									}
								}
							}
							else {
							}
							self.print ('{}'.format (question), __kwargtrans__ ({end: ''}));
							var answer = window.prompt ('\n'.join (self.buffer.py_split ('\n').__getslice__ (-(16), null, 1)));
							self.print (answer);
							return answer;
						});}
					});
					var __terminal__ = __Terminal__ ();
					__pragma__ ('<all>')
						__all__.AssertionError = AssertionError;
						__all__.AttributeError = AttributeError;
						__all__.DeprecationWarning = DeprecationWarning;
						__all__.Exception = Exception;
						__all__.IndexError = IndexError;
						__all__.IterableError = IterableError;
						__all__.KeyError = KeyError;
						__all__.NotImplementedError = NotImplementedError;
						__all__.RuntimeWarning = RuntimeWarning;
						__all__.StopIteration = StopIteration;
						__all__.py_TypeError = py_TypeError;
						__all__.UserWarning = UserWarning;
						__all__.ValueError = ValueError;
						__all__.Warning = Warning;
						__all__.__Terminal__ = __Terminal__;
						__all__.__name__ = __name__;
						__all__.__sort__ = __sort__;
						__all__.__terminal__ = __terminal__;
						__all__.filter = filter;
						__all__.map = map;
						__all__.sorted = sorted;
					__pragma__ ('</all>')
				}
			}
		}
	);

    var __call__ = function (/* <callee>, <this>, <params>* */) {
        var args = [] .slice.apply (arguments);
        if (typeof args [0] == 'object' && '__call__' in args [0]) {
            return args [0] .__call__ .apply (args [1], args.slice (2));
        }
        else {
            return args [0] .apply (args [1], args.slice (2));
        }
    };
    __all__.__call__ = __call__;
    __nest__ (__all__, '', __init__ (__all__.org.transcrypt.__base__));
    var __envir__ = __all__.__envir__;
    __nest__ (__all__, '', __init__ (__all__.org.transcrypt.__standard__));
    var Exception = __all__.Exception;
    var IterableError = __all__.IterableError;
    var StopIteration = __all__.StopIteration;
    var ValueError = __all__.ValueError;
    var KeyError = __all__.KeyError;
    var AssertionError = __all__.AssertionError;
    var NotImplementedError = __all__.NotImplementedError;
    var IndexError = __all__.IndexError;
    var AttributeError = __all__.AttributeError;
    var py_TypeError = __all__.py_TypeError;
    var Warning = __all__.Warning;
    var UserWarning = __all__.UserWarning;
    var DeprecationWarning = __all__.DeprecationWarning;
    var RuntimeWarning = __all__.RuntimeWarning;
    var __sort__ = __all__.__sort__;
    var sorted = __all__.sorted;
    var map = __all__.map;
    var filter = __all__.filter;
    __all__.print = __all__.__terminal__.print;
    __all__.input = __all__.__terminal__.input;
    var __terminal__ = __all__.__terminal__;
    var print = __all__.print;
    var input = __all__.input;
    __envir__.executor_name = __envir__.transpiler_name;
    var __main__ = {__file__: ''};
    __all__.main = __main__;
    var __except__ = null;
    __all__.__except__ = __except__;
    var __kwargtrans__ = function (anObject) {
        anObject.__kwargtrans__ = null;
        anObject.constructor = Object;
        return anObject;
    }
    __all__.__kwargtrans__ = __kwargtrans__;
    var __globals__ = function (anObject) {
        if (isinstance (anObject, dict)) {
            return anObject;
        }
        else {
            return dict (anObject)
        }
    }
    __all__.__globals__ = __globals__
    var __super__ = function (aClass, methodName) {
        for (var index = 0; index < aClass.__bases__.length; index++) {
            var base = aClass.__bases__ [index];
            if (methodName in base) {
               return base [methodName];
            }
        }
        throw new Exception ('Superclass method not found');
    }
    __all__.__super__ = __super__
    var property = function (getter, setter) {
        if (!setter) {
            setter = function () {};
        }
        return {get: function () {return getter (this)}, set: function (value) {setter (this, value)}, enumerable: true};
    }
    __all__.property = property;
    var __setProperty__ = function (anObject, name, descriptor) {
        if (!anObject.hasOwnProperty (name)) {
            Object.defineProperty (anObject, name, descriptor);
        }
    }
    __all__.__setProperty__ = __setProperty__
    function assert (condition, message) {
        if (!condition) {
            throw AssertionError (message, new Error ());
        }
    }
    __all__.assert = assert;
    var __merge__ = function (object0, object1) {
        var result = {};
        for (var attrib in object0) {
            result [attrib] = object0 [attrib];
        }
        for (var attrib in object1) {
            result [attrib] = object1 [attrib];
        }
        return result;
    };
    __all__.__merge__ = __merge__;
    var dir = function (obj) {
        var aList = [];
        for (var aKey in obj) {
            aList.push (aKey.startsWith ('py_') ? aKey.slice (3) : aKey);
        }
        aList.sort ();
        return aList;
    };
    __all__.dir = dir;
    var setattr = function (obj, name, value) {
        obj [name] = value;
    };
    __all__.setattr = setattr;
    var getattr = function (obj, name) {
        return name in obj ? obj [name] : obj ['py_' + name];
    };
    __all__.getattr = getattr;
    var hasattr = function (obj, name) {
        try {
            return name in obj || 'py_' + name in obj;
        }
        catch (exception) {
            return false;
        }
    };
    __all__.hasattr = hasattr;
    var delattr = function (obj, name) {
        if (name in obj) {
            delete obj [name];
        }
        else {
            delete obj ['py_' + name];
        }
    };
    __all__.delattr = (delattr);
    var __in__ = function (element, container) {
        if (container === undefined || container === null) {
            return false;
        }
        if (container.__contains__ instanceof Function) {
            return container.__contains__ (element);
        }
        else {
            return (
                container.indexOf ?
                container.indexOf (element) > -1 :
                container.hasOwnProperty (element)
            );
        }
    };
    __all__.__in__ = __in__;
    var __specialattrib__ = function (attrib) {
        return (attrib.startswith ('__') && attrib.endswith ('__')) || attrib == 'constructor' || attrib.startswith ('py_');
    };
    __all__.__specialattrib__ = __specialattrib__;
    var len = function (anObject) {
        if (anObject === undefined || anObject === null) {
            return 0;
        }
        if (anObject.__len__ instanceof Function) {
            return anObject.__len__ ();
        }
        if (anObject.length !== undefined) {
            return anObject.length;
        }
        var length = 0;
        for (var attr in anObject) {
            if (!__specialattrib__ (attr)) {
                length++;
            }
        }
        return length;
    };
    __all__.len = len;
    function __i__ (any) {
        return py_typeof (any) == dict ? any.py_keys () : any;
    }
    function __k__ (keyed, key) {
        var result = keyed [key];
        if (typeof result == 'undefined') {
            if (keyed instanceof Array)
                if (key == +key && key >= 0 && keyed.length > key)
                    return result;
                else
                    throw IndexError (key, new Error());
            else
                throw KeyError (key, new Error());
        }
        return result;
    }
    function __t__ (target) {
        return (
            target === undefined || target === null ? false :
            ['boolean', 'number'] .indexOf (typeof target) >= 0 ? target :
            target.__bool__ instanceof Function ? (target.__bool__ () ? target : false) :
            target.__len__ instanceof Function ?  (target.__len__ () !== 0 ? target : false) :
            target instanceof Function ? target :
            len (target) !== 0 ? target :
            false
        );
    }
    __all__.__t__ = __t__;
    var float = function (any) {
        if (any == 'inf') {
            return Infinity;
        }
        else if (any == '-inf') {
            return -Infinity;
        }
        else if (any == 'nan') {
            return NaN;
        }
        else if (isNaN (parseFloat (any))) {
            if (any === false) {
                return 0;
            }
            else if (any === true) {
                return 1;
            }
            else {
                throw ValueError ("could not convert string to float: '" + str(any) + "'", new Error ());
            }
        }
        else {
            return +any;
        }
    };
    float.__name__ = 'float';
    float.__bases__ = [object];
    __all__.float = float;
    var int = function (any) {
        return float (any) | 0
    };
    int.__name__ = 'int';
    int.__bases__ = [object];
    __all__.int = int;
    var bool = function (any) {
        return !!__t__ (any);
    };
    bool.__name__ = 'bool';
    bool.__bases__ = [int];
    __all__.bool = bool;
    var py_typeof = function (anObject) {
        var aType = typeof anObject;
        if (aType == 'object') {
            try {
                return '__class__' in anObject ? anObject.__class__ : object;
            }
            catch (exception) {
                return aType;
            }
        }
        else {
            return (
                aType == 'boolean' ? bool :
                aType == 'string' ? str :
                aType == 'number' ? (anObject % 1 == 0 ? int : float) :
                null
            );
        }
    };
    __all__.py_typeof = py_typeof;
    var issubclass = function (aClass, classinfo) {
        if (classinfo instanceof Array) {
            for (var index = 0; index < classinfo.length; index++) {
                var aClass2 = classinfo [index];
                if (issubclass (aClass, aClass2)) {
                    return true;
                }
            }
            return false;
        }
        try {
            var aClass2 = aClass;
            if (aClass2 == classinfo) {
                return true;
            }
            else {
                var bases = [].slice.call (aClass2.__bases__);
                while (bases.length) {
                    aClass2 = bases.shift ();
                    if (aClass2 == classinfo) {
                        return true;
                    }
                    if (aClass2.__bases__.length) {
                        bases = [].slice.call (aClass2.__bases__).concat (bases);
                    }
                }
                return false;
            }
        }
        catch (exception) {
            return aClass == classinfo || classinfo == object;
        }
    };
    __all__.issubclass = issubclass;
    var isinstance = function (anObject, classinfo) {
        try {
            return '__class__' in anObject ? issubclass (anObject.__class__, classinfo) : issubclass (py_typeof (anObject), classinfo);
        }
        catch (exception) {
            return issubclass (py_typeof (anObject), classinfo);
        }
    };
    __all__.isinstance = isinstance;
    var callable = function (anObject) {
        return anObject && typeof anObject == 'object' && '__call__' in anObject ? true : typeof anObject === 'function';
    };
    __all__.callable = callable;
    var repr = function (anObject) {
        try {
            return anObject.__repr__ ();
        }
        catch (exception) {
            try {
                return anObject.__str__ ();
            }
            catch (exception) {
                try {
                    if (anObject == null) {
                        return 'None';
                    }
                    else if (anObject.constructor == Object) {
                        var result = '{';
                        var comma = false;
                        for (var attrib in anObject) {
                            if (!__specialattrib__ (attrib)) {
                                if (attrib.isnumeric ()) {
                                    var attribRepr = attrib;
                                }
                                else {
                                    var attribRepr = '\'' + attrib + '\'';
                                }
                                if (comma) {
                                    result += ', ';
                                }
                                else {
                                    comma = true;
                                }
                                result += attribRepr + ': ' + repr (anObject [attrib]);
                            }
                        }
                        result += '}';
                        return result;
                    }
                    else {
                        return typeof anObject == 'boolean' ? anObject.toString () .capitalize () : anObject.toString ();
                    }
                }
                catch (exception) {
                    return '<object of type: ' + typeof anObject + '>';
                }
            }
        }
    };
    __all__.repr = repr;
    var chr = function (charCode) {
        return String.fromCharCode (charCode);
    };
    __all__.chr = chr;
    var ord = function (aChar) {
        return aChar.charCodeAt (0);
    };
    __all__.ord = ord;
    var max = function (nrOrSeq) {
        return arguments.length == 1 ? Math.max.apply (null, nrOrSeq) : Math.max.apply (null, arguments);
    };
    __all__.max = max;
    var min = function (nrOrSeq) {
        return arguments.length == 1 ? Math.min.apply (null, nrOrSeq) : Math.min.apply (null, arguments);
    };
    __all__.min = min;
    var abs = Math.abs;
    __all__.abs = abs;
    var round = function (number, ndigits) {
        if (ndigits) {
            var scale = Math.pow (10, ndigits);
            number *= scale;
        }
        var rounded = Math.round (number);
        if (rounded - number == 0.5 && rounded % 2) {
            rounded -= 1;
        }
        if (ndigits) {
            rounded /= scale;
        }
        return rounded;
    };
    __all__.round = round;
    function __jsUsePyNext__ () {
        try {
            var result = this.__next__ ();
            return {value: result, done: false};
        }
        catch (exception) {
            return {value: undefined, done: true};
        }
    }
    function __pyUseJsNext__ () {
        var result = this.next ();
        if (result.done) {
            throw StopIteration (new Error ());
        }
        else {
            return result.value;
        }
    }
    function py_iter (iterable) {
        if (typeof iterable == 'string' || '__iter__' in iterable) {
            var result = iterable.__iter__ ();
            result.next = __jsUsePyNext__;
        }
        else if ('selector' in iterable) {
            var result = list (iterable) .__iter__ ();
            result.next = __jsUsePyNext__;
        }
        else if ('next' in iterable) {
            var result = iterable
            if (! ('__next__' in result)) {
                result.__next__ = __pyUseJsNext__;
            }
        }
        else if (Symbol.iterator in iterable) {
            var result = iterable [Symbol.iterator] ();
            result.__next__ = __pyUseJsNext__;
        }
        else {
            throw IterableError (new Error ());
        }
        result [Symbol.iterator] = function () {return result;};
        return result;
    }
    function py_next (iterator) {
        try {
            var result = iterator.__next__ ();
        }
        catch (exception) {
            var result = iterator.next ();
            if (result.done) {
                throw StopIteration (new Error ());
            }
            else {
                return result.value;
            }
        }
        if (result == undefined) {
            throw StopIteration (new Error ());
        }
        else {
            return result;
        }
    }
    function __PyIterator__ (iterable) {
        this.iterable = iterable;
        this.index = 0;
    }
    __PyIterator__.prototype.__next__ = function () {
        if (this.index < this.iterable.length) {
            return this.iterable [this.index++];
        }
        else {
            throw StopIteration (new Error ());
        }
    };
    function __JsIterator__ (iterable) {
        this.iterable = iterable;
        this.index = 0;
    }
    __JsIterator__.prototype.next = function () {
        if (this.index < this.iterable.py_keys.length) {
            return {value: this.index++, done: false};
        }
        else {
            return {value: undefined, done: true};
        }
    };
    var py_reversed = function (iterable) {
        iterable = iterable.slice ();
        iterable.reverse ();
        return iterable;
    };
    __all__.py_reversed = py_reversed;
    var zip = function () {
        var args = [] .slice.call (arguments);
        for (var i = 0; i < args.length; i++) {
            if (typeof args [i] == 'string') {
                args [i] = args [i] .split ('');
            }
            else if (!Array.isArray (args [i])) {
                args [i] = Array.from (args [i]);
            }
        }
        var shortest = args.length == 0 ? [] : args.reduce (
            function (array0, array1) {
                return array0.length < array1.length ? array0 : array1;
            }
        );
        return shortest.map (
            function (current, index) {
                return args.map (
                    function (current) {
                        return current [index];
                    }
                );
            }
        );
    };
    __all__.zip = zip;
    function range (start, stop, step) {
        if (stop == undefined) {
            stop = start;
            start = 0;
        }
        if (step == undefined) {
            step = 1;
        }
        if ((step > 0 && start >= stop) || (step < 0 && start <= stop)) {
            return [];
        }
        var result = [];
        for (var i = start; step > 0 ? i < stop : i > stop; i += step) {
            result.push(i);
        }
        return result;
    };
    __all__.range = range;
    function any (iterable) {
        for (var index = 0; index < iterable.length; index++) {
            if (bool (iterable [index])) {
                return true;
            }
        }
        return false;
    }
    function all (iterable) {
        for (var index = 0; index < iterable.length; index++) {
            if (! bool (iterable [index])) {
                return false;
            }
        }
        return true;
    }
    function sum (iterable) {
        var result = 0;
        for (var index = 0; index < iterable.length; index++) {
            result += iterable [index];
        }
        return result;
    }
    __all__.any = any;
    __all__.all = all;
    __all__.sum = sum;
    function enumerate (iterable) {
        return zip (range (len (iterable)), iterable);
    }
    __all__.enumerate = enumerate;
    function copy (anObject) {
        if (anObject == null || typeof anObject == "object") {
            return anObject;
        }
        else {
            var result = {};
            for (var attrib in obj) {
                if (anObject.hasOwnProperty (attrib)) {
                    result [attrib] = anObject [attrib];
                }
            }
            return result;
        }
    }
    __all__.copy = copy;
    function deepcopy (anObject) {
        if (anObject == null || typeof anObject == "object") {
            return anObject;
        }
        else {
            var result = {};
            for (var attrib in obj) {
                if (anObject.hasOwnProperty (attrib)) {
                    result [attrib] = deepcopy (anObject [attrib]);
                }
            }
            return result;
        }
    }
    __all__.deepcopy = deepcopy;
    function list (iterable) {
        var instance = iterable ? [] .slice.apply (iterable) : [];
        return instance;
    }
    __all__.list = list;
    Array.prototype.__class__ = list;
    list.__name__ = 'list';
    list.__bases__ = [object];
    Array.prototype.__iter__ = function () {return new __PyIterator__ (this);};
    Array.prototype.__getslice__ = function (start, stop, step) {
        if (start < 0) {
            start = this.length + start;
        }
        if (stop == null) {
            stop = this.length;
        }
        else if (stop < 0) {
            stop = this.length + stop;
        }
        else if (stop > this.length) {
            stop = this.length;
        }
        var result = list ([]);
        for (var index = start; index < stop; index += step) {
            result.push (this [index]);
        }
        return result;
    };
    Array.prototype.__setslice__ = function (start, stop, step, source) {
        if (start < 0) {
            start = this.length + start;
        }
        if (stop == null) {
            stop = this.length;
        }
        else if (stop < 0) {
            stop = this.length + stop;
        }
        if (step == null) {
            Array.prototype.splice.apply (this, [start, stop - start] .concat (source));
        }
        else {
            var sourceIndex = 0;
            for (var targetIndex = start; targetIndex < stop; targetIndex += step) {
                this [targetIndex] = source [sourceIndex++];
            }
        }
    };
    Array.prototype.__repr__ = function () {
        if (this.__class__ == set && !this.length) {
            return 'set()';
        }
        var result = !this.__class__ || this.__class__ == list ? '[' : this.__class__ == tuple ? '(' : '{';
        for (var index = 0; index < this.length; index++) {
            if (index) {
                result += ', ';
            }
            result += repr (this [index]);
        }
        if (this.__class__ == tuple && this.length == 1) {
            result += ',';
        }
        result += !this.__class__ || this.__class__ == list ? ']' : this.__class__ == tuple ? ')' : '}';;
        return result;
    };
    Array.prototype.__str__ = Array.prototype.__repr__;
    Array.prototype.append = function (element) {
        this.push (element);
    };
    Array.prototype.py_clear = function () {
        this.length = 0;
    };
    Array.prototype.extend = function (aList) {
        this.push.apply (this, aList);
    };
    Array.prototype.insert = function (index, element) {
        this.splice (index, 0, element);
    };
    Array.prototype.remove = function (element) {
        var index = this.indexOf (element);
        if (index == -1) {
            throw ValueError ("list.remove(x): x not in list", new Error ());
        }
        this.splice (index, 1);
    };
    Array.prototype.index = function (element) {
        return this.indexOf (element);
    };
    Array.prototype.py_pop = function (index) {
        if (index == undefined) {
            return this.pop ();
        }
        else {
            return this.splice (index, 1) [0];
        }
    };
    Array.prototype.py_sort = function () {
        __sort__.apply  (null, [this].concat ([] .slice.apply (arguments)));
    };
    Array.prototype.__add__ = function (aList) {
        return list (this.concat (aList));
    };
    Array.prototype.__mul__ = function (scalar) {
        var result = this;
        for (var i = 1; i < scalar; i++) {
            result = result.concat (this);
        }
        return result;
    };
    Array.prototype.__rmul__ = Array.prototype.__mul__;
    function tuple (iterable) {
        var instance = iterable ? [] .slice.apply (iterable) : [];
        instance.__class__ = tuple;
        return instance;
    }
    __all__.tuple = tuple;
    tuple.__name__ = 'tuple';
    tuple.__bases__ = [object];
    function set (iterable) {
        var instance = [];
        if (iterable) {
            for (var index = 0; index < iterable.length; index++) {
                instance.add (iterable [index]);
            }
        }
        instance.__class__ = set;
        return instance;
    }
    __all__.set = set;
    set.__name__ = 'set';
    set.__bases__ = [object];
    Array.prototype.__bindexOf__ = function (element) {
        element += '';
        var mindex = 0;
        var maxdex = this.length - 1;
        while (mindex <= maxdex) {
            var index = (mindex + maxdex) / 2 | 0;
            var middle = this [index] + '';
            if (middle < element) {
                mindex = index + 1;
            }
            else if (middle > element) {
                maxdex = index - 1;
            }
            else {
                return index;
            }
        }
        return -1;
    };
    Array.prototype.add = function (element) {
        if (this.indexOf (element) == -1) {
            this.push (element);
        }
    };
    Array.prototype.discard = function (element) {
        var index = this.indexOf (element);
        if (index != -1) {
            this.splice (index, 1);
        }
    };
    Array.prototype.isdisjoint = function (other) {
        this.sort ();
        for (var i = 0; i < other.length; i++) {
            if (this.__bindexOf__ (other [i]) != -1) {
                return false;
            }
        }
        return true;
    };
    Array.prototype.issuperset = function (other) {
        this.sort ();
        for (var i = 0; i < other.length; i++) {
            if (this.__bindexOf__ (other [i]) == -1) {
                return false;
            }
        }
        return true;
    };
    Array.prototype.issubset = function (other) {
        return set (other.slice ()) .issuperset (this);
    };
    Array.prototype.union = function (other) {
        var result = set (this.slice () .sort ());
        for (var i = 0; i < other.length; i++) {
            if (result.__bindexOf__ (other [i]) == -1) {
                result.push (other [i]);
            }
        }
        return result;
    };
    Array.prototype.intersection = function (other) {
        this.sort ();
        var result = set ();
        for (var i = 0; i < other.length; i++) {
            if (this.__bindexOf__ (other [i]) != -1) {
                result.push (other [i]);
            }
        }
        return result;
    };
    Array.prototype.difference = function (other) {
        var sother = set (other.slice () .sort ());
        var result = set ();
        for (var i = 0; i < this.length; i++) {
            if (sother.__bindexOf__ (this [i]) == -1) {
                result.push (this [i]);
            }
        }
        return result;
    };
    Array.prototype.symmetric_difference = function (other) {
        return this.union (other) .difference (this.intersection (other));
    };
    Array.prototype.py_update = function () {
        var updated = [] .concat.apply (this.slice (), arguments) .sort ();
        this.py_clear ();
        for (var i = 0; i < updated.length; i++) {
            if (updated [i] != updated [i - 1]) {
                this.push (updated [i]);
            }
        }
    };
    Array.prototype.__eq__ = function (other) {
        if (this.length != other.length) {
            return false;
        }
        if (this.__class__ == set) {
            this.sort ();
            other.sort ();
        }
        for (var i = 0; i < this.length; i++) {
            if (this [i] != other [i]) {
                return false;
            }
        }
        return true;
    };
    Array.prototype.__ne__ = function (other) {
        return !this.__eq__ (other);
    };
    Array.prototype.__le__ = function (other) {
        return this.issubset (other);
    };
    Array.prototype.__ge__ = function (other) {
        return this.issuperset (other);
    };
    Array.prototype.__lt__ = function (other) {
        return this.issubset (other) && !this.issuperset (other);
    };
    Array.prototype.__gt__ = function (other) {
        return this.issuperset (other) && !this.issubset (other);
    };
    function bytearray (bytable, encoding) {
        if (bytable == undefined) {
            return new Uint8Array (0);
        }
        else {
            var aType = py_typeof (bytable);
            if (aType == int) {
                return new Uint8Array (bytable);
            }
            else if (aType == str) {
                var aBytes = new Uint8Array (len (bytable));
                for (var i = 0; i < len (bytable); i++) {
                    aBytes [i] = bytable.charCodeAt (i);
                }
                return aBytes;
            }
            else if (aType == list || aType == tuple) {
                return new Uint8Array (bytable);
            }
            else {
                throw py_TypeError;
            }
        }
    }
    var bytes = bytearray;
    __all__.bytearray = bytearray;
    __all__.bytes = bytearray;
    Uint8Array.prototype.__add__ = function (aBytes) {
        var result = new Uint8Array (this.length + aBytes.length);
        result.set (this);
        result.set (aBytes, this.length);
        return result;
    };
    Uint8Array.prototype.__mul__ = function (scalar) {
        var result = new Uint8Array (scalar * this.length);
        for (var i = 0; i < scalar; i++) {
            result.set (this, i * this.length);
        }
        return result;
    };
    Uint8Array.prototype.__rmul__ = Uint8Array.prototype.__mul__;
    function str (stringable) {
        if (typeof stringable === 'number')
            return stringable.toString();
        else {
            try {
                return stringable.__str__ ();
            }
            catch (exception) {
                try {
                    return repr (stringable);
                }
                catch (exception) {
                    return String (stringable);
                }
            }
        }
    };
    __all__.str = str;
    String.prototype.__class__ = str;
    str.__name__ = 'str';
    str.__bases__ = [object];
    String.prototype.__iter__ = function () {new __PyIterator__ (this);};
    String.prototype.__repr__ = function () {
        return (this.indexOf ('\'') == -1 ? '\'' + this + '\'' : '"' + this + '"') .py_replace ('\t', '\\t') .py_replace ('\n', '\\n');
    };
    String.prototype.__str__ = function () {
        return this;
    };
    String.prototype.capitalize = function () {
        return this.charAt (0).toUpperCase () + this.slice (1);
    };
    String.prototype.endswith = function (suffix) {
        if (suffix instanceof Array) {
            for (var i=0;i<suffix.length;i++) {
                if (this.slice (-suffix[i].length) == suffix[i])
                    return true;
            }
        } else
            return suffix == '' || this.slice (-suffix.length) == suffix;
        return false;
    };
    String.prototype.find  = function (sub, start) {
        return this.indexOf (sub, start);
    };
    String.prototype.__getslice__ = function (start, stop, step) {
        if (start < 0) {
            start = this.length + start;
        }
        if (stop == null) {
            stop = this.length;
        }
        else if (stop < 0) {
            stop = this.length + stop;
        }
        var result = '';
        if (step == 1) {
            result = this.substring (start, stop);
        }
        else {
            for (var index = start; index < stop; index += step) {
                result = result.concat (this.charAt(index));
            }
        }
        return result;
    };
    __setProperty__ (String.prototype, 'format', {
        get: function () {return __get__ (this, function (self) {
            var args = tuple ([] .slice.apply (arguments).slice (1));
            var autoIndex = 0;
            return self.replace (/\{(\w*)\}/g, function (match, key) {
                if (key == '') {
                    key = autoIndex++;
                }
                if (key == +key) {
                    return args [key] == undefined ? match : str (args [key]);
                }
                else {
                    for (var index = 0; index < args.length; index++) {
                        if (typeof args [index] == 'object' && args [index][key] != undefined) {
                            return str (args [index][key]);
                        }
                    }
                    return match;
                }
            });
        });},
        enumerable: true
    });
    String.prototype.isalnum = function () {
        return /^[0-9a-zA-Z]{1,}$/.test(this)
    }
    String.prototype.isalpha = function () {
        return /^[a-zA-Z]{1,}$/.test(this)
    }
    String.prototype.isdecimal = function () {
        return /^[0-9]{1,}$/.test(this)
    }
    String.prototype.isdigit = function () {
        return this.isdecimal()
    }
    String.prototype.islower = function () {
        return /^[a-z]{1,}$/.test(this)
    }
    String.prototype.isupper = function () {
        return /^[A-Z]{1,}$/.test(this)
    }
    String.prototype.isspace = function () {
        return /^[\s]{1,}$/.test(this)
    }
    String.prototype.isnumeric = function () {
        return !isNaN (parseFloat (this)) && isFinite (this);
    };
    String.prototype.join = function (strings) {
        return strings.join (this);
    };
    String.prototype.lower = function () {
        return this.toLowerCase ();
    };
    String.prototype.py_replace = function (old, aNew, maxreplace) {
        return this.split (old, maxreplace) .join (aNew);
    };
    String.prototype.lstrip = function () {
        return this.replace (/^\s*/g, '');
    };
    String.prototype.rfind = function (sub, start) {
        return this.lastIndexOf (sub, start);
    };
    String.prototype.rsplit = function (sep, maxsplit) {
        if (sep == undefined || sep == null) {
            sep = /\s+/;
            var stripped = this.strip ();
        }
        else {
            var stripped = this;
        }
        if (maxsplit == undefined || maxsplit == -1) {
            return stripped.split (sep);
        }
        else {
            var result = stripped.split (sep);
            if (maxsplit < result.length) {
                var maxrsplit = result.length - maxsplit;
                return [result.slice (0, maxrsplit) .join (sep)] .concat (result.slice (maxrsplit));
            }
            else {
                return result;
            }
        }
    };
    String.prototype.rstrip = function () {
        return this.replace (/\s*$/g, '');
    };
    String.prototype.py_split = function (sep, maxsplit) {
        if (sep == undefined || sep == null) {
            sep = /\s+/;
            var stripped = this.strip ();
        }
        else {
            var stripped = this;
        }
        if (maxsplit == undefined || maxsplit == -1) {
            return stripped.split (sep);
        }
        else {
            var result = stripped.split (sep);
            if (maxsplit < result.length) {
                return result.slice (0, maxsplit).concat ([result.slice (maxsplit).join (sep)]);
            }
            else {
                return result;
            }
        }
    };
    String.prototype.startswith = function (prefix) {
        if (prefix instanceof Array) {
            for (var i=0;i<prefix.length;i++) {
                if (this.indexOf (prefix [i]) == 0)
                    return true;
            }
        } else
            return this.indexOf (prefix) == 0;
        return false;
    };
    String.prototype.strip = function () {
        return this.trim ();
    };
    String.prototype.upper = function () {
        return this.toUpperCase ();
    };
    String.prototype.__mul__ = function (scalar) {
        var result = '';
        for (var i = 0; i < scalar; i++) {
            result = result + this;
        }
        return result;
    };
    String.prototype.__rmul__ = String.prototype.__mul__;
    function __contains__ (element) {
        return this.hasOwnProperty (element);
    }
    function __keys__ () {
        var keys = [];
        for (var attrib in this) {
            if (!__specialattrib__ (attrib)) {
                keys.push (attrib);
            }
        }
        return keys;
    }
    function __items__ () {
        var items = [];
        for (var attrib in this) {
            if (!__specialattrib__ (attrib)) {
                items.push ([attrib, this [attrib]]);
            }
        }
        return items;
    }
    function __del__ (key) {
        delete this [key];
    }
    function __clear__ () {
        for (var attrib in this) {
            delete this [attrib];
        }
    }
    function __getdefault__ (aKey, aDefault) {
        var result = this [aKey];
        if (result == undefined) {
            result = this ['py_' + aKey]
        }
        return result == undefined ? (aDefault == undefined ? null : aDefault) : result;
    }
    function __setdefault__ (aKey, aDefault) {
        var result = this [aKey];
        if (result != undefined) {
            return result;
        }
        var val = aDefault == undefined ? null : aDefault;
        this [aKey] = val;
        return val;
    }
    function __pop__ (aKey, aDefault) {
        var result = this [aKey];
        if (result != undefined) {
            delete this [aKey];
            return result;
        } else {
            if ( aDefault === undefined ) {
                throw KeyError (aKey, new Error());
            }
        }
        return aDefault;
    }
    function __popitem__ () {
        var aKey = Object.keys (this) [0];
        if (aKey == null) {
            throw KeyError ("popitem(): dictionary is empty", new Error ());
        }
        var result = tuple ([aKey, this [aKey]]);
        delete this [aKey];
        return result;
    }
    function __update__ (aDict) {
        for (var aKey in aDict) {
            this [aKey] = aDict [aKey];
        }
    }
    function __values__ () {
        var values = [];
        for (var attrib in this) {
            if (!__specialattrib__ (attrib)) {
                values.push (this [attrib]);
            }
        }
        return values;
    }
    function __dgetitem__ (aKey) {
        return this [aKey];
    }
    function __dsetitem__ (aKey, aValue) {
        this [aKey] = aValue;
    }
    function dict (objectOrPairs) {
        var instance = {};
        if (!objectOrPairs || objectOrPairs instanceof Array) {
            if (objectOrPairs) {
                for (var index = 0; index < objectOrPairs.length; index++) {
                    var pair = objectOrPairs [index];
                    if ( !(pair instanceof Array) || pair.length != 2) {
                        throw ValueError(
                            "dict update sequence element #" + index +
                            " has length " + pair.length +
                            "; 2 is required", new Error());
                    }
                    var key = pair [0];
                    var val = pair [1];
                    if (!(objectOrPairs instanceof Array) && objectOrPairs instanceof Object) {
                         if (!isinstance (objectOrPairs, dict)) {
                             val = dict (val);
                         }
                    }
                    instance [key] = val;
                }
            }
        }
        else {
            if (isinstance (objectOrPairs, dict)) {
                var aKeys = objectOrPairs.py_keys ();
                for (var index = 0; index < aKeys.length; index++ ) {
                    var key = aKeys [index];
                    instance [key] = objectOrPairs [key];
                }
            } else if (objectOrPairs instanceof Object) {
                instance = objectOrPairs;
            } else {
                throw ValueError ("Invalid type of object for dict creation", new Error ());
            }
        }
        __setProperty__ (instance, '__class__', {value: dict, enumerable: false, writable: true});
        __setProperty__ (instance, '__contains__', {value: __contains__, enumerable: false});
        __setProperty__ (instance, 'py_keys', {value: __keys__, enumerable: false});
        __setProperty__ (instance, '__iter__', {value: function () {new __PyIterator__ (this.py_keys ());}, enumerable: false});
        __setProperty__ (instance, Symbol.iterator, {value: function () {new __JsIterator__ (this.py_keys ());}, enumerable: false});
        __setProperty__ (instance, 'py_items', {value: __items__, enumerable: false});
        __setProperty__ (instance, 'py_del', {value: __del__, enumerable: false});
        __setProperty__ (instance, 'py_clear', {value: __clear__, enumerable: false});
        __setProperty__ (instance, 'py_get', {value: __getdefault__, enumerable: false});
        __setProperty__ (instance, 'py_setdefault', {value: __setdefault__, enumerable: false});
        __setProperty__ (instance, 'py_pop', {value: __pop__, enumerable: false});
        __setProperty__ (instance, 'py_popitem', {value: __popitem__, enumerable: false});
        __setProperty__ (instance, 'py_update', {value: __update__, enumerable: false});
        __setProperty__ (instance, 'py_values', {value: __values__, enumerable: false});
        __setProperty__ (instance, '__getitem__', {value: __dgetitem__, enumerable: false});
        __setProperty__ (instance, '__setitem__', {value: __dsetitem__, enumerable: false});
        return instance;
    }
    __all__.dict = dict;
    dict.__name__ = 'dict';
    dict.__bases__ = [object];
    function __setdoc__ (docString) {
        this.__doc__ = docString;
        return this;
    }
    __setProperty__ (Function.prototype, '__setdoc__', {value: __setdoc__, enumerable: false});
    var __jsmod__ = function (a, b) {
        if (typeof a == 'object' && '__mod__' in a) {
            return a.__mod__ (b);
        }
        else if (typeof b == 'object' && '__rmod__' in b) {
            return b.__rmod__ (a);
        }
        else {
            return a % b;
        }
    };
    __all__.__jsmod__ = __jsmod__;
    var __mod__ = function (a, b) {
        if (typeof a == 'object' && '__mod__' in a) {
            return a.__mod__ (b);
        }
        else if (typeof b == 'object' && '__rmod__' in b) {
            return b.__rmod__ (a);
        }
        else {
            return ((a % b) + b) % b;
        }
    };
    __all__.mod = __mod__;
    var __pow__ = function (a, b) {
        if (typeof a == 'object' && '__pow__' in a) {
            return a.__pow__ (b);
        }
        else if (typeof b == 'object' && '__rpow__' in b) {
            return b.__rpow__ (a);
        }
        else {
            return Math.pow (a, b);
        }
    };
    __all__.pow = __pow__;
    var __neg__ = function (a) {
        if (typeof a == 'object' && '__neg__' in a) {
            return a.__neg__ ();
        }
        else {
            return -a;
        }
    };
    __all__.__neg__ = __neg__;
    var __matmul__ = function (a, b) {
        return a.__matmul__ (b);
    };
    __all__.__matmul__ = __matmul__;
    var __mul__ = function (a, b) {
        if (typeof a == 'object' && '__mul__' in a) {
            return a.__mul__ (b);
        }
        else if (typeof b == 'object' && '__rmul__' in b) {
            return b.__rmul__ (a);
        }
        else if (typeof a == 'string') {
            return a.__mul__ (b);
        }
        else if (typeof b == 'string') {
            return b.__rmul__ (a);
        }
        else {
            return a * b;
        }
    };
    __all__.__mul__ = __mul__;
    var __truediv__ = function (a, b) {
        if (typeof a == 'object' && '__truediv__' in a) {
            return a.__truediv__ (b);
        }
        else if (typeof b == 'object' && '__rtruediv__' in b) {
            return b.__rtruediv__ (a);
        }
        else if (typeof a == 'object' && '__div__' in a) {
            return a.__div__ (b);
        }
        else if (typeof b == 'object' && '__rdiv__' in b) {
            return b.__rdiv__ (a);
        }
        else {
            return a / b;
        }
    };
    __all__.__truediv__ = __truediv__;
    var __floordiv__ = function (a, b) {
        if (typeof a == 'object' && '__floordiv__' in a) {
            return a.__floordiv__ (b);
        }
        else if (typeof b == 'object' && '__rfloordiv__' in b) {
            return b.__rfloordiv__ (a);
        }
        else if (typeof a == 'object' && '__div__' in a) {
            return a.__div__ (b);
        }
        else if (typeof b == 'object' && '__rdiv__' in b) {
            return b.__rdiv__ (a);
        }
        else {
            return Math.floor (a / b);
        }
    };
    __all__.__floordiv__ = __floordiv__;
    var __add__ = function (a, b) {
        if (typeof a == 'object' && '__add__' in a) {
            return a.__add__ (b);
        }
        else if (typeof b == 'object' && '__radd__' in b) {
            return b.__radd__ (a);
        }
        else {
            return a + b;
        }
    };
    __all__.__add__ = __add__;
    var __sub__ = function (a, b) {
        if (typeof a == 'object' && '__sub__' in a) {
            return a.__sub__ (b);
        }
        else if (typeof b == 'object' && '__rsub__' in b) {
            return b.__rsub__ (a);
        }
        else {
            return a - b;
        }
    };
    __all__.__sub__ = __sub__;
    var __lshift__ = function (a, b) {
        if (typeof a == 'object' && '__lshift__' in a) {
            return a.__lshift__ (b);
        }
        else if (typeof b == 'object' && '__rlshift__' in b) {
            return b.__rlshift__ (a);
        }
        else {
            return a << b;
        }
    };
    __all__.__lshift__ = __lshift__;
    var __rshift__ = function (a, b) {
        if (typeof a == 'object' && '__rshift__' in a) {
            return a.__rshift__ (b);
        }
        else if (typeof b == 'object' && '__rrshift__' in b) {
            return b.__rrshift__ (a);
        }
        else {
            return a >> b;
        }
    };
    __all__.__rshift__ = __rshift__;
    var __or__ = function (a, b) {
        if (typeof a == 'object' && '__or__' in a) {
            return a.__or__ (b);
        }
        else if (typeof b == 'object' && '__ror__' in b) {
            return b.__ror__ (a);
        }
        else {
            return a | b;
        }
    };
    __all__.__or__ = __or__;
    var __xor__ = function (a, b) {
        if (typeof a == 'object' && '__xor__' in a) {
            return a.__xor__ (b);
        }
        else if (typeof b == 'object' && '__rxor__' in b) {
            return b.__rxor__ (a);
        }
        else {
            return a ^ b;
        }
    };
    __all__.__xor__ = __xor__;
    var __and__ = function (a, b) {
        if (typeof a == 'object' && '__and__' in a) {
            return a.__and__ (b);
        }
        else if (typeof b == 'object' && '__rand__' in b) {
            return b.__rand__ (a);
        }
        else {
            return a & b;
        }
    };
    __all__.__and__ = __and__;
    var __eq__ = function (a, b) {
        if (typeof a == 'object' && '__eq__' in a) {
            return a.__eq__ (b);
        }
        else {
            return a == b;
        }
    };
    __all__.__eq__ = __eq__;
    var __ne__ = function (a, b) {
        if (typeof a == 'object' && '__ne__' in a) {
            return a.__ne__ (b);
        }
        else {
            return a != b
        }
    };
    __all__.__ne__ = __ne__;
    var __lt__ = function (a, b) {
        if (typeof a == 'object' && '__lt__' in a) {
            return a.__lt__ (b);
        }
        else {
            return a < b;
        }
    };
    __all__.__lt__ = __lt__;
    var __le__ = function (a, b) {
        if (typeof a == 'object' && '__le__' in a) {
            return a.__le__ (b);
        }
        else {
            return a <= b;
        }
    };
    __all__.__le__ = __le__;
    var __gt__ = function (a, b) {
        if (typeof a == 'object' && '__gt__' in a) {
            return a.__gt__ (b);
        }
        else {
            return a > b;
        }
    };
    __all__.__gt__ = __gt__;
    var __ge__ = function (a, b) {
        if (typeof a == 'object' && '__ge__' in a) {
            return a.__ge__ (b);
        }
        else {
            return a >= b;
        }
    };
    __all__.__ge__ = __ge__;
    var __imatmul__ = function (a, b) {
        if ('__imatmul__' in a) {
            return a.__imatmul__ (b);
        }
        else {
            return a.__matmul__ (b);
        }
    };
    __all__.__imatmul__ = __imatmul__;
    var __ipow__ = function (a, b) {
        if (typeof a == 'object' && '__pow__' in a) {
            return a.__ipow__ (b);
        }
        else if (typeof a == 'object' && '__ipow__' in a) {
            return a.__pow__ (b);
        }
        else if (typeof b == 'object' && '__rpow__' in b) {
            return b.__rpow__ (a);
        }
        else {
            return Math.pow (a, b);
        }
    };
    __all__.ipow = __ipow__;
    var __ijsmod__ = function (a, b) {
        if (typeof a == 'object' && '__imod__' in a) {
            return a.__ismod__ (b);
        }
        else if (typeof a == 'object' && '__mod__' in a) {
            return a.__mod__ (b);
        }
        else if (typeof b == 'object' && '__rpow__' in b) {
            return b.__rmod__ (a);
        }
        else {
            return a % b;
        }
    };
    __all__.ijsmod__ = __ijsmod__;
    var __imod__ = function (a, b) {
        if (typeof a == 'object' && '__imod__' in a) {
            return a.__imod__ (b);
        }
        else if (typeof a == 'object' && '__mod__' in a) {
            return a.__mod__ (b);
        }
        else if (typeof b == 'object' && '__rmod__' in b) {
            return b.__rmod__ (a);
        }
        else {
            return ((a % b) + b) % b;
        }
    };
    __all__.imod = __imod__;
    var __imul__ = function (a, b) {
        if (typeof a == 'object' && '__imul__' in a) {
            return a.__imul__ (b);
        }
        else if (typeof a == 'object' && '__mul__' in a) {
            return a = a.__mul__ (b);
        }
        else if (typeof b == 'object' && '__rmul__' in b) {
            return a = b.__rmul__ (a);
        }
        else if (typeof a == 'string') {
            return a = a.__mul__ (b);
        }
        else if (typeof b == 'string') {
            return a = b.__rmul__ (a);
        }
        else {
            return a *= b;
        }
    };
    __all__.__imul__ = __imul__;
    var __idiv__ = function (a, b) {
        if (typeof a == 'object' && '__idiv__' in a) {
            return a.__idiv__ (b);
        }
        else if (typeof a == 'object' && '__div__' in a) {
            return a = a.__div__ (b);
        }
        else if (typeof b == 'object' && '__rdiv__' in b) {
            return a = b.__rdiv__ (a);
        }
        else {
            return a /= b;
        }
    };
    __all__.__idiv__ = __idiv__;
    var __iadd__ = function (a, b) {
        if (typeof a == 'object' && '__iadd__' in a) {
            return a.__iadd__ (b);
        }
        else if (typeof a == 'object' && '__add__' in a) {
            return a = a.__add__ (b);
        }
        else if (typeof b == 'object' && '__radd__' in b) {
            return a = b.__radd__ (a);
        }
        else {
            return a += b;
        }
    };
    __all__.__iadd__ = __iadd__;
    var __isub__ = function (a, b) {
        if (typeof a == 'object' && '__isub__' in a) {
            return a.__isub__ (b);
        }
        else if (typeof a == 'object' && '__sub__' in a) {
            return a = a.__sub__ (b);
        }
        else if (typeof b == 'object' && '__rsub__' in b) {
            return a = b.__rsub__ (a);
        }
        else {
            return a -= b;
        }
    };
    __all__.__isub__ = __isub__;
    var __ilshift__ = function (a, b) {
        if (typeof a == 'object' && '__ilshift__' in a) {
            return a.__ilshift__ (b);
        }
        else if (typeof a == 'object' && '__lshift__' in a) {
            return a = a.__lshift__ (b);
        }
        else if (typeof b == 'object' && '__rlshift__' in b) {
            return a = b.__rlshift__ (a);
        }
        else {
            return a <<= b;
        }
    };
    __all__.__ilshift__ = __ilshift__;
    var __irshift__ = function (a, b) {
        if (typeof a == 'object' && '__irshift__' in a) {
            return a.__irshift__ (b);
        }
        else if (typeof a == 'object' && '__rshift__' in a) {
            return a = a.__rshift__ (b);
        }
        else if (typeof b == 'object' && '__rrshift__' in b) {
            return a = b.__rrshift__ (a);
        }
        else {
            return a >>= b;
        }
    };
    __all__.__irshift__ = __irshift__;
    var __ior__ = function (a, b) {
        if (typeof a == 'object' && '__ior__' in a) {
            return a.__ior__ (b);
        }
        else if (typeof a == 'object' && '__or__' in a) {
            return a = a.__or__ (b);
        }
        else if (typeof b == 'object' && '__ror__' in b) {
            return a = b.__ror__ (a);
        }
        else {
            return a |= b;
        }
    };
    __all__.__ior__ = __ior__;
    var __ixor__ = function (a, b) {
        if (typeof a == 'object' && '__ixor__' in a) {
            return a.__ixor__ (b);
        }
        else if (typeof a == 'object' && '__xor__' in a) {
            return a = a.__xor__ (b);
        }
        else if (typeof b == 'object' && '__rxor__' in b) {
            return a = b.__rxor__ (a);
        }
        else {
            return a ^= b;
        }
    };
    __all__.__ixor__ = __ixor__;
    var __iand__ = function (a, b) {
        if (typeof a == 'object' && '__iand__' in a) {
            return a.__iand__ (b);
        }
        else if (typeof a == 'object' && '__and__' in a) {
            return a = a.__and__ (b);
        }
        else if (typeof b == 'object' && '__rand__' in b) {
            return a = b.__rand__ (a);
        }
        else {
            return a &= b;
        }
    };
    __all__.__iand__ = __iand__;
    var __getitem__ = function (container, key) {
        if (typeof container == 'object' && '__getitem__' in container) {
            return container.__getitem__ (key);
        }
        else if ((typeof container == 'string' || container instanceof Array) && key < 0) {
            return container [container.length + key];
        }
        else {
            return container [key];
        }
    };
    __all__.__getitem__ = __getitem__;
    var __setitem__ = function (container, key, value) {
        if (typeof container == 'object' && '__setitem__' in container) {
            container.__setitem__ (key, value);
        }
        else if ((typeof container == 'string' || container instanceof Array) && key < 0) {
            container [container.length + key] = value;
        }
        else {
            container [key] = value;
        }
    };
    __all__.__setitem__ = __setitem__;
    var __getslice__ = function (container, lower, upper, step) {
        if (typeof container == 'object' && '__getitem__' in container) {
            return container.__getitem__ ([lower, upper, step]);
        }
        else {
            return container.__getslice__ (lower, upper, step);
        }
    };
    __all__.__getslice__ = __getslice__;
    var __setslice__ = function (container, lower, upper, step, value) {
        if (typeof container == 'object' && '__setitem__' in container) {
            container.__setitem__ ([lower, upper, step], value);
        }
        else {
            container.__setslice__ (lower, upper, step, value);
        }
    };
    __all__.__setslice__ = __setslice__;
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
					var getrec = __init__ (__world__.utils).getrec;
					var Div = __init__ (__world__.dom).Div;
					var Span = __init__ (__world__.dom).Span;
					var TextInput = __init__ (__world__.dom).TextInput;
					var PasswordInput = __init__ (__world__.dom).PasswordInput;
					var Button = __init__ (__world__.dom).Button;
					var TabPane = __init__ (__world__.widgets).TabPane;
					var Tab = __init__ (__world__.widgets).Tab;
					var FileUploader = __init__ (__world__.widgets).FileUploader;
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
						get updatedetailscallback () {return __get__ (this, function (self) {
							var userdetails = dict ({'displayname': self.displaynameinput.getText (), 'photourl': self.photourlinput.getText ()});
							self.sioreq (dict ({'kind': 'updateuserdetails', 'uid': self.uid, 'userdetails': userdetails}));
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
							self.userdetailsdiv = Div ('userdetailsdiv');
							self.displaynamelabel = Span ().html ('Display name:');
							self.displaynameinput = TextInput ().ac ('profiletextinput').w (250);
							self.photourllabel = Span ().html ('Photo url:');
							self.photourlinput = TextInput ().ac ('profiletextinput').w (250);
							self.updatedetailsbutton = Button ('Update details', self.updatedetailscallback);
							self.userdetailsdiv.a (list ([self.displaynamelabel, self.displaynameinput, self.photourllabel, self.photourlinput, self.updatedetailsbutton]));
							self.photodiv = Div ('photodiv');
							self.signupdiv.a (list ([self.signupmaildiv, self.userdetailsdiv, self.userinfodiv, self.photodiv]));
							self.firebaseuidiv = Div ().sa ('id', 'firebaseuidiv');
							self.signupdiv.a (self.firebaseuidiv);
						});},
						get serializeconfig () {return __get__ (this, function (self) {
							self.sioreq (dict ({'kind': 'serializeconfig', 'data': self.configschema.toargs ()}));
						});},
						get storecloud () {return __get__ (this, function (self) {
							self.sioreq (dict ({'kind': 'storecloudconfig', 'data': self.configschema.toargs ()}));
						});},
						get retrievecloud () {return __get__ (this, function (self) {
							self.sioreq (dict ({'kind': 'retrievecloudconfig'}));
						});},
						get buildconfigdiv () {return __get__ (this, function (self) {
							self.configdiv = Div ();
							self.configdiv.a (Button ('Serialize', self.serializeconfig));
							self.configdiv.a (Button ('Store cloud', self.storecloud));
							self.configdiv.a (Button ('Retrieve cloud', self.retrievecloud));
							self.configschema = Schema (self.schemaconfig);
							self.configdiv.a (self.configschema);
						});},
						get build () {return __get__ (this, function (self) {
							self.root.innerHTML = '';
							self.buildconfigdiv ();
							self.signupdiv = Div ();
							if (self.authenabled) {
								self.buildsignupdiv ();
							}
							self.profiletab = Tab ('profile', 'Profile', self.signupdiv);
							self.mainelement = TabPane (dict ({'id': 'maintabpane', 'fillwindow': true, 'tabs': list ([Tab ('main', 'Main', Div ('contentplaceholder').html ('Main.')), Tab ('config', 'Config', self.configdiv), Tab ('upload', 'Upload', FileUploader (dict ({'url': '/upload'}))), Tab ('log', 'Log', Div ('contentplaceholder').html ('Log.')), self.profiletab, Tab ('about', 'About', Div ('contentplaceholder').html ('About.'))]), 'selected': 'upload'}));
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
							self.passwordinput.setText ('');
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
								self.photourldiv = Div ().html ("photo url : <span class='{}'>{}</span>".format (cpick (self.photoURL, 'uiinfo', 'uiinfored'), getelse (self.photoURL, '&lt;NA&gt;')));
								self.uidinfodiv = Div ().html ("uid : <span class='uiinfo'>{}</span>".format (self.uid)).pb (8);
								self.userinfodiv.x ().a (list ([self.nameinfodiv, self.emailinfodiv, self.verifiedinfodiv, self.photourldiv, self.uidinfodiv]));
								self.emailinput.setText (self.email);
								self.displaynameinput.setText (self.displayName);
								self.photourlinput.setText (self.photoURL);
								self.photodiv.x ();
								if (self.photoURL) {
									self.photodiv.html ("<img src='{}'></img>".format (self.photoURL));
								}
							}
							else {
								print ('no user');
								self.userinfodiv.x ().a (list ([Div ().html ('Please sign up or sign in !'), Button ('Sign in anonymously', self.signinanonymously ())]));
							}
							self.setprofiletab ();
							self.userinfodiv.fs (cpick (self.user, 10, 14));
						});},
						get getschemaconfigfromobj () {return __get__ (this, function (self, obj) {
							self.schemaconfig = dict ({'kind': 'collection', 'disposition': 'dict'});
							if (__in__ ('schemaconfig', obj)) {
								self.schemaconfig = obj ['schemaconfig'];
							}
							self.authenabled = getrec ('global/auth/enabled', self.schemaconfig) == 'true';
						});},
						get initializefirebase () {return __get__ (this, function (self) {
							print ('initializing firebase from', self.firebaseconfig);
							firebase.initializeApp (self.firebaseconfig);
							firebase.auth ().onAuthStateChanged (self.authstatechanged);
						});},
						get initializefirebaseui () {return __get__ (this, function (self) {
							self.uiConfig = dict ({'signInSuccessUrl': '/', 'signInOptions': list ([firebase.auth.GoogleAuthProvider.PROVIDER_ID, firebase.auth.EmailAuthProvider.PROVIDER_ID]), 'tosUrl': '/tos'});
							print ('initializing firebase ui from', self.uiConfig);
							self.ui = new firebaseui.auth.AuthUI (firebase.auth ());
							self.ui.start (self.firebaseuidiv.e, self.uiConfig);
						});},
						get startfirebase () {return __get__ (this, function (self) {
							self.initializefirebase ();
							self.initializefirebaseui ();
						});},
						get siores () {return __get__ (this, function (self, obj) {
							print ('<-', obj);
							if (__in__ ('kind', obj)) {
								var kind = obj ['kind'];
								if (kind == 'connectedack') {
									self.getschemaconfigfromobj (obj);
									self.build ();
									if (self.authenabled) {
										self.firebaseconfig = obj ['firebaseconfig'];
										setTimeout (self.startfirebase, 50);
									}
								}
								else if (kind == 'configsaved') {
									window.alert ('Config saved, {} characters'.format (obj ['size']));
								}
								else if (kind == 'setcloudconfig') {
									self.getschemaconfigfromobj (obj);
									self.build ();
									setTimeout ((function __lambda__ () {
										return window.alert ('Config set from cloud.');
									}), 10);
								}
								else if (kind == 'alert') {
									window.alert (obj ['data']);
									if (obj ['reload']) {
										location.reload ();
									}
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
						__all__.FileUploader = FileUploader;
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
						__all__.getrec = getrec;
					__pragma__ ('</all>')
				}
			}
		}
	);
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
					var ComboBox = __class__ ('ComboBox', [e], {
						__module__: __name__,
						get changed () {return __get__ (this, function (self) {
							if (self.changecallback) {
								self.changecallback (self.v ());
							}
						});},
						get __init__ () {return __get__ (this, function (self) {
							__super__ (ComboBox, '__init__') (self, 'select');
							self.ae ('change', self.changed);
						});},
						get setoptions () {return __get__ (this, function (self, options, selected, changecallback) {
							self.changecallback = changecallback;
							self.x ();
							var __iterable0__ = options;
							for (var __index0__ = 0; __index0__ < len (__iterable0__); __index0__++) {
								var option = __iterable0__ [__index0__];
								self.a (Option (option [0], option [1], option [0] == selected));
							}
							return self;
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
							self.ac ('textinput');
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
						__all__.ComboBox = ComboBox;
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

	__nest__ (
		__all__,
		'schema', {
			__all__: {
				__inited__: false,
				__init__: function (__all__) {
					var __name__ = 'schema';
					var e = __init__ (__world__.dom).e;
					var Div = __init__ (__world__.dom).Div;
					var ComboBox = __init__ (__world__.dom).ComboBox;
					var TextInput = __init__ (__world__.dom).TextInput;
					var Button = __init__ (__world__.dom).Button;
					var getitem = __init__ (__world__.utils).getitem;
					var clipboard = null;
					var SCHEMA_DEFAULT_ARGS = list ([list (['kind', 'scalar']), list (['disposition', 'string']), list (['constraint', null]), list (['key', null]), list (['value', '']), list (['childsarg', list ([])]), list (['childsopened', false])]);
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
						get copydivclicked () {return __get__ (this, function (self) {
							clipboard = self.toargs ();
						});},
						get openbuttonclicked () {return __get__ (this, function (self) {
							self.childsopened = !(self.childsopened);
							self.build ();
						});},
						get createcombochanged () {return __get__ (this, function (self, v) {
							if (v == 'scalar') {
								var sch = Schema (dict ({'parent': self, 'kind': 'scalar'}));
							}
							else if (v == 'dict') {
								var sch = Schema (dict ({'parent': self, 'kind': 'collection', 'disposition': 'dict'}));
							}
							else if (v == 'list') {
								var sch = Schema (dict ({'parent': self, 'kind': 'collection', 'disposition': 'list'}));
							}
							self.childs.append (sch);
							self.build ();
						});},
						get stringvalueinputchanged () {return __get__ (this, function (self) {
							self.value = self.stringvalueinput.getText ();
						});},
						get keyinputchanged () {return __get__ (this, function (self) {
							self.key = self.keyinput.getText ();
						});},
						get deletechild () {return __get__ (this, function (self, child) {
							var newchilds = list ([]);
							var __iterable0__ = self.childs;
							for (var __index0__ = 0; __index0__ < len (__iterable0__); __index0__++) {
								var currchild = __iterable0__ [__index0__];
								if (!(currchild == child)) {
									newchilds.append (currchild);
								}
								else {
									clipboard = child.toargs ();
								}
							}
							self.childs = newchilds;
							self.build ();
						});},
						get deletedivclicked () {return __get__ (this, function (self) {
							self.parent.deletechild (self);
						});},
						get pastebuttonpushed () {return __get__ (this, function (self) {
							if (clipboard) {
								clipboard ['parent'] = self;
								var sch = Schema (clipboard);
								self.childs.append (sch);
								self.build ();
							}
						});},
						get build () {return __get__ (this, function (self) {
							self.x ().ac ('schema');
							self.itemdiv = Div (list (['item', self.disposition]));
							self.valuediv = Div (list (['value', self.disposition]));
							if (self.kind == 'scalar') {
								if (self.disposition == 'string') {
									self.stringvalueinput = TextInput ().ac ('string').setText (self.value);
									self.stringvalueinput.ae ('keyup', self.stringvalueinputchanged);
									self.valuediv.a (self.stringvalueinput);
								}
							}
							self.helpdiv = Div (list (['box', 'help'])).html ('?');
							self.copydiv = Div (list (['box', 'copy'])).html ('C').ae ('mousedown', self.copydivclicked);
							if (isdict (self.parent)) {
								self.keydiv = Div ('key');
								self.keyinput = TextInput ().ac ('key').setText (self.key);
								self.keyinput.ae ('keyup', self.keyinputchanged);
								self.keydiv.a (self.keyinput);
								self.itemdiv.a (self.keydiv);
							}
							self.itemdiv.a (list ([self.valuediv, self.helpdiv, self.copydiv]));
							if (self.parent) {
								self.deletediv = Div (list (['box', 'delete'])).html ('X').ae ('mousedown', self.deletedivclicked);
								self.itemdiv.a (self.deletediv);
							}
							if (iscollection (self)) {
								self.openbutton = Div ('openbutton').ae ('mousedown', self.openbuttonclicked);
								self.valuediv.a (self.openbutton);
							}
							self.childsdiv = Div ('childs');
							if (self.childsopened) {
								self.creatediv = Div ('create');
								var cc = self.createcombo;
								self.createcombo = ComboBox ().setoptions (list ([list (['create', 'Create new']), list (['scalar', 'Scalar']), list (['dict', 'Dict']), list (['list', 'List'])]), 'create', self.createcombochanged).ac ('createcombo');
								self.creatediv.a (self.createcombo);
								self.pastebutton = Button ('Paste', self.pastebuttonpushed).ac ('pastebutton');
								self.creatediv.a (self.pastebutton);
								self.childsdiv.a (self.creatediv);
								var __iterable0__ = self.childs;
								for (var __index0__ = 0; __index0__ < len (__iterable0__); __index0__++) {
									var child = __iterable0__ [__index0__];
									self.childsdiv.a (child);
								}
							}
							self.container = Div ('container');
							self.container.a (list ([self.itemdiv, self.childsdiv]));
							self.a (self.container);
							return self;
						});},
						get tojsontext () {return __get__ (this, function (self) {
							return JSON.stringify (self.toargs (), null, 2);
						});},
						get toargs () {return __get__ (this, function (self) {
							var args = dict ({});
							var __iterable0__ = SCHEMA_DEFAULT_ARGS;
							for (var __index0__ = 0; __index0__ < len (__iterable0__); __index0__++) {
								var arg = __iterable0__ [__index0__];
								args [arg [0]] = self [arg [0]];
							}
							args ['childsarg'] = list ([]);
							var __iterable0__ = self.childs;
							for (var __index0__ = 0; __index0__ < len (__iterable0__); __index0__++) {
								var child = __iterable0__ [__index0__];
								args ['childsarg'].append (child.toargs ());
							}
							return args;
						});},
						get __init__ () {return __get__ (this, function (self, args) {
							if (typeof args == 'undefined' || (args != null && args .hasOwnProperty ("__kwargtrans__"))) {;
								var args = dict ({});
							};
							__super__ (Schema, '__init__') (self, 'div');
							self.parent = getitem (args, 'parent', null);
							var __iterable0__ = SCHEMA_DEFAULT_ARGS;
							for (var __index0__ = 0; __index0__ < len (__iterable0__); __index0__++) {
								var arg = __iterable0__ [__index0__];
								self [arg [0]] = getitem (args, arg [0], arg [1]);
							}
							self.childs = list ([]);
							var __iterable0__ = self.childsarg;
							for (var __index0__ = 0; __index0__ < len (__iterable0__); __index0__++) {
								var childarg = __iterable0__ [__index0__];
								childarg ['parent'] = self;
								var child = Schema (childarg);
								self.childs.append (child);
							}
							self.build ();
						});}
					});
					__pragma__ ('<use>' +
						'dom' +
						'utils' +
					'</use>')
					__pragma__ ('<all>')
						__all__.Button = Button;
						__all__.ComboBox = ComboBox;
						__all__.Div = Div;
						__all__.SCHEMA_DEFAULT_ARGS = SCHEMA_DEFAULT_ARGS;
						__all__.Schema = Schema;
						__all__.TextInput = TextInput;
						__all__.__name__ = __name__;
						__all__.clipboard = clipboard;
						__all__.e = e;
						__all__.getitem = getitem;
						__all__.iscollection = iscollection;
						__all__.isdict = isdict;
						__all__.islist = islist;
					__pragma__ ('</all>')
				}
			}
		}
	);

	__nest__ (
		__all__,
		'utils', {
			__all__: {
				__inited__: false,
				__init__: function (__all__) {
					var __name__ = 'utils';
					if (window.location.protocol == 'https:') {
						var ws_scheme = 'wss://';
					}
					else {
						var ws_scheme = 'ws://';
					}
					var SUBMIT_URL = ws_scheme + window.location.host;
					var getrec = function (path, currobj) {
						var parts = path.py_split ('/');
						var key = parts [0];
						if (currobj ['disposition'] == 'dict') {
							var __iterable0__ = currobj ['childsarg'];
							for (var __index0__ = 0; __index0__ < len (__iterable0__); __index0__++) {
								var child = __iterable0__ [__index0__];
								if (child ['key'] == key) {
									if (len (parts) == 1) {
										return child ['value'];
									}
									else {
										return getrec ('/'.join (parts.__getslice__ (1, null, 1)), child);
									}
								}
							}
						}
						return null;
					};
					var getitem = function (obj, key, py_default) {
						if (__in__ (key, obj)) {
							return obj [key];
						}
						return py_default;
					};
					var cpick = function (cond, valuetrue, valuefalse) {
						if (cond) {
							return valuetrue;
						}
						return valuefalse;
					};
					var getelse = function (value, elsevalue) {
						if (value) {
							return value;
						}
						return elsevalue;
					};
					var ce = function (tag) {
						return document.createElement (tag);
					};
					var ge = function (id) {
						return document.getElementById (id);
					};
					var getScrollBarWidth = function () {
						var outer = document.createElement ('div');
						outer.style.visibility = 'hidden';
						outer.style.width = '100px';
						outer.style.msOverflowStyle = 'scrollbar';
						document.body.appendChild (outer);
						var widthNoScroll = outer.offsetWidth;
						outer.style.overflow = 'scroll';
						var inner = document.createElement ('div');
						inner.style.width = '100%';
						outer.appendChild (inner);
						var widthWithScroll = inner.offsetWidth;
						outer.parentNode.removeChild (outer);
						return widthNoScroll - widthWithScroll;
					};
					__pragma__ ('<all>')
						__all__.SUBMIT_URL = SUBMIT_URL;
						__all__.__name__ = __name__;
						__all__.ce = ce;
						__all__.cpick = cpick;
						__all__.ge = ge;
						__all__.getScrollBarWidth = getScrollBarWidth;
						__all__.getelse = getelse;
						__all__.getitem = getitem;
						__all__.getrec = getrec;
						__all__.ws_scheme = ws_scheme;
					__pragma__ ('</all>')
				}
			}
		}
	);

	__nest__ (
		__all__,
		'widgets', {
			__all__: {
				__inited__: false,
				__init__: function (__all__) {
					var __name__ = 'widgets';
					var e = __init__ (__world__.dom).e;
					var Div = __init__ (__world__.dom).Div;
					var P = __init__ (__world__.dom).P;
					var Form = __init__ (__world__.dom).Form;
					var FileInput = __init__ (__world__.dom).FileInput;
					var Label = __init__ (__world__.dom).Label;
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
					var FileUploader = __class__ ('FileUploader', [e], {
						__module__: __name__,
						get fileinputchanged () {return __get__ (this, function (self) {
							self.files = self.fileinput.files ();
							self.handlefiles ();
						});},
						get preventdefaults () {return __get__ (this, function (self, ev) {
							ev.preventDefault ();
							ev.stopPropagation ();
						});},
						get highlight () {return __get__ (this, function (self) {
							self.droparea.ac ('highlight');
						});},
						get unhighlight () {return __get__ (this, function (self) {
							self.droparea.rc ('highlight');
						});},
						get log () {return __get__ (this, function (self, html) {
							self.infoitems.append (html);
							self.infoitems.reverse ();
							self.info.html ('<br>'.join (self.infoitems));
							self.infoitems.reverse ();
						});},
						get loginfo () {return __get__ (this, function (self, content) {
							try {
								var json = JSON.parse (content);
								if (json ['success']) {
									var path = '/uploads/{}'.format (json ['savefilename']);
									self.log ("uploaded <span class='fileuploadfilename'>{}</span> <a href='{}' target='_blank' rel='noopener noreferrer'>{}</a> <br> <font size='2'> media link <a href='{}' target='_blank' rel='noopener noreferrer'>{}</a> </font>".format (json ['filename'], path, path, json ['medialink'], json ['medialink']));
								}
								else {
									self.log ('File upload failed.', json ['status']);
								}
							}
							catch (__except0__) {
								self.log ('Error parsing response as JSON.');
							}
						});},
						get uploadfile () {return __get__ (this, function (self, file) {
							if (self.url === null) {
								print ('no upload url');
								return ;
							}
							var formdata = new FormData ();
							formdata.append ('files', file);
							var args = {'method': 'POST', 'body': formdata};
							fetch (self.url, args).then ((function __lambda__ (response) {
								return response.text ().then ((function __lambda__ (content) {
									return self.loginfo (content);
								}), (function __lambda__ (err) {
									return self.loginfo (err);
								}));
							}), (function __lambda__ (err) {
								return self.loginfo (err);
							}));
						});},
						get handlefiles () {return __get__ (this, function (self, files) {
							if (typeof files == 'undefined' || (files != null && files .hasOwnProperty ("__kwargtrans__"))) {;
								var files = self.files;
							};
							for (var i = 0; i < files.length; i++) {
								print ('uploading file {}'.format (i));
								self.uploadfile (files.item (i));
							}
						});},
						get handledrop () {return __get__ (this, function (self, ev) {
							self.dt = ev.dataTransfer;
							self.files = self.dt.files;
							self.handlefiles ();
						});},
						get build () {return __get__ (this, function (self) {
							self.x ();
							self.droparea = Div ('fileuploaddroparea');
							self.form = Form ().ac ('fileuploadform');
							self.desc = P ().ac ('fileuploadp').html ('Upload {}s with the file dialog or by dragging and dropping them onto the dashed region'.format (self.acceptdisplay));
							self.fileinput = FileInput ().ac ('fileuploadfileelem').setmultiple (self.multiple).setaccept (self.accept);
							self.fileinput.sa ('id', 'fileinputelement');
							self.fileinput.ae ('change', self.fileinputchanged);
							self.button = Label ().ac ('fileuploadbutton').sa ('for', 'fileinputelement').html ('Select some {}s'.format (self.acceptdisplay));
							self.form.a (list ([self.desc, self.fileinput, self.button]));
							self.droparea.a (self.form);
							var __iterable0__ = list (['dragenter', 'dragover', 'dragleave', 'drop']);
							for (var __index0__ = 0; __index0__ < len (__iterable0__); __index0__++) {
								var eventname = __iterable0__ [__index0__];
								self.droparea.ae (eventname, self.preventdefaults);
							}
							var __iterable0__ = list (['dragenter', 'dragover']);
							for (var __index0__ = 0; __index0__ < len (__iterable0__); __index0__++) {
								var eventname = __iterable0__ [__index0__];
								self.droparea.ae (eventname, self.highlight);
							}
							var __iterable0__ = list (['dragleave', 'drop']);
							for (var __index0__ = 0; __index0__ < len (__iterable0__); __index0__++) {
								var eventname = __iterable0__ [__index0__];
								self.droparea.ae (eventname, self.unhighlight);
							}
							self.droparea.ae ('drop', self.handledrop);
							self.info = Div ('fileuploadinfo');
							self.infoitems = list ([]);
							self.a (list ([self.droparea, self.info]));
						});},
						get __init__ () {return __get__ (this, function (self, args) {
							if (typeof args == 'undefined' || (args != null && args .hasOwnProperty ("__kwargtrans__"))) {;
								var args = dict ({});
							};
							__super__ (FileUploader, '__init__') (self, 'div');
							self.url = args.py_get ('url', null);
							self.multiple = args.py_get ('multiple', true);
							self.accept = args.py_get ('accept', 'image/*');
							self.acceptdisplay = args.py_get ('acceptdisplay', 'image');
							self.build ();
						});}
					});
					__pragma__ ('<use>' +
						'dom' +
						'utils' +
					'</use>')
					__pragma__ ('<all>')
						__all__.Div = Div;
						__all__.FileInput = FileInput;
						__all__.FileUploader = FileUploader;
						__all__.Form = Form;
						__all__.Label = Label;
						__all__.P = P;
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

	(function () {
		var __name__ = '__main__';
		var Client = __init__ (__world__.client).Client;
		Client ().startup ();
		__pragma__ ('<use>' +
			'client' +
		'</use>')
		__pragma__ ('<all>')
			__all__.Client = Client;
			__all__.__name__ = __name__;
		__pragma__ ('</all>')
	}) ();

    return __all__;
}
window ['app'] = app ();
