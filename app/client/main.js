var Rx = require('rx');
var router = require('./router');
var actions = require('./components/actions/index.js');


//select main component
//have all the main events trigger something here
// so we have the window onload to load all the components
var todoComponent = require('./components/todo/index.js');
var spinnerComponent = require('./components/spinner/index.js');

