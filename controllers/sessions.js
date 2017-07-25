const User = require('../models/user');

function sessionsNew(req, res) {
  res.render('sessions/new');
}

function sessionsCreate(req, res) {
  User
  .findOne({ email: req.body.email})
  .then((user) => {
    if(!user || !user.validatePassword(req.body.password)) {
      return res.status(401).render('sessions/new',  { message: 'Unrecognised Credentials'});
    }
    req.flash('info', `Welcome back, ${user.username}!`);

    req.session.userId = user._id;

    return res.redirect('/');
  });
}

function sessionsDelete(req, res) {
  return req.session.regenerate(() => res.redirect('/'));
}


module.exports = {
  new: sessionsNew,
  create: sessionsCreate,
  delete: sessionsDelete
};
