var Rx = require('rx');
var actions = require("./todo.actions.js");
var dispatcher = require('../dispatcher/dispatcher.js');
var $ = require('jquery');

class todoModel{

	constructor() {
		this.schema = {
			title:"title",
			completed:"true|false"
		}
	}
	getTodo(){
		$.get("http://localhost:4000/todo",function(data) {
			dispatcher.customEvent.emit('dataLoaded$',data);
		});
	}
	insertTodo(todo){

	}
	updateTodo(id){

	}
	deleteTodo(id){

	}
}
module.exports = new todoModel();
