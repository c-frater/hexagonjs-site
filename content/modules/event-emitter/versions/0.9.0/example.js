var eventEmitter = new hx.EventEmitter;

eventEmitter.on('my-event', function(d){ console.log(d) });

// this will result in the object {x: 0, y: 123} being logged to the console
eventEmitter.emit('my-event', {
  x: 0,
  y: 123
});
