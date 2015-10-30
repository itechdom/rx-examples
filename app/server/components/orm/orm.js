'use strict';
var Rx = require('rx');
var dispatcher = require('../dispatcher/dispatcher.js');
var mongoose = require('mongoose');


class ormMain{

	constructor(){
        console.log("hello");
        mongoose.connect('mongodb://localhost:27017/todomvc');
        this.db = mongoose.connection;
        this.db.on('error', console.error.bind(console, 'connection error:'));
        this.db.once('open', function (callback) {
            // yay!
            console.log("connection");
        });
    }
    repo(){
        return this.db;
    }

}

module.exports = new ormMain();

