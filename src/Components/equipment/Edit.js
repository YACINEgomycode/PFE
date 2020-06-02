import React, { Component } from 'react'
import axios from 'axios';
import {Redirect, Link} from 'react-router-dom'
import { Button } from 'reactstrap';
import '../App.css'

export default class Edit extends Component {
   
    constructor(props) {
        super(props);
        this.state = {
          isLoading: false, // variable pour l'animation du button 
          modal: false,
          fonction:  "",
          CodeFonction:  "",
          constructeur:  "",
          NumSerie: "",
          DateEtalonnage: "",
          DateExp: "",
          Manuel: "",
          EtatPhy:  "",
          LieuStockage:  "",
          Quantite: "",
          Statut: "",
          Equ:[],
          fun:[
              {name:"Consommable"},
              {name:"Equipement"},
              {name:"Kit"},
              
          ],
          aa:false,
          ref:"",
          NbrTotalArt :  'az',
            NbrTotalStock:'az',
            NbrTotalHors : 'az',
            Reference: '',
    };
}

getdata(){
    axios.get("/article/"+this.props.id ).then(res => this.setState({
        ...res.data
  }))}
  

  
  

// get data from data base 
componentDidMount () {
    // axios.get("/missionsList/" + this.props.id ).then(res => this.setState({
    //   ...res.data
      this.getdata();
      
    }
      
// get value of input 
onChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };
  // send modifiying data to database
onEditPress = () => {
 
  axios.put("/upart/"+this.props.id,{
    type: this.state.type,
    fonction:  this.state.fonction,
    CodeFonction:  this.state.CodeFonction,
    constructeur:  this.state.constructeur,
    NumSerie:  this.state.NumSerie,
    DateEtalonnage:  this.state.DateEtalonnage,
    DateExp:  this.state.DateExp,
    Manuel:   this.state.Manuel,
    EtatPhy:  this.state.EtatPhy,
    LieuStockage:  this.state.LieuStockage,
    Quantite:  this.state.Quantite,
    Statut:  this.state.Statut,
    NbrTotalArt :  this.state.NbrTotalArt,
    NbrTotalStock: this.state.NbrTotalStock,
    NbrTotalHors : this.state.NbrTotalHors,
    Reference: this.state.Reference,
  })
    this.setState({ isLoading: true}) // button animation
      setTimeout(() => {
        this.setState(() => ({
          isModified: true,
          isLoading: false,
        }));
      }, 1200)
  }
  
   

    
    render() {
        return (
            this.state.isModified ? <Redirect to="/missions" /> :
            <div className="editProfileContainer">
              <div className="editProfileItems">
        <h1 >Article {this.state.Reference}</h1>
                <div className='editItem'>
                  <label >Date Etalonnage</label>
                  <input
                    className="editInput" 
                    type="date"
                    name="DateEtalonnage"
                    placeholder="Nom"
                    onChange={this.onChange}
                    value={this.state.DateEtalonnage}
                  />
                  </div><br />
                  <div className="editProfileItems">
              
                <div className='editItem'>
                  <label >Date Exp</label>
                  <input

                    className="editInput" 
                    type="date"
                    name="DateExp"
                    
                    onChange={this.onChange}
                    value={this.state.DateExp}
                  />
                  </div><br />
                  
                  </div>
                
                
                  <Link  to='/Inventaire'> 
                    <Button color="primary"  style={{margin:'10px'}} onClick={()=> {this.onEditPress(); }}>
                      { !this.state.isLoading &&  <span> Modifier Article</span>}
                      { this.state.isLoading &&  <span><i class="fas fa-circle-notch fa-spin"></i> Modifier expert</span>}
                    </Button>
                    </Link>
                    <Link  to='/Inventaire'> 
                      <Button color="secondary" style={{margin:'10px'}}>Annuler</Button> 
                    </Link>
                  
              </div></div>
            
        )
    }
}
