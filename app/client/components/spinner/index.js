//this is the main todo file
var $ = require('jquery');
var Rx = require('rx');
var actions = require('./actions');
var view = require('./view.js');
var todoItemComponent = require('../todo/index.js');


class spinnerMain{

	constructor(){
		this.actions = actions;
		view.wire();
	}
}

module.exports = new spinnerMain();

