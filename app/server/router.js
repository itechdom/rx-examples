Rx = require('rx');
var count = 0;
	var observer = Rx.Observer.create(
			function (stream) {
				count++
				console.log(count);
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
			)
module.exports = observer;
