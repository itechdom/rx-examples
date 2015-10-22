/*!
 * Module dependencies.
 */

//load global config file here
var config = require('config');

/**
 * Expose
 */

module.exports = function (mongoose) {
// Connect to mongodb
    var connect = function () {
        var options = {server: {socketOptions: {keepAlive: 1}}};
        mongoose.connect(config.get('db'), options);
    };
    connect();
    mongoose.connection.on('error', console.log);
    mongoose.connection.on('disconnected', connect);
};
