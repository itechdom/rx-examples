'use strict';
var Rx = require('rx');

class groupModel{

	constructor() {
		this.initialgroups = [
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
module.exports = new groupModel();
