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
  console.log('someMethod called');
  // emit the event
  this.emit('someCalled', ['test', 1, true]);
}

Class.prototype.anotherMethod = function() {
  console.log('anotherMethod called');
  // fallowing code to be emit the event and send arguments in object to callback
  this.emit('anotherMethodCalled', { 
    stringArg: 'test', 
    numberArg: 1,
    boolArg: true
  });
}

Class.prototype.singleArgMethod = function() {
  console.log('singleArgMethod called');
  // fallowing code to be emit the event and send a single argument to callback
  this.emit('singleArgMethodCalled', true);
}



// end of class 

function onSomeMethodCalled(strArg, numberArg, booleanArg) {
  console.log('onSomeMethodCalled', strArg, numberArg, booleanArg); // test, 1, true
}

function onAnotherMethodCalled(args) {
  console.log('onAnotherMethodCalled', JSON.stringify(args)); // { stringArg: 'test', numberArg: 1, boolArg: true }
}

function onSingleArgMethod(boolArg) {
  console.log('onSingleArgMethod', boolArg); // true
}

var instance = new Class();
// register to any event
instance.on('someCalled', onSomeMethodCalled);
instance.on('anotherMethodCalled', onAnotherMethodCalled);
instance.on('singleArgMethod', onSingleArgMethod);


```
