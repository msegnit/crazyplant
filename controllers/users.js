const User = require('../models/user');

module.exports = {
  index,
  show,
  new: newUser,
  create
};

function index(req, res) {
  User.find({}, function(err, users) {
    res.render('users/index', { title: 'All Users', users, user: req.user });
  });
}

function show(req, res) {
  User.findById(req.params.id, function(err, user) {
    res.render('users/show', {
      user,
      newuser,
      user: req.user
       });
     }
   );
  };

function newUser(req, res) {
  res.render('users/new', { title: 'Add User' });
}

function create(req, res) {
  console.log(req.body);
  const user = new User(req.body);
  user.save(function(err) {
    console.log(user);
    res.redirect('users/index');
  })
}

