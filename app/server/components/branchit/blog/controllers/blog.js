var exports = module.exports;
var mongoose = require('mongoose')
var Post = mongoose.model('Post')
var extend = require("extend");

//add something here that describes the api I am doing
//when you request each one it will find it and send info about it,


/**
 * Load
 */

exports.load = function (req, res, next, id){
  var User = mongoose.model('User');
  Post.load(id, function (err, post) {
    if (err) return next(err);
    if (!post) return next(new Error('not found'));
    req.post = post;
    next();
  });
};

/**
 * List
 */

exports.index = function (req, res){
  var page = (req.param('page') > 0 ? req.param('page') : 1) - 1;
  var perPage = 30;
  var options = {
    perPage: perPage,
    page: page
  };

  Post.list(options, function (err, posts) {
    if (err) return res.render('500');
    Post.count().exec(function (err, count) {
      res.send({
        title: 'posts',
        posts: posts,
        page: page + 1,
        pages: Math.ceil(count / perPage),
        info:req.info
      });
    });
  });
};

/**
 * Create a post
 * Upload an image
 */

exports.create = function (req, res) {
  var post = new Post(req.body);
/*  var images = req.files.image
    ? [req.files.image]
    : undefined;*/

  post.owner = req.user;


  post.save(function (err) {
    if (err){
	  res.status(500);
	  res.send(
	  {
		  error:err
	  }
	  );
    }
    else{
      res.send(
	{
		Message:'Successfully created post!',
	        post: post
      	}
      );
    }

  });
};

exports.fork = function (req, res) {
  var con = req.post;
  con.forkOf = req.post._id;
  con._id = mongoose.Types.ObjectId();
  con.isNew = true;
  con.owner = req.user;
/*  var images = req.files.image
    ? [req.files.image]
    : undefined;*/
  //reset contributors for the forked post
  con.save(function (err) {
    if (err){
	  res.status(500);
	  res.send(
	  {
		  error:err
	  }
	  );
    }
    else{
	res.send(
	{
		Message:'Successfully created post!',
	        post: con
      	}
        );
    }

  });
};


/**
 * Update post
 */

exports.update = function (req, res){
  var post = req.post;
 /* var images = req.files.image
    ? [req.files.image]
    : undefined;
*/
  // make sure no one changes the user
  delete req.body.user;
  post = extend(post, req.body);

  post.save(function (err) {
    if (err){
	  res.status(500);
	  res.send(
	  {
		  error:err
	  }
	  );
    }
    else{
      res.send('Successfully updated post!');
    }

  });
};

/**
 * Show
 */

exports.show = function (req, res){
  res.send({
    title: req.post.title,
    post: req.post
  }
  );
};

/**
 * Delete an post
 */

exports.destroy = function (req, res){
  var post = req.post;
  post.remove(function (err){
 	if (err){
	  res.status(500);
	  res.send(
	  {
		  error:err
	  }
	  );
    	}
    else{
      res.send(
	{
		Message:'Successfully deleted post!',
	        post: post
      	}
      );
    }


  });
};
