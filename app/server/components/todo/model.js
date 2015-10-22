'use strict';
var Rx = require('rx');
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
