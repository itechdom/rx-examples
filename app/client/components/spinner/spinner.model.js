'use strict';
var Rx = require('rx');
var clientActions = require('../client/client.actions.js')

class spinnerModel{

    constructor() {
        this.components = [];
    }
    registerComponent(component){
        this.components.push(component);
    }
    wire(){

    }
}
module.exports = new spinnerModel();