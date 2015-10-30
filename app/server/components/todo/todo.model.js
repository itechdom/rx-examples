'use strict';
var Rx = require('rx');
var orm = require('../orm/orm.js');
var mongoose = require('mongoose');


class todoModel{

	constructor() {
		this.schema = mongoose.Schema({
			title: String,
			completed: Boolean
		});
		this.repo = orm.repo();
		this.model = mongoose.model('todos', this.schema);
	}
	getTodo(){
		var query = this.model.find({});
		var callback = query.exec();
		return callback;
	}
	insertTodo(){
		var todo = new this.model({title:"hi",completed:false});
		var callback = todo.save();
		return callback;
	}
	updateTodo(todo){

	}
	deleteTodo(todo){
		//var todo = this.model.findByIdAndRemove()
	}
}
module.exports = new todoModel();
