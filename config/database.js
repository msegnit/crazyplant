const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/plants', {
  useNewUrlParser: true, 
  useCreateIndex: true, 
  useUnifiedTopology: true
});
