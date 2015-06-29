//handle dispatching events to different component
//it will take an event stream and pass it through to another
var Rx = require('rx');

module.exports = function(emitter,events,listener){
	//it will take an emitter and pass it to someone who can handle that event
	var observer = require("./"+listener)

	var source = Rx.Observable.fromEvent(emitter, events);

	var subscription = source.subscribe(observer);
}
