//this is the main todo file
var $ = require('jquery');
var Rx = require('rx');
var fromEvent = Rx.Observable.fromEvent;

class actionMain{

	constructor(){
		//All the default actions for this app
		return {
			changeRoute$: Rx.Observable.fromEvent(window, 'hashchange')
				.map(ev => ev.newURL.match(/\#[^\#]*$/)[0].replace('#', ''))
				.startWith(window.location.hash.replace('#', '')),

			insertTodo$: fromEvent($('#new-todo').on('keyup'))
				.filter(ev => {
					let trimmedVal = String(ev.target.value).trim();
					return ev.keyCode === ENTER_KEY && trimmedVal;
				})
				.map(ev => String(ev.target.value).trim())
		}

	}
}

module.exports = new actionMain();

