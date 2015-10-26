'use strict';
var Rx = require('rx');
var actions = require('./debugger.actions.js');
var model = require('./debugger.model.js');
var renderer = require('../renderer/renderer.js');


class debuggerView{

    constructor() {

    }
    formatOutput(){
        //what's the logic?
        //handle all component's input events?
        //
        //component.actions.request$.subscribe((data)=>{
        //    console.log("debug called",count);
        //});
        var modelComponentsEvents = Rx.Observable.from(model.components);
        var count = 0;
        modelComponentsEvents.map((component)=>{
            return component.actions.request$;
        }).mergeAll().subscribe((req)=>{
        })
    }
    wire(){

        actions.request$.subscribe(()=>{
            this.render("hello");
        });

        this.render = function(message){
            this.formatOutput();
            renderer( model.components[0].constructor.name);
        }

    }
    unWire(){

    }
}

module.exports = new debuggerView();
