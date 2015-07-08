//the list of actions shard between view and model
var $ = require('jquery');
var Rx = require('rx');
var fromEvent = Rx.Observable.fromEvent; 
module.exports =  {

	changeRoute$: Rx.Observable.fromEvent(window, 'hashchange')
		.map(ev => ev.newURL.match(/\#[^\#]*$/)[0].replace('#', ''))
		.startWith(window.location.hash.replace('#', '')),

	insertTodo$: fromEvent($('#new-todo').on('keyup'))
		.filter(ev => {
			let trimmedVal = String(ev.target.value).trim();
			return ev.keyCode === ENTER_KEY && trimmedVal;
		})
	.map(ev => String(ev.target.value).trim()),
};
