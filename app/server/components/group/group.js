'use strict';
var Rx = require('rx');
var model = require('./group.model.js');
var view = require('./group.view.js');
var router = require('../router/router.js');
var actions = require('./group.actions.js');
var debug = require('../debugger/debugger.js');
var dispatcher = require('../dispatcher/dispatcher.js');


class groupMain{
	constructor(){
		router.model.registerRoute("/test");
		this.actions = actions;
		this.model = model;
		this.view = view;

		actions.request$.subscribe((req)=>{
			dispatcher.customEvent.emit("group.input$",req);
		});


		debug.model.registerComponent(this);
	}
}

module.exports = new groupMain();

