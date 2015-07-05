//this is the model that stores all the routes

Rx = require('rx');


function Model(routes){
	this.routes = routes
}
Model.prototype.addRoute = function(route){
	this.routes.push(route);
}

//here can we have an observable that connects a url to a controller?
module.exports = function(routeStream){

	//model = new Model(data);
	return routeStream.subscribe(function(route){
		if(!global.myRoutes){
			global.myRoutes = []
		}
		global.myRoutes.push(route);
		console.log(global.myRoutes);
	});
	//urlStream = requestStream.filter(function(req){
	//	return req.url == '/';
	//});

};
