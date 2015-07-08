//this is the main todo file
var $ = require('jquery');
var Rx = require('rx');
var model = require('./model.js');
var actions = require('./actions');
var view = require('./view.js');


class todoMain{

	constructor(){
		this.actions = actions;
		model.wire();
		view.wire();
	}
}


module.exports = new todoMain();

