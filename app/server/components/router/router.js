'use strict';
var Rx = require('rx');
var model = require('./model.js');
var view = require('./view.js');

class todoMain{
    constructor(){
        model.wire();
        view.wire();
    }
}

module.exports = new todoMain();