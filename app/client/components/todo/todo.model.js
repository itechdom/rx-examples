var Rx = require('rx');
var actions = require("./todo.actions.js");
var dispatcher = require('../dispatcher/dispatcher.js');
var $ = require('jquery');

class todoModel{

	constructor() {

	}
	getTodo(){
		$.get("http://localhost:4000/todo",function(data) {
			var data = JSON.parse(data);
			dispatcher.customEvent.emit('dataLoaded$',data);
		});
	}
	//handles different actions
	wire(){

	}
}
module.exports = new todoModel();