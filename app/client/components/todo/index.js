//this is the main todo file
var $ = require('jquery');
var Rx = require('rx');
var model = require('./model.js');
var actions = require('./actions');
var view = require('./todo.js');
var EventEmitter = require('wolfy87-eventemitter');
var dataEmitter = new EventEmitter();

module.exports = function(){

	//initialized model and view here to register themselves as actions

	//run the model hook registeration function
	model();

	//run the view hook registeration function
	view();
};

