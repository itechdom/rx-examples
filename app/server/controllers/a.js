var renderer = require('../renderer.js');
var fs = require('fs');

module.exports = function(stream){

    //start a stream here that will store the data to a file
    stream.subscribe(function(req){
        //store a file locally
        var writeStream = fs.createWriteStream('./controllers/a.json');
        //write the data we get to a file
        req.pipe(writeStream);
        renderer('hello');
    });
};

//requestStream.subscribe (
//		function (stream) {
//			console.log("hello");
//			global.myApp.renderer.res.write("\nhello");
//			global.myApp.renderer.res.end();
//			stream.on('data',function(chunk){
//				data+=chunk;
//			});
//
//			stream.on('end',function(){
//				global.res.write(data);
//				global.res.end();
//			});
//			console.log(stream);
//			console.log(res);
//			console.log('Next: ' + req[0]);
//			res.end();
//
//		},
//		function (err) {
//			console.log('Error: ' + err);
//		},
//		function () {
//			console.log('Completed');
//		}
//);
