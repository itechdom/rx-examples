//this file is used if I wanted to route to different controllers from a central point
Rx = require('rx');
RouteParser = require('route-parser');
var routeMatcher = require("route-matcher").routeMatcher;
RouterModel = require('./routerModel.js');
var request = require('./request.js');

//here can we have an observable that connects a url to a controller?
module.exports = function(requestStream,route){
	//store the route in a model
	routeStream = Rx.Observable.return(route);
	RouterModel(routeStream);
	return requestStream.filter(function(req){
			matcher = routeMatcher(route);
			return matcher.parse(req.url) != null;
	});
	//urlStream = requestStream.filter(function(req){
	//	return req.url == '/';
	//});
};
