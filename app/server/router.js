Rx = require('rx');
util = require('util');
var data = "this is fake data";
	var observer = Rx.Observer.create(
			function (stream) {
				//console.log("hello");
				//global.myApp.renderer.res.write("\nhello");
				//global.myApp.renderer.res.end();

				stream.on('data',function(chunk){
					data+=chunk;
				});

				stream.on('end',function(){
					global.res.write(data);
					global.res.end();
				});
				//console.log(stream);
				//console.log(res);
				//console.log('Next: ' + req[0]);
				//res.end();

			},
			function (err) {
				console.log('Error: ' + err);
			},
			function () {
				console.log('Completed');
			}
	);

module.exports = observer;
