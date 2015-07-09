//this is the main todo file
var $ = require('jquery');
var Rx = require('rx');
var actions = require('./actions.js');
var model = require('./model.js')
var h = require('virtual-dom/h');
var diff = require('virtual-dom/diff');
var patch = require('virtual-dom/patch');
var createElement = require('virtual-dom/create-element');


class spinnerView{

	constructor() {

		this.actions = {
			templateLoaded$: Rx.Observable.fromPromise($.get('./app/client/components/spinner/spinner.html'))
		};

		//export actions to the top actions
		actions['spinnerView.templateLoaded$'] = this.actions.templateLoaded$;

		this.template = "spinner";

		this.currentTree;

		this.currentNode;

		this.render = function(count){
			return h('div',['hello, this is the todo main'],[String(count)])
		}
	}
	//registers todoModel events to actions
	wire(){

		this.actions.templateLoaded$.subscribe((data) =>{
			//I can test the type of the data here before diswireing it
			$('app').html(data);
			var count = 0;
			var vtree = this.render(count);
			var rootNode = createElement(vtree);

			this.currentTree = vtree;
			this.currentNode = rootNode;

			//first load the template html
			$(this.template).append(this.currentNode);
			//create the scene graph here
		});
		actions.insertTodo$.subscribe(function(){

		});
		model.actions.dataChanged$.subscribe((data) => {
			//call vdom diff and rerender the dom?
			var count = 1;
			var vtree = this.render(count);
            var patches = diff(this.currentTree, vtree);
            this.rootNode = patch(this.currentNode,patches);
            this.currentTree = vtree;
		});
	}
	unWire(){


	}
}

module.exports = new todoView();
