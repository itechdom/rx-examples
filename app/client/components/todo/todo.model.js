var Rx = require('rx');
var actions = require("./todo.actions.js");
var dispatcher = require('../dispatcher/dispatcher.js');
var $ = require('jquery');

class todoModel{

	constructor() {

	}
	//handles different actions
	wire(){

		$.get("http://localhost:4000/todo",function(data) {
			var data = JSON.parse(data);
			dispatcher.customEvent.emit('dataLoaded$',data);
		});

	}
}
module.exports = new todoModel();