var Rx = require('rx');
var actions = require("./todo.actions.js");
var dispatcher = require('../dispatcher/dispatcher.js');
var $ = require('jquery');

class todoModel{

	constructor() {
		this.components = [];
	}
	registerComponent(component){
		this.components.push(component);
	}
}
module.exports = new todoModel();
