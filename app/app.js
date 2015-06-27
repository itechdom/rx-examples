var Rx = require('rx');

var move = Rx.Observable.fromEvent(document, 'mousemove');




//var points = move.map(e => ({x: e.clientX, y: e.clientY }));

var points = move.filter(e => e.clientX == 0);

console.log(points);

points.subscribe(
    pos =>  console.log('Mouse at point ' + pos.x + ', ' + pos.y));
