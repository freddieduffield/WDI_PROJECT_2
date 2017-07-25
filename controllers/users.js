const User  = require('../models/user');
const Place = require('../models/place');

function usersShow(req, res) {
  User
  .findById(req.params.id)
  .exec()
  .then(user => {
    Place
      .find({ createdBy: user._id })
      .exec()
      .then(places => {
        res.render('users/show', { user, places });
      });
  });
}

module.exports = {
  show: usersShow
};
