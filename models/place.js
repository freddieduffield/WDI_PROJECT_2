const mongoose = require('mongoose');

const musicSchema = new mongoose.Schema({
  createdBy: {type: mongoose.Schema.ObjectId, ref: 'User'},
  track: {type: String},
  artist: {type: String},
  image: {type: String},
  comments: {type: String}
});

const placeSchema = new mongoose.Schema({
  address: {type: String},
  name: {type: String},
  lat: {type: Number},
  lon: {type: Number},
  details: {type: String},
  type: {type: String},
  image: {type: String},
  createdBy: { type: mongoose.Schema.ObjectId, ref: 'User' },
  music: [musicSchema]

});

module.exports = mongoose.model('Place', placeSchema);
