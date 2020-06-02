import React, { Component } from 'react'
import axios from 'axios';
import { Table } from 'reactstrap';

import './inv.css'
import { Button } from 'reactstrap';

import {Link, Switch} from 'react-router-dom'
import More from './More';
import PrintComponents from "react-print-components";
import Barcode from './react-barcode';






export default class Inventaire extends Component {
    state = { 
        article:[],
        isBackgroundRed:"false",
        filter:'',                    // all filter 
        filter1:'',
        art:"",
        kit:"",
       
        
    }

    // componentDidMount finction that get data from database
    onChangeSearch = (e) => {
      this.setState({
          filter: e.target.value,  // filter variable corresponding to order number
          
   });
 };

    onChangeSearch1 = (e) => {
      this.setState({
          
          filter1: e.target.value // filter variable corresponding to clients
   });
 };
    componentDidMount () {
      
      axios
      .get("/articles")
      .then(res => this.setState({
          article : res.data    // get data from database named FalconData and put all data in variable called profile
      }))
      .catch(err =>console.log("err", err))
     
    }
   
    render() {
      
      const { filter, filter1,article}= this.state;
      const lowercasedFilter = filter.toLowerCase();
      const lowercasedFilter1 = filter1.toLowerCase();

      const filteredData = article.filter((item, i) => {
        return ( (item.Reference.toLowerCase().includes(lowercasedFilter) || !filter) 
        && (item.nom_kit.toLowerCase().includes(lowercasedFilter1) || !filter1) )})
        return (


            <div>

<div style={{display:'flex',justifyContent:"center",marginBottom:"50px"}}>
            <div className="inputSyle">
               <label style={{color:'white', fontWeight:'bold'}}>Chercher Reference</label> 
               <input type="text" name="art" onChange={this.onChangeSearch} value={filter}/>

               <label style={{color:'white', fontWeight:'bold', marginLeft:'55px'}}>Nom Kit</label>
                <input type="text" name="kit" onChange={this.onChangeSearch1} value={filter1}/>
            </div>
</div>
<div className="titre-tableau"><h1>Equipements et Consommables</h1></div>
              <Table responsive>
            
            <thead>
              <tr>
                <th className="titre">type</th>
                <th className="titre-tab">Référence Falcon </th>
                <th className="titre-tab">Fonction</th>
                <th className="titre-tab">Numéro de série </th>
                <th className="titre-tab">État physique</th>
                <th className="titre-tab">constructeur</th>
                <th className="titre-tab">LieuStockage</th>
                <th className="titre-tab">Quantite</th>
                <th className="titre-tab">Statut</th>
                <th className="titre-tab">DateEtalonnage</th>
                <th className="titre-tab">DateExp</th>
                <th className="titre-tab">NbrTotalArt</th>
                <th className="titre-tab">NbrTotalStock</th>
                <th className="titre-tab">NbrTotalHors</th>
                <th className="titre-tab">Photo</th>
                <th className="titre-tab">Détails</th>
                <th className="titre-tab">imprimer </th>
                
                
               
              </tr>
            </thead>
            <tbody className="tab-body">
             
            
            {filteredData.map(((el,i)=>{ 
              var msDiff = new Date().getTime() - new Date(el.DateExp).getTime() //Future date - current date
              var days = Math.floor(msDiff / (1000 * 60 * 60 * 24));
            

switch (el.fonction) {
  case "Consommable":
    case "Equipement" :
    return(
      <tr  className={ days<5 ? 'background-red' : 'background-blue'}>
                    <td scope="row" >{el.type}</td>
                    <td>{el.Reference}</td>
                <td>{el.fonction}</td>
                <td>{el.NumSerie}</td>
                <td>{el.EtatPhy}</td> 
                <td>{el.constructeur}</td>
                <td>{el.LieuStockage}</td>      
                <td>{el.Quantite}</td>
                <td>{el.Statut}</td>
                <td>{el.DateEtalonnage}</td>
                <td>{el.DateExp}</td>
                <td>{el.NbrTotalArt}</td>
                <td>{el.NbrTotalStock}</td>
                <td>{el.NbrTotalHors}</td>
                <td><img  className="photo-article" src={el.productImage} ></img></td>
                <td><More key={i} data={el}  key={el._id}  /></td> 
                     
               
                <td>  <PrintComponents trigger={<Button color="primary">Print</Button>}
 
 >
 <Barcode  id="hh"value={el.Reference}/>
 </PrintComponents></td>
                 
                  </tr>
    );
  }
  
  
 

                  
                   
              }))}  
              
             
             
            </tbody>
          </Table>
          <div className="titre-tableau"><h1>Kits</h1></div>

          <Table responsive>
            <thead>
              <tr>
             
                <th className="titre">contenu kit</th>
                <th className="titre-tab">Reference</th>
                <th className="titre-tab">Fonction</th>
                <th className="titre-tab">Nom kit</th>
                <th className="titre-tab">code kit</th>
                <th className="titre-tab">DateEtalonnage</th>
                <th className="titre-tab">DateExp</th>
                <th className="titre-tab">LieuStockage</th>
                <th className="titre-tab">Quantite</th>
                <th className="titre-tab">Statut</th>
                <th className="titre-tab">Manuel</th>
                <th className="titre-tab">NbrTotalArt</th>
                <th className="titre-tab">NbrTotalStock</th>
                <th className="titre-tab">NbrTotalHors</th>
                <th className="titre-tab">Photo</th>
                <th className="titre-tab">Détails</th>
                <th className="titre-tab">imprimer </th>
                
                
               
              </tr>
            </thead>
            <tbody className="tab-body">
            {filteredData.map(((el,i)=>{ 
              var msDiff = new Date().getTime() - new Date(el.DateExp).getTime() //Future date - current date
              var days = Math.floor(msDiff / (1000 * 60 * 60 * 24));

switch (el.fonction) {
  case "Kit":
    return(
      <tr className={ days<5 ? 'background-red' : 'background-blue'}>
        <td>{el.contenu_kit}</td>
        <td>{el.Reference}</td>
        <td>{el.fonction}</td>
        <td>{el.nom_kit}</td>
        <td>{el.code_kit}</td>
        <td>{el.DateEtalonnage}</td>
        <td>{el.DateExp}</td>
        <td>{el.LieuStockage}</td>
        <td>{el.Quantite}</td>
        <td>{el.Statut}</td>
        <td>{el.Manuel}</td>
        <td>{el.NbrTotalArt}</td>
                <td>{el.NbrTotalStock}</td>
                <td>{el.NbrTotalHors}</td>
                <td><img  className="photo-article" src={el.productImage} ></img></td>
                <td><More key={i} data={el}  key={el._id}  /></td> 
                     
               
                <td>  <PrintComponents trigger={<Button color="primary">Print</Button>}
 
 >
 <Barcode  id="hh"value={el.Reference}/>
 </PrintComponents></td>
      
      </tr>
    )}}))}
              
              
              
              </tbody></Table>
                
            
            </div>
        )
    }
}
