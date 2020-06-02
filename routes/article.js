const express = require("express");
const passport = require("passport");
const {MongoClient, ObjectID} = require('mongodb')

const router = express.Router();
const Articles = require("../models/Article");
const multer = require('multer');
const path = require("path")

const storage = multer.diskStorage({
  destination: function(req, file, cb) {
    cb(null, './build');
  },
  
  
  filename: function(req, file, cb) {
    cb(null,file.originalname );
  }
});
const upload =multer({storage:storage})



router.get("/articles", (req, res) => {
  Article.find().then(article => res.send(article))
});
router.get('/article/:id', (req, res) => {
  let missionId = ObjectID(req.params.id)
  Article.findOne({_id : missionId}, (err, data)=>{
      if (err) res.send('can not get this mission')
      else (res.send(data))
  })
})





router.post("/addArticle",upload.single('productImage'), (req, res) => {
  console.log(req.file);
    const type = req.body.type;
    const fonction = req.body.fonction;
    const CodeFonction = req.body.CodeFonction;
    const constructeur = req.body.constructeur;
    const NumSerie = req.body.NumSerie;
    const DateEtalonnage = req.body.DateEtalonnage;
    const DateExp = req.body.DateExp;
    const Manuel = req.body. Manuel;
    const EtatPhy = req.body.EtatPhy;
    const LieuStockage = req.body.LieuStockage;
    const Quantite = req.body.Quantite;
    const Statut = req.body.Statut;
    const  NbrTotalArt = req.body.NbrTotalArt;
    const NbrTotalStock = req.body.NbrTotalStock;
    const NbrTotalHors = req.body.NbrTotalHors;
    const contenu_kit= req.body.contenu_kit;
    const  nom_kit=  req.body.nom_kit;
    const code_kit= req.body.code_kit;
    const Reference = req.body.Reference;
    var productImage = "";
   
    if(req.file) {  productImage = req.file.originalname};
      

    

      
    
  

    

    
    
   
      const newArticle = new Article({
        type: type,
        fonction:  fonction,
        CodeFonction:  CodeFonction,
        constructeur:  constructeur,
        NumSerie:  NumSerie,
        DateEtalonnage:  DateEtalonnage,
        DateExp:  DateExp,
        Manuel:   Manuel,
        EtatPhy:  EtatPhy,
        LieuStockage:  LieuStockage,
        Quantite:  Quantite,
        Statut:  Statut,
        NbrTotalArt :  NbrTotalArt,
        NbrTotalStock: NbrTotalStock,
        NbrTotalHors : NbrTotalHors,
        contenu_kit:  contenu_kit,
        nom_kit: nom_kit,
        code_kit: code_kit,
        Reference: Reference,
        productImage:productImage
       
        
        
      });
  
     
          newArticle
            .save()
            .then(result => {
              console.log(result);
              res.status(201).json({
                message: "Created product successfully",
                createdProduct: {
                  type: result.type,
                    price: result.price,
                    
                    
                }
              });
            })
            .catch(err => {
              console.log(err);
              res.status(500).json({
                error: err
              });
            });
        });
        
           
            
            // res.json(saved))
           
      
 
  

 router.put('/upart/:id', (req, res) => {
    let missionId = ObjectID(req.params.id)
    let updatedmission = req.body

    Articles.updateOne({_id : missionId},{$set : { ...updatedmission}}, (err, data)=>{
        if (err) console.log(err)
        else (res.send(data))
    })
    
})

router.get(
  "/current",
  passport.authenticate("jwt", {
    session: false
  }),
  (req, res) => {
    res.json(req.article);
  }
);






module.exports = router;