const express = require('express');
const router  = express.Router();

const statics       = require('../controllers/statics');
const users         = require('../controllers/users');
const places        = require('../controllers/places');
const music         = require('../controllers/music');
const sessions      = require('../controllers/sessions');
const registrations = require('../controllers/registrations');

function secureRoute(req, res, next) {
  if(!req.session.userId) {
    return req.session.regenerate(() => {
      req.flash('danger', 'You must be logged in');
      res.redirect('/login');
    });
  }

  return next();
}

router.route('/')
  .get(statics.homepage);

router.route('/places')
  .get(places.index)
  .post(secureRoute, places.create); //secure route

router.route('/places/new')
  .get(secureRoute, places.new);
//
router.route('/places/:id')
  .get(places.show)
  .post(secureRoute, music.create) //secure route
  .put(secureRoute, places.update) //secure route
  .delete(secureRoute, places.delete); //secure route

router.route('/places/:id/edit')
  .get(secureRoute, places.edit);

router.route('/places/:placeId/music/:musicId')
  .delete(secureRoute, music.delete);

router.route('/register')
  .get(registrations.new)
  .post(registrations.create);

router.route('/login')
  .get(sessions.new)
  .post(sessions.create);

router.route('/logout')
  .get(sessions.delete);

router.route('/users/:id')
  .get(users.show);

module.exports = router;
