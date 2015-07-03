var Rx = require('rx');

//select main component
var mainComponent = document.getElementById('main');

var todoComponent = require('./components/todo/index.js');

//get the todo component to attach itself to the main one
todoComponent(mainComponent,'/');
