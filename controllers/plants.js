const User = require('../models/user');


module.exports = {
  newPlant
}

function newPlant (req, res) {
  res.render('plants/new', {title: "Add a Plant", user: req.user})
}