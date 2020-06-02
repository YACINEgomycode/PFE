const express = require("express");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const passport = require("passport");

const config = require("config");
const router = express.Router();
const Equipments = require("../models/Equipment");



router.get("/equipments", (req, res) => {
  Equipment.find().sort( { equipmentName: 1 } ).then(equipment => res.send(equipment))
});





router.post("/addEquipment", (req, res) => {
    const equipmentName = req.body.equipmentName;
    const equipmentCode = req.body.equipmentCode;
    
    
   
      const newEquipment = new Equipment({
        equipmentName: equipmentName,
        equipmentCode:  equipmentCode,
        
      });
  
     
          newEquipment
            .save((err,) => {
                if (err) {
                    return (err);
                }
        
                res.status(200).send("equipement inserer");
            });
           
            
            // res.json(saved))
           
      
 
  });



router.get(
  "/current",
  passport.authenticate("jwt", {
    session: false
  }),
  (req, res) => {
    res.json(req.equipment);
  }
);




// router.put("/current/:id", (req, res) => {
//   Contact.findOneAndUpdate(req.params.id, { $set: { ...req.body } })
//     .then(user => res.send(user))
//     .catch(err => res.send(err));
// });


module.exports = router;