//this file is used if I wanted to route to different controllers from a central point
Rx = require('rx');

module.exports = function(stream,user){

	empty = Rx.Observable.return(404);

	return stream.map(function(req){
		if(req.url == "/auth"){
			return empty
		}
		else{
		return req;
		}
	});

/*     function testAuth (){
		stream.map(function(req){
		if(req.url == '/auth'){	
			console.log("hellooooooo");
		throw new Error('not authorized');
		}
		return req;
		})
      }

     return testAuth().catch(function(e){
	console.log('hi');
	return stream;
     });
*/
/*
    a = stream.map(function(req){
        //return req;
	testAuth(req);
     })
    console.log(a);
    return a.catch(function(e){
	    console.log(e);
	     return empty;
     });
*/

    //urlStream = requestStream.filter(function(req){
    //	return req.url == '/';
    //});
};