var h = require('virtual-dom/h');
var diff = require("vtree/diff");
var createElement = require("vdom/create-element");
var patch = require("vdom/patch");
var model = require("./renderer.model.js");

class rendererMain{

	constructor(){
		this.model = model;
	}
	//I can make render a component function
	render(){
		// Render the left node to a DOM node
			 //var rootNode = createElement(leftNode)
			 //document.body.appendChild(rootNode)

			// Update the DOM with the results of a diff
			 //var patches = diff(leftNode, rightNode)
			 //patch(rootNode, patches)
	}
}


//this.render = function(todos){
//
//    if(!todos){
//        todos = [];
//    }
//
//    return 	h("ul.todo-list",todos.map(function(todo){
//        return	h("li", [
//            h("div.view", [
//                h("input.toggle", { "type": "checkbox"}),
//                h("label", [ todo.name ]),
//                h("button.destroy")
//            ]),
//            h("form", [
//                h("input.edit")
//            ])
//        ])
//    }))
//}
