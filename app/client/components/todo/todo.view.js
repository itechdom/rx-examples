//this is the main todo file
var $ = require('jquery');
var Rx = require('rx');
var actions = require('./todo.actions.js');
var model = require('./todo.model.js')
var h = require('virtual-dom/h');
var diff = require('virtual-dom/diff');
var patch = require('virtual-dom/patch');
var createElement = require('virtual-dom/create-element');


class todoView{

	constructor() {

		this.actions = {
			templateLoaded$: Rx.Observable.fromPromise($.get('./app/client/components/todo/todo.html'))
		};

		//export actions to the top actions
		actions['todoView.templateLoaded$'] = Rx.Observable.fromPromise($.get('./app/client/components/todo/todo.html'));

		this.template = "todo";

		this.currentTree;

		this.currentNode;

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
		this.actions.templateLoaded$.subscribe((data) =>{
			//I can test the type of the data here before diswireing it
			$('app').html(data);
			var count = 0;
			var vtree = this.render(count);
			var rootNode = createElement(vtree);
			this.currentTree = vtree;
			this.currentNode = rootNode;
			//first load the template html
			$('todo').html(this.currentNode);
			//create the scene graph here
		});
		actions.insertTodo$.subscribe(function(){

		});
		model.actions.dataChanged$.subscribe((data) => {
			//add
			var count = 1;
			var vtree = this.render(data);
			var patches = diff(this.currentTree, vtree);
			this.rootNode = patch(this.currentNode,patches);
			this.currentTree = vtree;
		});
	}
	unWire(){

	}
}

module.exports = new todoView();
