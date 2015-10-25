'use strict';
var Rx = require('rx');
var model = require('./todo.model.js');
var view = require('./todo.view.js');
var router = require('../router/router.js');
var actions = require('./todo.actions.js');

class todoMain{
	constructor(){
		router.model.registerRoute("/test");
		this.actions = actions;
		this.model = model;
		this.view = view;
		model.wire();
		view.wire();
	}
}

module.exports = new todoMain();

