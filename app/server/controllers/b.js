var renderer = require('../renderer.js');

module.exports = function(stream){
    stream.filter(function(req){
        return req.url == '/b';
    }).subscribe(function(req){
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
