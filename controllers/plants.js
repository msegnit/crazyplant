const User = require('../models/user');
const Plant = require('../models/plant');


module.exports = {
  newPlant,
  create,
  show,
  index,
  delete: deleteOne
}

function newPlant (req, res) {
  res.render('plants/new', {title: "Add a Plant", user: req.user})
}

function create (req, res) {
  User.findById(req.user._id, function(err, user) {
    user.plants.push(req.body);
    user.save(function(err) {
      res.redirect('/plants')
    })
  })
  //   const plant = new Plant(req.body);
//    plant.save(function (err) {
//   res.redirect('/plants') 
//   //{title: "New Plant", user: req.user})
// })
};

function show(req, res) {
  User.findById(req.user._id, function(err, user) {
    let plant = user.plants[req.params.id];
    res.render('plants/show', {title: "Plant deets", user: req.user, plant})
  })
}

function index(req, res) {
  User.findById(req.user._id, function(err, user){
 res.render('plants/index', {title: "Yaaay, plants!", user})
});
}

function deleteOne(req, res) {
  User.findById(req.user._id, (err, user) => {
    user.plants.splice(req.params.idx, 1);
    user.save( (err) => {
      res.redirect('/plants');
    })
  })
};