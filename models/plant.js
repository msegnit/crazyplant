const mongoose = require("mongoose");
const Schema = mongoose.Schema;


const plantSchema = new Schema({
    plantname: { 
     type:String,
    },
    lighting: {
        type: String,
    }, 
    environment: {
        type: String
    } 
});


module.exports = mongoose.model("Plant", plantSchema);