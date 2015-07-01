/**
 * Created by oalghanmi on 3/27/15.
 */
/*
 *  User authorization routing middleware
 */
//check the request type
module.exports =  function (req, res, next) {

    //check if the owner or contributors || req.tutorial.contributors doesn't inlcude req.user.id
    if(req.user.role != 'admin'){
        res.sendStatus(401)
    }
    else {
     return next()
    }
}

