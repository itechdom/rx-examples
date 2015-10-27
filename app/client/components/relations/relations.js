'use strict';
var Rx = require('rx');

class relationsMain{
    constructor(){
        routerModel.registerRoute("/debug");
        this.model = model;
        this.view = view;
        model.wire();
        view.wire();
    }
}
module.exports = new relationsMain();
