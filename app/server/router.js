//this file is used if I wanted to route to different controllers from a central point
Rx = require('rx');
RouteParser = require('route-parser');
var routeMatcher = require("route-matcher").routeMatcher;
var request = require('./request.js');
var debug = require('./debugger.js');

//here can we have an observable that connects a url to a controller?
module.exports = function(requestStream,route){

	// register this module, and say what it's connected to and what it's going to out put?
	routeStream = Rx.Observable.return(route);


	var outputStream = requestStream.filter(function(req){
			matcher = routeMatcher(route);
			return matcher.parse(req.url) != null;
	});

	//this is the component that will register everything 
	outputStream["from"] = "router";

 	debug('router',requestStream,outputStream);

	return outputStream;
};
