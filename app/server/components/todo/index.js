'use strict';
var Rx = require('rx');
var model = require('./todo.model.js');
var view = require('./todo.view.js');
var router = require('../router/router.js');

class todoMain{
	constructor(){
		router.model.registerRoute("/test");
		model.wire();
		view.wire();
	}
}

module.exports = new todoMain();

