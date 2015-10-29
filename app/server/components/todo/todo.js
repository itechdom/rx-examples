'use strict';
var Rx = require('rx');
var model = require('./todo.model.js');
var view = require('./todo.view.js');
var router = require('../router/router.js');
var actions = require('./todo.actions.js');
var debug = require('../debugger/debugger.js');
var dispatcher = require('../dispatcher/dispatcher.js');


class todoMain{
	constructor(){
		router.model.registerRoute("/test");
		this.actions = actions;
		this.model = model;
		this.view = view;

		actions.request$.subscribe((req)=>{
			dispatcher.customEvent.emit("todo.input$",req);
		});

		debug.model.registerComponent(this);
	}
}

module.exports = new todoMain();

