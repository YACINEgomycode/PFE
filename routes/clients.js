const express = require("express");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const passport = require("passport");

const config = require("config");
const router = express.Router();
const Clients = require("../models/Client");



router.get("/clients", (req, res) => {
  Client.find().then(client => res.send(client))
});





router.post("/addClient", (req, res) => {
    const clientName = req.body.clientName;
    const clientCode = req.body.clientCode;
    
    
   
      const newClient = new Client({
       clientName: clientName,
        clientCode:  clientCode,
        
      });
  
     
          newClient
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
    res.json(req.client);
  }
);




// router.put("/current/:id", (req, res) => {
//   Contact.findOneAndUpdate(req.params.id, { $set: { ...req.body } })
//     .then(user => res.send(user))
//     .catch(err => res.send(err));
// });


module.exports = router;