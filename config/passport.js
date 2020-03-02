const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth').OAuth2Strategy;
const Plant = require('../models/plant');

// new code below
passport.use(new GoogleStrategy({
    clientID: process.env.GOOGLE_CLIENT_ID,
    clientSecret: process.env.GOOGLE_SECRET,
    callbackURL: process.env.GOOGLE_CALLBACK
  },
  function(accessToken, refreshToken, profile, cb) {
    Plant.findOne({ 'googleId': profile.id }, function(err, plant) {
        if (err) return cb(err);
        if (plant) {
          return cb(null, plant);
        } else {
          var newPlant = new Plant({
            name: profile.displayName,
            email: profile.emails[0].value,
            googleId: profile.id
          });
          newPlant.save(function(err) {
            if (err) return cb(err);
            return cb(null, newPlant);
          });
        }
      });
    }
  ));
  passport.serializeUser(function(plant, done) {
    done(null, plant.id);
});


  passport.deserializeUser(function(id, done) {
    Plant.findById(id, function(err, plant) {
      done(err, plant);
    });
  });