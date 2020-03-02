const express = require('express');
const router = express.Router();
const passport = require('passport');

router.get('/', function(req, res, next) {
  res.render('index', { title: 'Plant Index' });
});

router.get('/auth/google', passport.authenticate(
  'google',
  { scope: ['profile', 'email'] }
));

router.get('/oauth2callback', passport.authenticate(
  'google',
  {
    successRedirect : '/plants',
    failureRedirect : '/plants'
  }
));

router.get('/logout', function(req, res){
  req.logout();
  res.redirect('/plants');
});

module.exports = router;
