//this is the main todo file
var $ = require('jquery');
var Rx = require('rx');
require("font-awesome/scss/font-awesome.scss");
var view = require('./spinner.view.js');

class spinnerMain{

	constructor(){
		view.wire();
	}
}

module.exports = new spinnerMain();

