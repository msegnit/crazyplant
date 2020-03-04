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


module.exports = mongoose.model("User", userSchema);
