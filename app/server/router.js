//this file is used if I wanted to route to different controllers from a central point

Rx = require('rx');
//hello = require('./helloController');

var routes = [{
	'/': 'helloController'
}];

//here can we have an observable that connects a url to a controller?
module.exports = function(requestStream){

	routes.forEach(function(route){
		controller = require('./helloController');
		controller(requestStream);
	});

	requestStream.subscribe(function(r){
		console.log(r.url);
	});

	//urlStream = requestStream.filter(function(req){
	//	return req.url == '/';
	//});

};