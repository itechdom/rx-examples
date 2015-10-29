//this is the main todo file
var $ = require('jquery');
var Rx = require('rx');
var model = require('./todo.model.js');
var view = require('./todo.view.js');
var actions = require("./todo.actions.js");
require("./todo.scss");
var spinner = require('../spinner/spinner.js');


class todoMain{

	constructor(){
		this.actions = actions;
		this.view = view;
		this.model = model;
		model.wire();
		view.wire();
		spinner.model.registerComponent(this);
	}
}
module.exports = new todoMain();
