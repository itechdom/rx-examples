//this is the main todo file
var $ = require('jquery');
var Rx = require('rx');
var actions = require('./actions.js');
var model = require('./model.js')
var h = require('virtual-dom/h');
var diff = require('virtual-dom/diff');
var patch = require('virtual-dom/patch');
var createElement = require('virtual-dom/create-element');


class todoView{

	constructor() {

		this.actions = {
			templateLoaded$: Rx.Observable.fromPromise($.get('./app/client/components/todo/todo.html'))
		};

		this.template = "todo-item";

		this.render = function(count){
			var obj = {
				a: 'Apple',
				b: 'Banana',
				c: 'Cherry',
				d: 'Durian',
				e: 'Elder Berry'
			}

			return h('table',
				h('tr', h('th', 'letter'), h('th', 'fruit')),
				Object.keys(obj).map(function (k) {
					return h('tr',
						h('th', k),
						h('td', obj[k])
					)
				})
			)
		}
	}
	//registers todoModel events to actions
	wire(){

		//I can combine latest here and send back the template with its data
		this.actions.templateLoaded$.subscribe((data) => {
			//I can test the type of the data here before diswireing it
			var count = 0;
			var vtree = this.render(count);
			var nodeTree = createElement(vtree);
			$('todo-item').append(nodeTree);
			//create the scene graph here
		});

		actions.insertTodo$.subscribe(function(){
			//do something here to deal with when the todo is inserting
			//call the diff patch

		});

		model.actions.dataChanged$.subscribe((data) => {
			//call vdom diff and rerender the dom?
			var count = 1;
			var vtree = this.render(count);
			var nodeTree = createElement(vtree);
			$('todo-item').html(nodeTree);
		});

	}
	unWire(){


	}
}

module.exports = new todoView();
