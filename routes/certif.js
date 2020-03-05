const express = require("express");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const passport = require("passport");

const config = require("config");
const router = express.Router();
const Certifs = require("../models/Certif");



router.get("/certifs", (req, res) => {
  Certif.find().then(certif => res.send(certif))
});





router.post("/addCertif", (req, res) => {
    const value = req.body.value;
    const check = req.body.check;
    
    
   
      const newCertif = new Certif({
       value: value,
        check:  check,
        
      });
  
     
          newCertif
            .save((err,) => {
                if (err) {
                    return (err);
                }
        
                res.status(200).send("client inserer");
            });
           
            
            // res.json(saved))
           
      
 
  });



router.get(
  "/current",
  passport.authenticate("jwt", {
    session: false
  }),
  (req, res) => {
    res.json(req.certif);
  }
);




// router.put("/current/:id", (req, res) => {
//   Contact.findOneAndUpdate(req.params.id, { $set: { ...req.body } })
//     .then(user => res.send(user))
//     .catch(err => res.send(err));
// });


module.exports = router;