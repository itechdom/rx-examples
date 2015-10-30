var VNode = require("vtree/vnode");
var diff = require("vtree/diff");
var createElement = require("vdom/create-element");
var patch = require("vdom/patch");

class rendererMain{

	constructor(){

	}
	render(){

	}
}

//replaces VDom or Jquery in that it affects the output
module.exports = function(data){
    global.res.write(data);
    global.res.end();
};

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
