'use strict';
var $ = require('jquery');
var Rx = require('rx');
var model = require('./model.js');
var view = require('./view.js');
var serverActions = require('../server/actions.js');

class todoMain{
	constructor(){
		model.wire();
	}
}


module.exports = new todoMain();

