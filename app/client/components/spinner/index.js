//this is the main todo file
var $ = require('jquery');
var Rx = require('rx');
var view = require('./view.js');

class spinnerMain{

	constructor(){
		view.wire();
	}
}

module.exports = new spinnerMain();

