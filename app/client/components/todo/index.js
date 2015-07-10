//this is the main todo file
var $ = require('jquery');
var Rx = require('rx');
var model = require('./model.js');
var view = require('./view.js');
//import any styles for todo list app
var style = require('./todo.scss')

class todoMain{

	constructor(){
		model.wire();
		view.wire();
	}
}


module.exports = new todoMain();

