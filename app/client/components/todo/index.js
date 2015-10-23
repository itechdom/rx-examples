//this is the main todo file
var $ = require('jquery');
var Rx = require('rx');
var model = require('./model.js');
var view = require('./view.js');
var spinnerComponent = require('../spinner/index.js');
var actions = require("./actions.js");

class todoMain{

	constructor(){
		model.wire();
		view.wire();
	}
}


module.exports = new todoMain();

