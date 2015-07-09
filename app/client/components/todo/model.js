var Rx = require('rx');
var actions = require("../actions/index.js")
var EventEmitter = require('wolfy87-eventemitter');
var dataEmitter = new EventEmitter();


class todoModel{

	constructor() {

		this.initialTodos = [
		{
			"name":"hello"
		},
		{
			"name":"hi"
		}

		];

		this.actions = {
			dataChanged$ : Rx.Observable.fromEvent(dataEmitter,'data')
		};

		actions['todoModel.dataChanged$'] = Rx.Observable.fromEvent(dataEmitter,'data');

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

	}
}
module.exports = new todoModel();

