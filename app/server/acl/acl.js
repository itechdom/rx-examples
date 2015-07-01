//this file is used if I wanted to route to different controllers from a central point
Rx = require('rx');

module.exports = function(stream,user){

    return stream.map(function(req){
        //return req;
        if(req.url == '/auth') {
            throw new Error('not authorized');
        }
        else{
            return req;
        }
    });
    //urlStream = requestStream.filter(function(req){
    //	return req.url == '/';
    //});
};
