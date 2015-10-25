'use strict';
var Rx = require('rx');

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
