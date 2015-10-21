//this file is used if I wanted to route to different controllers from a central point
Rx = require('rx');
var routeMatcher = require("route-matcher").routeMatcher;

//here can we have an observable that connects a url to a controller?
module.exports = function(requestStream,route){

	var outputStream = requestStream.filter(function(req){
			matcher = routeMatcher(route);
			return matcher.parse(req.url) != null;
	});
	//this is the component that will register everything 
	outputStream["from"] = "router";

	return outputStream;
	//urlStream = requestStream.filter(function(req){
	//	return req.url == '/';
	//});
};
