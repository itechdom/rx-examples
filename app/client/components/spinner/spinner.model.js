'use strict';
var Rx = require('rx');
var clientActions = require('../client/client.actions.js')

class spinnerModel{

    constructor() {
        this.components = [];
    }
    registerComponent(component,options){
        //you can pass an options to override default event
        //currently it's viewLoaded
        // you can attach more events here (like dataLoaded ...)
        //Also you can pass the start event (weather it's viewLoading ..)
        this.components.push(component);
    }
    wire(){

    }
}
module.exports = new spinnerModel();