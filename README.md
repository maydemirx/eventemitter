# eventemitter

## Create event based javascript objects

This software can add event capabilities to another object. And works on any modern browser like Chrome, Webkit, Firefox etc. 

## Dependencies

There are no dependencies.

## Examples

```
<!--  include the lib -->
<script type="text/javascript" src="eventemitter.js"></script>

// your own js or html file
function Class() {};

// the fallowing line inherits your object from Inhedron.EventEmitter 
// and adds event mechanism to your object
Class.prototype = Inhedron.EventEmitter.prototype;

Class.prototype.someMethod = function() {
  debugger;
  console.log('someMethod called');
  // emit the event
  this.emit('someCalled', ['test', 1, true]);
}

// end of class 

function onSomeMethodCalled(strArg, numberArg, booleanArg) {
  console.log('onSomeMethodCalled', strArg, numberArg, booleanArg); // test, 1, true
}

var instance = new Class();
// register to any event
instance.on('someCalled', onSomeMethodCalled);

```
