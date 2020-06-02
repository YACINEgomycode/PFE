const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const ObjectId = Schema.ObjectId;



const TransactionSchema = new Schema({
 
  
    type_tr: {
        type: String,
        required: true
      },
      
      reference_falcon: {
        type: String,
        required: true
      },
      type_equi: {
        type: String,
        required: true
      },
      num_mission: {
        type: String,
        required: true
      },
      date_tr: {
        type: String,
        required: true
      },
      affectation: {
        type: String,
        required: true
      },
      etat_equi: {
        type: String,
        required: true
      },
      commentaire: {
        type: String,
        required: true
      },
    
  
});

module.exports = Transaction = mongoose.model("transactions", TransactionSchema);