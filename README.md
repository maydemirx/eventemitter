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
// and add event mechanism to your object
Class.prototype = Inhedron.EventEmitter.prototype;

Class.prototype.someMethod = function() {
  debugger;
  console.log('someMethod called');
  // emit the event
  this.emit('someCalled', { 'arg1': 'test' });
}

// end of class 

function onSomeMethodCalled(args) {
  console.log('onSomeMethodCalled', args);
}

var instance = new Class();
// register to any event
var successToRegister = instance.on('someCalled', onSomeMethodCalled);
// if the class has not contain someCalled event successToRegister is set to false

```
