// we can abstract it into a method called create a block that will accept a observable of some kind and will add to the list
// I will use merge to display the events as they come in
// the behavior I am expecting is this:

/*request ----- req ----> requestStream combine inputStream ----> routerStream ---> aStream ----> response
			responseStream
*/


// we can make it a courtesy module where the author explicitly chooses to show certain areas of her application work:
// so it would be something like this during the application run
// I got the response object and now I am transforming it (line:24)
// Comining two objects together to produce one (line:23)
// I am producing one stream that goes into the router module
// I am in the router module where I am filtering out requests


//here can we have an observable that connects a url to a controller?

var data = {
	"name":"component name",
	"prev":"previous component it's connected to",
	"input":"the input stream for this component",
	"output":"the output stream of this component"
}

//formats the list of data respecting the relationships between them
function format(json){

}
module.exports = function(componentName,input,output){

	if(global.trace === undefined){
		global.trace = [];
	}

	var filtered = global.trace.filter(function(element){
		return element.name == componentName; 
	})

	if(filtered.length == 0){
		//add the element here
		var object = {};
		object.name = componentName;
		if(input){
			object.prev = input.from;
		}
		object.input = input;
		object.output = output;
		global.trace.push(object);
//		console.log(global.trace);
//
	}
	else{
		console.log("component already exists");
	}
};
