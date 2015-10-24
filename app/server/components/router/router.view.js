'use strict';
var Rx = require('rx');
var actions = require('./router.actions.js');
var renderer = require('../renderer/renderer.js');


class routerView{

    constructor() {
        this.renderer = renderer;
    }
    wire(){

    }
    unWire(){

    }
}

module.exports = new routerView();
