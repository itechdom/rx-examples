var Rx = require('rx');
var actions = require("./todo.actions.js");
var EventEmitter = require('wolfy87-eventemitter');
var dataEmitter = new EventEmitter();

class todoModel{

	constructor() {
		this.initialTodos = [
		{
			"name":"hello"
		},
		{
			"name":"hi"
		}

		];
	}
	//handles different actions
	wire(){

	}
}
module.exports = new todoModel();
