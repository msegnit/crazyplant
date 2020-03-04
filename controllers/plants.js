const User = require('../models/user');
const Plant = require('../models/plant');


module.exports = {
  newPlant,
  create,
  show,
  index
}

function newPlant (req, res) {
  res.render('plants/new', {title: "Add a Plant", user: req.user})
}

function create (req, res) {
  const plant = new Plant(req.body);
   plant.save(function (err) {
  res.redirect('plants') 
  //{title: "New Plant", user: req.user})
})};

function show(req, res) {
  Plant.findById(req.params.id, function(err, plant) {
      res.render('plants/show', {plant})
  });
}

function index(req, res) {
  Plant.find({}, function(err, plants){
    if (err) return next(err)
 res.render('plants/index')
});
}