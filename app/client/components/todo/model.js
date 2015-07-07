var Rx = require('rx');
var actions = require("./actions.js")
var EventEmitter = require('wolfy87-eventemitter');
var dataEmitter = new EventEmitter();

var initialTodos = [
{
	"name":"hello"
}
];

export default class todoModel{

	constructor() {

		//expose any actions to actions and to any other component that wants to connect to it
		this.actions:{
			dataChanged$:Rx.Observable.fromEvent(dataEmitter,'data');
		}


		function notifyChange(){
			setTimeout(function(){
				dataEmitter.emitEvent("data",[initalTodos]);
			},1000)
		}

		actions.changeRoute$.subscribe(function(){
			console.log("route reloaded");
		});

		actions.insertTodo$.subscribe(function(todo){
			model.todos.push(todo);
			notifyChange();
		});

	}
	//handles different actions
	play(){

	}
}
