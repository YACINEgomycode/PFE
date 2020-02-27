const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const ObjectId = Schema.ObjectId;



const CertifSchema = new Schema({
 
  
    value: {
        type: String,
        required: true
      },
      
      check: {
        type: Boolean,
        required: false
      },
    
  
});

module.exports = Certif = mongoose.model("certifs", CertifSchema);