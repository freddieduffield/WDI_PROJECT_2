const Place   = require('../models/place');

function placesIndex(req, res, next) {
  Place
  .find()
  .then((places) => res.render('places/index', { places }))
  .catch(next);
}

function placesNew(req, res) {
  res.render('places/new');
}

function placesCreate(req, res, next) {
  req.body.createdBy = req.user._id;

  Place
  .create(req.body)
  .then(() => res.redirect('/places'))
  .catch(next);
}

function placesShow(req, res, next) {
  Place
  .findById(req.params.id)
  .populate('createdBy music.createdBy')
  .exec()
  .then((place) => {
    if(!place) return res.status(404).render('statics/404');
    res.render('places/show', { place });
  })
  .catch(next);
}

function placesEdit(req, res, next) {
  Place
  .findById(req.params.id)
  .then((place) =>{
    if(!place) return res.status(404).render('statics/404');

    res.render('places/edit', { place });
  })
  .catch(next);
}

function placesUpdate(req, res, next) {
  Place
  .findById(req.params.id)
  .then((place) => {
    if(!place) return res.status(404).render('statics/404');

    for(const field in req.body){
      place[field] = req.body[field];
    }
    return place.save();
  })
  .then((place) => res.redirect(`/places/${place.id}`))
  .catch(next);
}

function placesDelete(req, res, next) {
  Place
  .findById(req.params.id)
  .then((place) => {
    if(!place) return res.status(404).render('statics/404');
    return place.remove();
  })
  .then(() => res.redirect('/places'))
  .catch(next);
}


module.exports = {
  index: placesIndex,
  new: placesNew,
  create: placesCreate,
  show: placesShow,
  edit: placesEdit,
  update: placesUpdate,
  delete: placesDelete
};
