'use strict';
var Rx = require('rx');
var actions = require('./debugger.actions.js');
var model = require('./debugger.model.js');
var renderer = require('../renderer/renderer.js');
var util = require('util');
var dispatcher = require('../dispatcher/dispatcher.js');


class debuggerView{

    constructor() {
    }
    formatOutput() {
        console.log(model.components[1].component.constructor.name);
        model.components[1].component.actions.request$.subscribe((req)=>{
            console.log(req.url);
        });
        //var modelComponentsEvents = Rx.Observable.from(model.components);
        //var actions = modelComponentsEvents.map((component)=> {
        //    return component.actions.request$;
        //}).mergeAll().subscribe((a)=>{
        //    console.log(a.url);
        //});
    }
    wire(){
        this.render = function(message){
            this.formatOutput();
            //renderer("hello");
        };
        actions.request$.subscribe((req)=>{
            console.log(req.url);
            this.render();
        })
    }
    unWire(){

    }
}

module.exports = new debuggerView();
