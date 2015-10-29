//this is the main todo file
var $ = require('jquery');
var Rx = require('rx');
var view = require('./todoHeader.view.js');

class todoMain{

	constructor(){
		this.view = view;
	}
}
module.exports = new todoMain();
