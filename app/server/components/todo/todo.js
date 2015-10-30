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

		actions.post$.subscribe((req)=>{
			this.model.insertTodo().then((todo)=>{
				console.log(todo);
				this.view.render(todo);
			});
		});

		actions.get$.subscribe((req)=>{
			this.model.getTodo().then((todos)=>{
				this.view.render(todos);
			});
		})

		debug.model.registerComponent(this);
	}
}

module.exports = new todoMain();

