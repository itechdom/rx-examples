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
		query.exec(function(err,todos){
			console.log(todos);
		})
	}
	insertTodo(){
		var todo = new this.model({title:"hi",completed:false});
		todo.save((err,todos)=>{
			console.log(todos);
		})
	}
	deleteTodo(todo){

	}
}
module.exports = new todoModel();
