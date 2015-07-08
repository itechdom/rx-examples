//this is the main todo file
var $ = require('jquery');
var Rx = require('rx');
var actions = require('./actions.js');
var model = require('./model.js')
//default actions

class todoView{

	constructor() {
		this.actions = {
			templateLoaded$: Rx.Observable.fromPromise($.get('./app/client/components/todo/todo.html'))
		}

	}
	//registers todoModel events to actions
	wire(){

		//I can combine latest here and send back the template with its data
		this.actions.templateLoaded$.subscribe(function(data){
			//I can test the type of the data here before diswireing it
			console.log(data);
			var elem = $("<h1>"+data+"</h1>");
			$('body').html(elem);
		});
		actions.insertTodo$.subscribe(function(){
			//do something here to deal with when the todo is inserting
		})

		model.actions.dataChanged$.subscribe(function(data){
			console.log(data,"data have changed from view");
			$('body').html(data.toString());
		})

	}
	unWire(){


	}
}

module.exports = new todoView();
