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
}
module.exports = new todoModel();
