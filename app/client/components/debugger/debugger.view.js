'use strict';
var Rx = require('rx');
var actions = require('./debugger.actions.js');
var model = require('./debugger.model.js');
var renderer = require('../renderer/renderer.js');
var util = require('util');
var dispatcher = require('../dispatcher/dispatcher.js');


class debuggerView{

    constructor() {
        this.flag = true;
    }
    //this would be a remote control to all the components registered
    //meaning: it will run all the components one by one
    // the reason it's not running right away is because it has to create
    //the observer first, so the second time around it will fire
    formatOutput() {
        var output = "";
        var modelComponentsEvents = Rx.Observable.from(model.components);
        if(this.flag) {
            var actions = modelComponentsEvents.map((component)=> {
                return component.actions.request$;
            }).mergeAll().subscribe((a)=>{
                output += a.url + "=======>";
                console.log(output);
            });
            this.flag = false;
        }
    }
    wire(){
        this.render = function(message){
            this.formatOutput(message);
            //renderer(output);
        };
        actions.request$.subscribe((req)=>{
            this.render("hello");
        })
    }
    unWire(){

    }
}

module.exports = new debuggerView();
