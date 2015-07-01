/*
 *  User authorization routing middleware
 */

/*
 *  Feedback authorization routing middleware
 */
user = {
  hasAuthorization: function (req, res, next) {
    if (req.profile.id != req.user.id) {
      return res.sendStatus(401)
    }
    next()
  }
}

exports.module = user;
