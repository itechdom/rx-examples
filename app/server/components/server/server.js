var http = require('http');
var server = http.createServer();

//plugin to routes here, or why not make this agnostic and leave it to the dispatcher to do that?
server.listen(4000, '127.0.0.1');

console.log("server is listening on 4000");

module.exports = server;
