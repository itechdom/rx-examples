'use strict';
var Rx = require('rx');
var actions = require('./router.actions.js');
var renderer = require('../renderer/renderer.js');
var util = require('util');

class routerView{

    constructor() {

    }
    render(routes){
       renderer(util.inspect(routes, false, null));
    }
}

module.exports = new routerView();
