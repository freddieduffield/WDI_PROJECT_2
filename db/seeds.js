const mongoose   = require('mongoose');
mongoose.Promise = require('bluebird');

const dbURL      = process.env.MONGODB_URI || 'mongodb://localhost/wdi-project-2';
mongoose.connect(dbURL);

const User  = require('../models/user');
const Place = require('../models/place');

User.collection.drop();
Place.collection.drop();

User
.create([{
  username: 'kennyDixon',
  email: 'moody@man.com',
  password: 'password',
  passwordConfirmation: 'password',
  profilepic: 'https://www.residentadvisor.net/images/events/flyer/2011/uk-0520-239117-front.jpg'
},{
  username: 'TheoParrish',
  email: 'theo@parrish.com',
  password: 'password',
  passwordConfirmation: 'password',
  profilepic: 'https://img.deepershades.net/stories/sysimages/hotmass.jpg'
},{
  username: 'FreddieFoxxx',
  email: 'fwhduffield@gmail.com',
  password: 'password',
  passwordConfirmation: 'password',
  profilepic: 'https://images.genius.com/076529bde3a163c61e36de33e103c69f.500x494x1.jpg'
}])
.then((users) => {
  console.log(`${users.length} users created`);

  return Place
      .create([{
        address: '147-149 Curtain Road, Shoreditch, London EC2A 3QE',
        name: 'Plastic People',
        lat: 51.526614,
        lon: -0.080559,
        details: 'Long-known as the host to dubstep\'s formative FWD>> parties, Plastic People is a tiny basement club on Curtain Road in the heart of east London\'s Shoreditch. With a world famous sound system and infamously dim lighting, the experience is all about loud music in a dark room. In addition to the bass-oriented FWD night,  Plastic People regularly features techno, house, hip-hop, and other more experimental nights and shows.',
        type: 'Night Club',
        image: '/images/plasticpeople.png',
        createdBy: users[2]._id,
        music: [
          {
            user: users[2]._id,
            track: 'Truly',
            artist: 'Floating Points',
            image: 'http://www.kayshin.me/wp-content/uploads/2015/04/floating-points-vacuum-boogie-ep-kayshin-5.png',
            comments: 'This went off'
          }
        ]
      },{
        address: '3 Madeira Dr, Brighton BN2 1PS',
        name: 'Volks',
        lat: 50.819246,
        lon: -0.132283,
        details: 'The Volks Brighton, if you\'re after that jumping party vibe, make sure you pay us a visit! Located on  Brighton Seafront, the bar & diner open during the day.',
        type: 'Night Club',
        image: '/images/volks.png',
        createdBy: users[2]._id,
        music: [
          {
            user: users[2]._id,
            track: 'Ain\'t a player',
            artist: 'Fat Joe',
            image: 'https://cdn.shopify.com/s/files/1/0993/9646/products/LOUD4909112_4c672a11-2b36-45ca-b0ed-ea281f6ae30c_1024x1024.jpeg',
            comments: 'Dropped this supporting in the almighty Aba-Shanti in the piss aroma basement'
          }
        ]
      },{
        address: 'Old Street Roundabout, London EC1Y 1BE',
        name: 'Old Street',
        lat: 51.525298,
        lon: -0.090767,
        details: 'Now defunct basement club, forget the name',
        type: 'Night Club',
        image: '/images/oldstreet.png',
        createdBy: users[2]._id,
        music: [
          {
            user: users[2]._id,
            track: 'Myron',
            artist: 'Groove Chronicles',
            image: 'https://i.ytimg.com/vi/aNwDbJU0oWE/hqdefault.jpg',
            comments: 'Seeing Groove Chronicle post carnival at Deviation he dropped this and it changed my life'
          }
        ]
      }
      ]);
})
.then((places) => {
  console.log(`${places.length} places created`);
})
.catch((err) =>{
  console.log(err);
})
.finally(() =>{
  mongoose.connection.close();
});
