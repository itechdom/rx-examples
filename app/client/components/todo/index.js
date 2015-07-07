//this is the main todo file
var $ = require('jquery');
var Rx = require('rx');
var model = require('./model.js');
var actions = require('./actions');
var view = require('./todo.js');

export default class todoMain(){

	constructor(){
		this.actions = actions;
		model();
		view();
	}

}
