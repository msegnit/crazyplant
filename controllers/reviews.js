const Plant = require('../models/plant');
const User = require("../models/user");


module.exports = {
  create,
  delete: deleteOne
};

function create(req, res) {
  User.findById(req.params.id, function(err, user) {
    user.reviews.push(req.body);
    user.save(function(err) {
      res.redirect(`/plant/${user._id}`);
    });
  });
}

function deleteOne(req, res) {
    Plant.findOne({"reviews._id" : req.params.id}, function(err, plant) {
        const review = plant.reviews.id(req.params.id);
        const idx = plant.reviews.indexOf(review);
        if (req.user._id.equals(review.userId)) {
            plant.reviews.splice(idx, 1);
            plant.save(function(err) {
                res.redirect(`/plants/${plant._id}`);
            });
        } else {
            res.redirect(`/plants/${plant._id}`);
        }
    });
}