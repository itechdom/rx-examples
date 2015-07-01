//testing the module

/**
 * Module dependencies.
 */

var mongoose = require('mongoose')
    , should = require('should')
    , request = require('supertest')
    , app = require('../../../server')
    , context = describe
    , User = mongoose.model('User')
var cookies, count

/**
 * Users tests
 */

describe('Users', function () {
    //testing sign up
    describe('POST /users', function () {
        describe('Invalid parameters', function () {
            before(function (done) {
                User.count(function (err, cnt) {
                    count = cnt
                    done()
                })
            })

            it('no email - should respond with errors', function (done) {
                request(app)
                    .post('/users')
                    .field('name', 'Foo bar')
                    .field('username', 'foobar')
                    .field('email', '')
                    .field('password', 'foobar')
                    .expect(500)
                    .end(done)
            })

            it('no name - should respond with errors', function (done) {
                request(app)
                    .post('/users')
                    .field('name', '')
                    .field('username', 'foobar')
                    .field('email', 'foobar@example.com')
                    .field('password', 'foobar')
                    //.expect('Content-Type', /html/)
                    .expect(500)
                    //.expect(/Name cannot be blank/)
                    .end(done)
            })

            it('should not save the user to the database', function (done) {
                User.count(function (err, cnt) {
                    count.should.equal(cnt)
                    done()
                })
            })
        })

        describe('Valid parameters', function () {
            before(function (done) {
                User.count(function (err, cnt) {
                    count = cnt
                    done()
                })
            })

            it('should return ok when inserting', function (done) {
                request(app)
                    .post('/users')
                    .field('name', 'Foo bar')
                    .field('username', 'foobar')
                    .field('email', 'foobar@example.com')
                    .field('password', 'foobar')
                    .expect(200)
                    .end(done)
            })

            it('should insert a record to the database', function (done) {
                User.count(function (err, cnt) {
                    cnt.should.equal(count + 1)
                    done()
                })
            })

            it('should save the user to the database', function (done) {
                User.findOne({username: 'foobar'}).exec(function (err, user) {
                    should.not.exist(err)
                    user.should.be.an.instanceOf(User)
                    user.email.should.equal('foobar@example.com')
                    done()
                })
            })
        })
    })
    //testing Sign in
    describe('POST /users/login', function () {
        describe('Invalid parameters', function () {
            it('no email - should respond with errors', function (done) {
                request(app)
                    .post('/users/login')
                    .field('username', 'foobar')
                    .field('email', '')
                    .field('password', 'foobar')
                    .expect(401)
                    .end(done)
            })
            it('wrong password - should respond with errors', function (done) {
                request(app)
                    .post('/users/login')
                    .field('username', 'foobar')
                    .field('email', 'foobar@example.com')
                    .field('password', 'foo')
                    .expect(401)
                    .end(done)
            })

        })
        describe('Valid parameters', function () {
            it('should return ok when the username and pass are correct', function (done) {
                request(app)
                    .post('/users/login')
                    .field('username', 'foobar')
                    .field('email', 'foobar@example.com')
                    .field('password', 'foobar')
                    .expect(200)
                    .end(done)
            })
        })
    })

    after(function (done) {
        User.find({username: 'foobar'}).remove().exec(function (err) {
            if (!err)
                done();
        });
    })
})
