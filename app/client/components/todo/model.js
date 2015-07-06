var Rx = require('rx');
var actions = require("./actions.js")
var EventEmitter = require('wolfy87-eventemitter');
var dataEmitter = new EventEmitter();

var initialTodos = [
{
	"name":"hello"
}
]

module.exports = function(){

	var change = Rx.Observable.fromEvent(dataEmitter,'data');

	var nchange = actions.changeRoute$.startWith(initialTodos);

	function notifyChange(){
		setTimeout(function(){
		dataEmitter.emitEvent("data",[initalTodos]);
		},1000)
	}

	actions.changeRoute$.subscribe(function(){
		console.log("route reloaded");
	})

	actions.insertTodo$.subscribe(function(todo){
		model.todos.push(todo);
		notifyChange();
	})

	return nchange;
}

