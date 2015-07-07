//this is the main todo file
var $ = require('jquery');
var Rx = require('rx');
var actions = require('./actions.js');

module.exports = function(dataStream){

	var templateStream = Rx.Observable.fromPromise($.get('./app/client/components/todo/todo.html'))

	var mergedStream = dataStream.startWith(templateStream);

	//I can combine latest here and send back the template with its data
	
	mergedStream.subscribe(function(data){
		//I can test the type of the data here before displaying it
		console.log(data);
		var elem = $("<h1>"+data+"</h1>");
		$('body').html(elem);
	});

	actions.insertTodo$.subscribe(function(){
		//do something here to deal with when the todo is inserting
	})
};
