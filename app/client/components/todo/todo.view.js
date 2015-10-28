//this is the main todo file
var $ = require('jquery');
var Rx = require('rx');
var actions = require('./todo.actions.js');
var model = require('./todo.model.js');
var h = require('virtual-dom/h');
var diff = require('virtual-dom/diff');
var patch = require('virtual-dom/patch');
var createElement = require('virtual-dom/create-element');
var dispatcher = require('../dispatcher/dispatcher.js');


class todoView{

	constructor() {

		this.template = "todo";

		this.render = function(todos){

			if(!todos){
				todos = [];
			}

			return 	h("ul.todo-list",todos.map(function(todo){
				return	h("li", [
					h("div.view", [
						h("input.toggle", { "type": "checkbox"}),
						h("label", [ todo.name ]),
						h("button.destroy")
					]),
					h("form", [
						h("input.edit")
					])
				])
			}))
		}

	}

	wire(){
		//I can combine latest here and send back the template with its data
		actions.request$.subscribe(()=>{
			$('body').append("hellooooooooooooo");
			$.get('./app/client/components/todo/todo.html',function(data){
				$('todo').html(data);
				dispatcher.customEvent.emit('viewLoaded$',data);
			})
			model.getTodo();
		});

		actions.dataLoaded$.delay(500).subscribe((data)=>{
			var data = data.map((item)=> {
				return "<li class='todo__items'>" + item.name + "</li>"
			});
			data.forEach((item)=> {
				$('.todo__list').append(item);
			})
		});
	}
	unWire(){

	}
}

module.exports = new todoView();
