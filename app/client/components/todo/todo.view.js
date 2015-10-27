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
		actions.request$.subscribe((req)=>{
			console.log("we are here folks!");
		})
	}
	wire(){
	}
	unWire(){

	}
}

module.exports = new todoView();
