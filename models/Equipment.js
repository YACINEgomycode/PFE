const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const ObjectId = Schema.ObjectId;



const EquipmentSchema = new Schema({
 
  
    equipmentName: {
        type: String,
        required: true
      },
      
      equipmentCode: {
        type: String,
        required: true
      },
    
  
});

module.exports = Equipment = mongoose.model("equipments", EquipmentSchema);