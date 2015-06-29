//handle dispatching events to different component
//it will take an event stream and pass it through to another
var Rx = require('rx');

module.exports = function(source,listener,cycle){
	//it will take an emitter and pass it to someone who can handle that event
	var observer = require("./"+listener);
	var subscription = source.subscribe(observer);
};
