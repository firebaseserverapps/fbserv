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
