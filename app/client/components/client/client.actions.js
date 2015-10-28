'use strict';
var $ = require('jquery');
var Rx = require('rx');
var fromEvent = Rx.Observable.fromEvent;
var EventEmitter = require('events').EventEmitter,
	customEvent = new EventEmitter();


class actionMain{
	constructor(){
		//All the default actions for this app
		return {
			request$: Rx.Observable.fromEvent(document,'DOMContentLoaded'),
			changeRoute$: Rx.Observable.fromEvent(window, 'hashchange')
				.map(ev => ev.newURL.match(/\#[^\#]*$/)[0].replace('#', ''))
				.startWith(window.location.hash.replace('#', '')),
			response$: Rx.Observable.fromEvent(customEvent,'response'),
			mount$:Rx.Observable.fromEvent(customEvent,'mount')
		}
	}

}
module.exports = new actionMain();