/*!
 * Module dependencies.
 */

var express = require('express')
var mongoose = require('mongoose');
var LocalStrategy = require('passport-local').Strategy;
var UserModel = require('user');
var User = mongoose.model('User');
var passport = require('passport')
var local = require('./strategies/local')
, mainApp = require('../../server')
  , exports = module.exports = express()
    , app = exports


//add the main app file?
//var google = require('./passport/google');
//var facebook = require('./passport/facebook');
//var twitter = require('./passport/twitter');
//var linkedin = require('./passport/linkedin');
//var github = require('./passport/github');

// initialize passport

/**
 * Expose
 */
    // serialize sessions
    passport.serializeUser(function (user, done) {
        done(null, user.id)
    })

    passport.deserializeUser(function (id, done) {
        User.load({criteria: {_id: id}}, function (err, user) {
            done(err, user)
        })
    })

    // use these strategies
    passport.use(local);


    /*
     passport.use(google);
     passport.use(facebook);
     passport.use(twitter);
     passport.use(linkedin);
     passport.use(github);
     */
