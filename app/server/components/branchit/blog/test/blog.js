//testing the module

/**
 * Module dependencies.
 */

var mongoose = require('mongoose')
, should = require('should')
, request = require('supertest')
, app = require('server')
, context = describe
, blog = mongoose.model('Post')
var cookies, count, conId, fconId;


/**
 * blog tests
 */


//I want to write test cases for crud blog
/* login first
describe('user.signin', function() {
	it('should signin', function(done) {
	         request(app)
                    .post('/users/login')
                    .field('email', 'test@test.com')
                    .field('password', 'test')
                    .expect(302)
                    .end(function(err,res){
			done();
		    })
	});
});
*/
describe('blog', function () {

	describe('POST /blog', function () {
		describe('Invalid parameters', function () {
			before(function (done) {
				blog.count(function (err, cnt) {
					count = cnt
					done()
				})
			})
			it('no title - should respond with errors', function (done) {
				request(app)
				.post('/blog')
				.expect(500)
				.end(done)
			})

			it('should not save the blog to the database', function (done) {
				blog.count(function (err, cnt) {
					count.should.equal(cnt)
					done()
				})
			})
		})

		describe('Valid parameters', function () {
			before(function (done) {
				blog.count(function (err, cnt) {
					count = cnt
					done()
				})
			})

			it('should return ok when inserting', function (done) {
				request(app)
				.post('/blog')
					.set('Content-Type', 'application/json')
					.send({ "title": 'test'})
				.expect(hasId)
				.expect(200)
				.end(done)

				function hasId(res) {

					if(!res.body.post){
						throw new Error("there's no tutroial attached to the response")
					}
					conId = res.body.post._id;
				}
			})
			it('should insert a record to the database', function (done) {
				blog.count(function (err, cnt) {
					cnt.should.equal(count + 1)
					done()
				})
			})

			it('should save the blog to the database', function (done) {
				blog.findOne({title: 'test'}).exec(function (err, post) {
					should.not.exist(err)
					post.should.be.an.instanceOf(blog)
					done()
				})
			})
			it('should return ok when forking', function (done) {
				request(app)
				.post('/blog/'+conId)
				.expect(hasId)
				.expect(200)
				.end(done)

				function hasId(res){
					if(!res.body.post._id){
						throw new Error("blog doesn't contain id");
					}

					fconId = res.body.post._id;

				}

			})
			it('should insert a record to the database', function (done) {
				blog.count(function (err, cnt) {
					cnt.should.equal(count + 2)
					done()
				})
			})

			it('should save the blog to the database', function (done) {
				blog.findOne({_id: fconId}).exec(function (err, post) {
					should.not.exist(err)
					post.should.be.an.instanceOf(blog)
					done()
				})
			})

			it('should update the previously inserted blog',function(done){
				request(app)
				.put('/blog/'+conId)
					.set('Content-Type', 'application/json')
					.send({ "title": 'updatedTest'})
				.expect(200)
				.end(done)
			})
			it('should save the updated blog to the database', function (done) {
				blog.findOne({title: 'updatedTest'}).exec(function (err, post) {
					should.not.exist(err)
					post.should.be.an.instanceOf(blog)
					done()
				})
			})

			it('should delete the previously inserted blog',function(done){
				request(app)
				.delete('/blog/'+conId)
				.expect(200)
				.end(done)
			})
			it('should save the deletion of blog to the database', function (done) {
				blog.findOne({title: 'updatedtest'}).exec(function (err, post) {
					should.not.exist(err)
					should.not.exist(post);
				done()
				})
			})

		})
	})
	after(function (done) {
		blog.find({title: 'test'}).remove().exec(function (err) {
			if (!err)
			done();
		});
		blog.findOne({_id: fconId}).remove().exec(function (err) {
			if (!err)
			done();
		});
	})

})
