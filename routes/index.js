const express = require('express');
const router = express.Router();
const passport = require('passport');

router.get('/', function(req, res, next) {
  res.render('users/index', { title: 'User Index', user: req.user });
});

router.get('/auth/google', passport.authenticate(
  'google',
  { scope: ['profile', 'email'] }
));

router.get('/oauth2callback', passport.authenticate(
  'google',
  {
    successRedirect : '/',
    failureRedirect : '/'
  }
));

router.get('/logout', function(req, res){
  req.logout();
  res.redirect('/users');
});

module.exports = router;
