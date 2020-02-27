const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const ObjectId = Schema.ObjectId;



const ClientSchema = new Schema({
 
  
    clientName: {
        type: String,
        required: true
      },
      
      clientCode: {
        type: String,
        required: true
      },
    
  
});

module.exports = Client = mongoose.model("clients", ClientSchema);