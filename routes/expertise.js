const express = require("express");
const passport = require("passport");

const config = require("config");
const router = express.Router();
const Expertise = require("../models/Expertise");



router.get("/expertise", (req, res) => {
  Expertise.find().then(expertise => res.send(expertise))
});





router.post("/addExpertise", (req, res) => {
    const exps = req.body.exps;
   
    
    
   
      const newExpertise = new Expertise({
       exps: exps,
        
      });
  
     
          newExpertise
            .save((err,) => {
                if (err) {
                    return (err);
                }
        
                res.status(200).send("expertise inserer");
            });
           
            
            // res.json(saved))
           
      
 
  });



router.get(
  "/current",
  passport.authenticate("jwt", {
    session: false
  }),
  (req, res) => {
    res.json(req.expertise);
  }
);




// router.put("/current/:id", (req, res) => {
//   Contact.findOneAndUpdate(req.params.id, { $set: { ...req.body } })
//     .then(user => res.send(user))
//     .catch(err => res.send(err));
// });


module.exports = router;