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
						__all__.ws_scheme = ws_scheme;
					__pragma__ ('</all>')
				}
			}
		}
	);
