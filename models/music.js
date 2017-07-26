const mongoose = require('mongoose');

const musicSchema = new mongoose.Schema({

  place: {type: mongoose.Schema.ObjectId, ref: 'Place'},
  createdBy: {type: mongoose.Schema.ObjectId, ref: 'User'},
  track: {type: String},
  artist: {type: String},
  image: {type: String},
  comments: {type: String}
});

module.exports = mongoose.model('Music', musicSchema);
