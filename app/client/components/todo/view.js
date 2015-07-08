//this is the main todo file
var $ = require('jquery');
var Rx = require('rx');
var actions = require('./actions.js');
var model = require('./model.js')
var h = require('virtual-dom/h');
var diff = require('virtual-dom/diff');
var patch = require('virtual-dom/patch');
var createElement = require('virtual-dom/create-element');


//default actions

class todoView{

	constructor() {

		this.actions = {
			templateLoaded$: Rx.Observable.fromPromise($.get('./app/client/components/todo/todo.html'))
		}

		this.template = "<todo></todo>";

		this.render = function(count){
			return h('div', {
				style: {
					textAlign: 'center',
			    lineHeight: (100 + count) + 'px',
			    border: '1px solid red',
			    width: (100 + count) + 'px',
			    height: (100 + count) + 'px'
				}
			}, [String(count)]);
		}

	}
	//registers todoModel events to actions
	wire(){

		//I can combine latest here and send back the template with its data
		this.actions.templateLoaded$.subscribe((data) =>{
			//I can test the type of the data here before diswireing it
			var count = 0;
			var vtree = this.render(count);
			var nodeTree = createElement(vtree);
			$('body').append(nodeTree);
			//create the scene graph here
		});

		actions.insertTodo$.subscribe(function(){
			//do something here to deal with when the todo is inserting
			//call the diff patch

		})

		model.actions.dataChanged$.subscribe((data) => {
			//call vdom diff and rerender the dom?
			var count = 1;
			var vtree = this.render(count);
			var nodeTree = createElement(vtree);
			$('body').html(nodeTree);
		})

	}
	unWire(){


	}
}

module.exports = new todoView();
