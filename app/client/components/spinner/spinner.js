//this is the main todo file
var $ = require('jquery');
var Rx = require('rx');
require("font-awesome/scss/font-awesome.scss");
var view = require('./spinner.view.js');
var model = require('./spinner.model.js');

class spinnerMain {

    constructor() {
        this.view = view;
        this.model = model;
    }
}

module.exports = new spinnerMain();

