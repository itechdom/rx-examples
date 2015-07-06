//this is the main todo file
var $ = require('jquery');
var Rx = require('rx');
var model = require('./model.js');
var actions = require('./actions');
//I can import the view here too
var view = require('./todo.js');
var EventEmitter = require('wolfy87-eventemitter');
var dataEmitter = new EventEmitter();

module.exports = function(){
	
var change = model();

change.subscribe(function(data){
	console.log(data);
})
	view(change);


//	inputStream.subscribe(function(element){
//		$("body").load("/app/client/components/todo/todo.html");
//	});
}

