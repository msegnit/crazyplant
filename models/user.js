const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const plantSchema = new Schema({
  plantName: { 
   type:String,
  },
  lighting: {
      type: String,
  }, 
  environment: {
      type: String
  } 
});

const userSchema = new Schema({
    name: String,
    email: String,
    googleId: String,
    plants: [plantSchema]
 }, {
   timestamps: true
 });

 const reviewSchema = new Schema({
  content: String,
  rating: {type: Number, min: 1, max: 5, default: 5}
}, {
  timestamps: true
});


module.exports = mongoose.model("User", userSchema);
