// const Newplant = require('../models/plant');

// module.exports = {
//   new: newPlant,
//   create
// };

// function create(req, res) {
//   const  s = req.body.born;
//   req.body.born = 
//     `${s.substr(5,2)}-${s.substr(8,2)}-${s.substr(0,4)}`;
//   Newplant.create(req.body, function(err, newplant) {
//     res.redirect('/newplant/new');
//   });
// }

// function newPlant(req, res) {
//   Plant.find({}, function(err, newplant) {
//     res.render('plants/new', {
//       title: 'Add Plant',
//       newPlant
//     });
//   });
// }