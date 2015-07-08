var Rx = require('rx');
var actions = require("./actions.js")
var EventEmitter = require('wolfy87-eventemitter');
var dataEmitter = new EventEmitter();
var todoModel = require('../model.js');

class todoItemModel{

	constructor() {

		this.initialTodos = [
		{
			"name":"hello"
		}
		];

		this.actions = {
			dataChanged$ : Rx.Observable.fromEvent(dataEmitter,'data')
		}

	}
	//handles different actions
	wire(){

		function notifyChange(initialTodos){
			setTimeout(function(){
				dataEmitter.emitEvent("data",[initialTodos]);
			},1000)
		}

		actions.changeRoute$.subscribe(() => {
			console.log("route reloaded");
			notifyChange(this.initialTodos);
		});

		actions.insertTodo$.subscribe(function(todo){
			model.todos.push(todo);
			notifyChange();
		});

		todoModel.actions.dataChanged$.subscribe((todos)=>{
			console.log(todos);
		}
		)


	}
}

module.exports = new todoItemModel();

