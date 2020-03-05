const User = require('../models/user');
const Plant = require('../models/plant');


module.exports = {
  newPlant,
  create,
  show,
  index,
  delete: deleteOne,
  edit,
  update,
  addReview
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
};

function show(req, res) {
  User.findById(req.user._id, function(err, user) {
    console.log("I'm user in the show func", user)
    let plant = user.plants.id(req.params.id);
    console.log(plant, "This is a plant");
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

function edit(req, res) {
  User.findById(req.user._id, function(err, user) {
    var plant = user.plants.id(req.params.id) 
      res.render('plants/edit', {
        user: req.user,
        title: 'edit',
        plant
      })
  })
}

function update(req, res) {
  User.findById(req.user._id, function(err, user) {
    console.log(req.params.id);
    console.log(req.body);
    var planty = user.plants.id(req.params.id);
    planty.plantName = req.body.plantName;
    planty.lighting = req.body.lighting;
    planty.environment = req.body.environment;
    user.save( function(err, savedUser) {
      if (err) console.log(err)
      console.log('user in update func', savedUser)
      res.redirect(`/plants/${req.params.id}`)
    })
    })} 

    function addReview(req, res) {
      console.log(req.body);
      User.findById(req.user._id, function(err, user) {
          let planty = user.plants.id(req.params.id);
          planty.reviews.push(req.body);
              user.save(function(err) {
              res.redirect(`/plants/${req.params.id}`)
          })
          })
        }