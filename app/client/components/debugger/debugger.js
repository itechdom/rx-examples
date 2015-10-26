'use strict';
var Rx = require('rx');
var model = require('./debugger.model.js');
var view = require('./debugger.view.js');
var actions = require('./debugger.actions.js');

class debuggerMain{
    constructor(){
        this.model = model;
        this.view = view;
        model.wire();
        view.wire();
    }
}
module.exports = new debuggerMain();
