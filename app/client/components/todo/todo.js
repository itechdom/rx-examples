//this is the main todo file
var $ = require('jquery');
var Rx = require('rx');
var actions = require('./actions.js');

module.exports = function(dataStream){

	var templateStream = Rx.Observable.fromPromise($.get('./app/client/components/todo/todo.html'))

	var mergedStream = dataStream.startWith(templateStream);
	
	mergedStream.subscribe(function(data){
		console.log(data);
		var elem = $("<h1>"+data+"</h1>");
		$('body').append(elem);
	})

	actions.insertTodo$.subscribe(function(){
		//do something here to deal with when the todo is inserting
	})
}
