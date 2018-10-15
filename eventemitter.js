if (typeof Maydemirx === "undefined") {
    Maydemirx = {};
}

 /**
 * Constructor
 */
Maydemirx.EventEmitter = function() {}


/**
 * Contains the listeners
 */
Maydemirx.EventEmitter.prototype.listeners = [];


 /**
 * Listen an event from object
 *
 * @param  String the event name like wrote, deleted, added etc
 * @param  callback is call when event emiting
 * @return void
 */
Maydemirx.EventEmitter.prototype.on = function(event, callback) {
	this.listeners.push({
		'event': event,
		'callback': callback
	});
}

 /**
 * Trigger an event 
 *
 * @param  String the event name like wrote, deleted, added etc
 * @param  Array|Object|String|Number args the event arguments
 * @return Number returns the event emit count
 */
Maydemirx.EventEmitter.prototype.emit = function(event, args, thisArg) {
	var invocationCount = 0;
	for (var i = 0; i < this.listeners.length; i++) {
		if (this.listeners[i].event == event) {
			if (!thisArg) {
				thisArg = this;
			}
			if (args && Array.isArray(args)) {
				this.listeners[i].callback.apply(thisArg, args);
			} else {
				this.listeners[i].callback.call(thisArg, args);
			}
			
			invocationCount++;
		}
	}
	return invocationCount;
}
