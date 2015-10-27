//this is the main todo file
var $ = require('jquery');
var Rx = require('rx');
var model = require('./todo.model.js');
var view = require('./todo.view.js');
var actions = require("./todo.actions.js");

class todoMain{

	constructor(){
		model.wire();
		view.wire();
	}
}
module.exports = new todoMain();
