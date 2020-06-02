const express = require("express");
const passport = require("passport");



const router = express.Router();
const Transactions = require("../models/Transaction");



router.get("/transaction", (req, res) => {
  Transaction.find().then(transaction => res.send(transaction))
});





router.post("/addTransaction", (req, res) => {
    const type_tr = req.body.type_tr;
    const reference_falcon = req.body.reference_falcon;
    const type_equi = req.body.type_equi;
    const num_mission = req.body.num_mission;
    const date_tr = req.body.date_tr;
    const affectation = req.body.affectation;
    const etat_equi = req.body.etat_equi;
    const commentaire = req.body.commentaire;
    
   
      const newTransaction = new Transaction({
        type_tr : type_tr,
        reference_falcon : reference_falcon,
        type_equi : type_equi,
        num_mission : num_mission,
        date_tr : date_tr,
        affectation : affectation,
        etat_equi : etat_equi,
        commentaire : commentaire,


        
      });
  
     
          newTransaction
            .save((err,) => {
                if (err) {
                    return (err);
                }
        
                res.status(200).send("transaction inserée");
            });
           
            
            // res.json(saved))
           
      
 
  });



router.get(
  "/current",
  passport.authenticate("jwt", {
    session: false
  }),
  (req, res) => {
    res.json(req.transaction);
  }
);





module.exports = router;