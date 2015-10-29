//this is the main todo file
var $ = require('jquery');
var Rx = require('rx');
var actions = require('../todo.actions.js');
var h = require('virtual-dom/h');
var diff = require('virtual-dom/diff');
var patch = require('virtual-dom/patch');
var createElement = require('virtual-dom/create-element');
var dispatcher = require('../../dispatcher/dispatcher.js');


class todoView{

	constructor() {

		this.template = "todo";

		//I can combine latest here and send back the template with its data
		actions.request$.subscribe(()=>{
			$.get('./app/client/components/todo/todo-footer/todoFooter.html',function(data){
				$('todo-footer').html(data);
				dispatcher.customEvent.emit('viewLoaded$',data);
			})
		});

	}
}

module.exports = new todoView();
