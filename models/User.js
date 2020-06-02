const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const ObjectId = Schema.ObjectId;



const UserSchema = new Schema({
  username: {
    type: String,
    required: true
  },
  
  password: {
    type: String,
    required: true
  },
  permission:{
    type : Boolean,
    

  
  }
  
});

module.exports = User = mongoose.model("users", UserSchema);