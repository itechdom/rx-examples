//this is the main todo file
var $ = require('jquery');
var Rx = require('rx');
var actions = require('./actions.js');

module.exports = function(dataStream){

	dataStream.subscribe(function(data){
		console.log(data,"data from view");
		var elem = $("<h1>"+data+"</h1>");
		$('body').append(elem);
	})
}
