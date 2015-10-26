'use strict';
var Rx = require('rx');
var actions = require('./debugger.actions.js');
var model = require('./debugger.model.js');
var renderer = require('../renderer/renderer.js');


class debuggerView{

    constructor() {

    }
    formatOutput() {
        var modelComponentsEvents = Rx.Observable.from(model.components);
        var count = 0;
        var actions = [];
        var merged;
        modelComponentsEvents.map((component)=> {
            return component.actions.request$;
        }).mergeAll().subscribe((data)=>{
            count++;
            console.log(count);
            console.log(data.url);
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
