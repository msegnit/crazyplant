const Tktk = require("../models/plant");

module.exports = {
  index
};

function index(req, res) {
  Tktk.find({}, function(err, plants) {
    if (err) return next(err);
    res.render("plants/index", { plants });
  });
}
