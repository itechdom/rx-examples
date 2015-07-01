/**
 * This is a self-contained module that defines its routes, callbacks, models and views
 * all internally. Such approach to code organization follows the recommendations of TJ:
 *
 * http://vimeo.com/56166857
 *
 */

// Third-party libraries
var express = require('express')
    , mongoose = require('mongoose')
    , fs = require('fs')
    , exports = module.exports = express()
    , app = exports


//export all the acl objects after registering them 
fs.readdirSync(__dirname + '/accessList/').forEach(function (file) {
    //ignore files with name "index"
    if (~file.indexOf('.js') && file.indexOf('index') == -1) {
        filename = __dirname + '/accessList/' + file;
        var obj = require(filename)
        var ffile = file.replace(".js", "");
        exports[ffile] = obj;
    }

});
