const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const ObjectId = Schema.ObjectId;



const ArticleSchema = new Schema({
 
  
    type: {
        type: String,
        
      },
      
      fonction: {
        type: String,
       
      },
      CodeFonction: {
        type: String,
        
      },
      constructeur: { 
        type: String,
       
      },
      NumSerie : {
        type: String,
       
      },
      DateEtalonnage: {
        type: String,
      
      },
      DateExp: {
        type: String,
       
      },
      Manuel: {
        type: String,
        
      },
      EtatPhy: {
        type: String,
       
      },
      LieuStockage: {
        type: String,
        
      },
      Quantite: {
       type:Number, 
       
      },
      Statut: {
        type: String,
       
        default:'en stock'
      },
      NbrTotalArt: {
        type: String,
        
      },
      NbrTotalStock: {
        type: String,
        
      },
      NbrTotalHors: {
        type: String,
        
      },
      contenu_kit: {
        type: String,
      },
      nom_kit: {
        type: String,
      },
      code_kit: {
        type: String,
      },
      
      Reference: {
        type: String,
        
      },
      productImage: { type: String,required: false }
      
    
  
});

module.exports = Article = mongoose.model("articles", ArticleSchema);