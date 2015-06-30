//this file is used if I wanted to route to different controllers from a central point

Rx = require('rx');
RouteParser = require('route-parser');
var routeMatcher = require("route-matcher").routeMatcher;

//hello = require('./helloController');

var routes = [{
	'/': 'helloController'
}];

//here can we have an observable that connects a url to a controller?
module.exports = function(requestStream,route){

	return requestStream.filter(function(req){
		matcher = routeMatcher(route);
		return matcher.parse(req.url) != null;
	});

	//urlStream = requestStream.filter(function(req){
	//	return req.url == '/';
	//});

};