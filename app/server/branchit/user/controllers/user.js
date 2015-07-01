var exports = module.exports;
var passport = require('passport');
var mongoose = require('mongoose')
    , User = mongoose.model('User')

exports.register = function (req, res) {

    var user = new User(req.body);
    user.provider = 'local';
    user.save(function (err) {
        if (err) {
            res.status(500);
            res.send({
                error: err,
                user: user
            });
        }
        else {
            res.sendStatus(200);
        }
    });

};
exports.login = passport.authenticate('local', {
	  successRedirect: "/users/success",
	  failureRedirect: "/users/failure"
});

exports.success = function(req,res){
	res.sendStatus(200);
}
exports.failure = function(req,res){
	res.sendStatus(401);
}
exports.checkReq = function(req,res){
	res.sendStatus(200);
}


