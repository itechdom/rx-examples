/*
 *  User authorization routing middleware
 */

/*
 *  Feedback authorization routing middleware
 */
//check the request type
module.exports =  function (req, res, next) {

    // if it's delete allow the owner only to delete it
    if(req.method == "DELETE"){
    	if (req.concept.owner.id != req.user.id) {
      		res.send('info', 'You are not authorized');
    	}
    } 
    else{
    //check if the owner or contributors || req.tutorial.contributors doesn't inlcude req.user.id
    req.concept.contributors.forEach(function(u){
	    if(u.id == req.concept.owner.id){
		    var decision = true;
	    }
    });
    if (req.concept.owner.id != req.user.id || !decision) {
      res.send('info', 'You are not authorized');
    }

    }
    next()
  }

