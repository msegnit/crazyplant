const Plant = require("../models/plant");

module.exports = {
  index,
  addPlant
};

function index(req, res) {
  Plant.find({}, function(err, plants) {
    if (err) return next(err);
    res.render('plants/index', {
      plants,
      user: req.user,
      name: req.query.name,
  
    });
  });
}

function addPlant(req, res, next) {
  req.user.facts.push(req.body);
  req.user.save(function(err) {
    res.redirect('/plants');
  });
}