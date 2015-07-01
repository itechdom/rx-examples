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

require('./setup/mongoose')(mongoose);
