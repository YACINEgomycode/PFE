const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const ObjectId = Schema.ObjectId;



const ExpertiseSchema = new Schema({
 
  
    exps: {
        type: String,
        required: true
      },
      value :{
        type:String,
        default:'N/A'
        
      }
      
});

module.exports = Expertise = mongoose.model("expertises", ExpertiseSchema);