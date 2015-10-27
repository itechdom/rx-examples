//this is the main todo file
var $ = require('jquery');
var Rx = require('rx');
var actions = require('./spinner.actions.js');
var h = require('virtual-dom/h');
var diff = require('virtual-dom/diff');
var patch = require('virtual-dom/patch');
var createElement = require('virtual-dom/create-element');
var model = require('./spinner.model.js');


class spinnerView{

	constructor() {
		this.flag = true;
	}
	//this would be a remote control to all the components registered
	//meaning: it will run all the components one by one
	// the reason it's not running right away is because it has to create
	//the observer first, so the second time around it will fire
	formatOutput() {
		var output = "";
		var modelComponentsEvents = Rx.Observable.from(model.components);
		if(this.flag) {
			var actions = modelComponentsEvents.map((component)=> {
				return component.actions.viewLoaded$;
			}).mergeAll().subscribe((a)=>{
				output += a + "=======>";
				$('h2').hide();
				console.log("Hello this view was loaded","from spinner");
			});
			this.flag = false;
		}
	}
	wire(){
		this.render = function(message){
			this.formatOutput(message);
		};
		actions.request$.subscribe((req)=>{
			console.log("hello");
			$('h1').append("<h2>LOOOOOADING</h2>")
			this.render("hello");
		})
	}
	unWire(){

	}
}

module.exports = new spinnerView();
