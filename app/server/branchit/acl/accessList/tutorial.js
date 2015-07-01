/*
 *  User authorization routing middleware
 */

/*
 *  Feedback authorization routing middleware
 */
module.exports =  function (req, res, next) {
    if (req.tutorial.owner.id != req.user.id) {
      res.send('info', 'You are not authorized');
    }
    next()
  }

