//this is the main todo file
var $ = require('jquery');
var Rx = require('rx');
var model = require('./model.js');
var actions = require('./actions');
var view = require('./view.js');


class todoItemMain{

	constructor(){
		this.actions = actions;
		//wire the different components to main
		model.wire();
		view.wire();
	}
}

module.exports = new todoItemMain();

