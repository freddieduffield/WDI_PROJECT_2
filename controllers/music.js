const Place = require('../models/place');

function musicCreate(req, res) {
  Place
  .findById(req.params.id)
  .exec()
  .then(place => {
    req.body.user = req.user._id;

    place.music.push(req.body);
    place.save();

    res.redirect(`/places/${place._id}`);
  });
}

function musicDelete(req, res) {
  Place
  .findById(req.params.placeId)
  .exec()
  .then(place => {
    const music = place.music.id(req.params.musicId);
    music.remove();
    place.save();

    res.redirect(`/places/${place._id}`);
  });
}

module.exports = {
  create: musicCreate,
  delete: musicDelete
};
