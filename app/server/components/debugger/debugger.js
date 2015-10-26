'use strict';
var Rx = require('rx');
var model = require('./debugger.model.js');
var view = require('./debugger.view.js');
var actions = require('./debugger.actions.js');
var routerModel = require('../router/router.model.js');

class debuggerMain{
    constructor(){
        routerModel.registerRoute("/debug");
        this.model = model;
        this.view = view;
        model.wire();
        view.wire();
    }
}
module.exports = new debuggerMain();
