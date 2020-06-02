import React, { Component } from 'react'
import axios from 'axios';
import {Redirect, Link} from 'react-router-dom'
import { Button } from 'reactstrap';
import '../App.css'

export default class Editmission extends Component {
   
    constructor(props) {
        super(props);
        this.state = {
          isLoading: false, // variable pour l'animation du button 
          modal: false,
          numOrdre: "",
          Inspecteur:[{
            NomPrenom:"",
            Qualification:""
        },],
        detailsMission:[{
            dateDebut:"",
            dateFin:"",
            dureeVisite:"",
            qualificationExigees:"",
        },],
        detailsProjet:[{
            lieuMission:"",
            client:""
        },],
        etendueMission:[{
            etendue:"",
        },],
        logistique:[{
            materiels:"",
            lieu:"",
            mobilisation:"",
            logement:"",
            demobilisation:"",
    
        },],
        in:"",
        Max:[],
        Min:[]
    };
}

getdata(){
  axios.get("/missionsList/" + this.props.id ).then(res => this.setState({
      ...res.data
  }))}
  getdataa(){
    axios.get('/clients').then(resc => this.setState({
      Min:resc.data
    }))

  }
  getmax(){
    axios.get('/missionsList').then(rescc => this.setState({
      Max:rescc.data
    }))

  }

// get data from data base 
componentDidMount () {
    // axios.get("/missionsList/" + this.props.id ).then(res => this.setState({
    //   ...res.data
      this.getdata();
      this.getdataa();
      this.getmax();
    }
      
// get value of input 
onChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };
  // send modifiying data to database
onEditPress = () => {
  var options = document.getElementById("mySelect");
  var year= new Date().getFullYear();
  var id= options[options.selectedIndex].id;
  var cl= options[options.selectedIndex].value;
  var bb=this.state.Max.length+1;
    axios.put("/missionsList/" + this.props.id,{
        numOrdre: id+"-"+year+"-"+bb,
        NomPrenom:this.state.NomPrenom,
        Qualification:this.state.Qualification,
        dateDebut:this.state.dateDebut,
        dateFin:this.state.dateFin,
        dureeVisite:this.state.dureeVisite,
        qualificationExigees:this.state.qualificationExigees,
        lieuMission:this.state.lieuMission,
        client:cl,
        etendue:this.state.etendue,
        materiels:this.state.materiels,
        lieu:this.state.lieu,
        mobilisation:this.state.mobilisation,
        logement:this.state.logement,
        demobilisation:this.state.demobilisation,
        in:this.state.in
    })
    this.setState({ isLoading: true}) // button animation
      setTimeout(() => {
        this.setState(() => ({
          isModified: true,
          isLoading: false,
        }));
      }, 1200)
  }
  // classSelect = e => {
  //   var year= new Date().getFullYear();
  //   if (e.target.value === 'client1') {
  //     this.setState({
  //       client: "client1",
  //       numOrdre:"001"+"-"+year+"-"+this.state.in,
  //       [e.target.name]: e.target.value,
  //     });
  //   } else if (e.target.value === 'client2')
  //     this.setState({
  //       client: "client2",
  //       numOrdre:"001"+"-"+year+"-"+this.state.in,
  //       [e.target.name]: e.target.value
  //     });
  // };
   

    
    render() {
        return (
            this.state.isModified ? <Redirect to="/missions" /> :
            <div className="editProfileContainer">
              <div className="editProfileItems">
              <h1 >Ordre de mission</h1>
                <div className='editItem'>
                  <label >Numéro d'ordre:</label>
                  <input
                    className="editInput" 
                    type="text"
                    name="numOrdre"
                    placeholder="Nom"
                    onChange={this.onChange}
                    value={this.state.numOrdre}
                  />
                  </div><br />
                  <h1 >Inspecteur</h1>
                  <div className='editItem'>
                  <label style={{paddingRight:'10px'}}>Nom inspecteur:</label>
                  <input
                    className="editInput" 
                    type="text"
                    name="NomPrenom"
                    placeholder="Prenom"
                    onChange={this.onChange}
                    value={this.state.NomPrenom}
                  /></div> <br />
                  <div className='editItem'>
                  <label >Qualification:</label>
                  <input
                    className="editInput" 
                    type="text"
                    name="Qualification"
                    placeholder="Nom"
                    onChange={this.onChange}
                    value={this.state.Qualification}
                  />
                  </div><br />
                  <h1 >Détails de la mission</h1>
                  <div className='editItem'>
                  <label >Date debut:</label>
                  <input
                    className="editInput" 
                    type="text"
                    name="dateDebut"
                    onChange={this.onChange}
                    value={this.state.dateDebut}
                  />
                  </div><br />
                  <div className='editItem'>
                  <label >Date fin:</label>
                  <input
                    className="editInput" 
                    type="text"
                    name="dateFin"
                    onChange={this.onChange}
                    value={this.state.dateFin}
                  />
                  </div><br />
                  <div className='editItem'>
                  <label >Durée visite:</label>
                  <input
                    className="editInput" 
                    type="text"
                    name="dureeVisite"
                    onChange={this.onChange}
                    value={this.state.dureeVisite}
                  />
                  </div><br />
                 
                  <h1 >Détails du projet</h1>
                  <div className='editItem'>
                  <label >Lieu mission:</label>
                  <input
                    className="editInput" 
                    type="text"
                    name="lieuMission"
                    onChange={this.onChange}
                    value={this.state.lieuMission}
                  />
                  </div><br />
                  <div className='editItem'>
                  <div className="modalInput">
                <label >Client:</label>
                
                <select id="mySelect"onChange={this.classSelect}><option hidden selected>Choisir un client </option>{this.state.Min.map((x,y) => 
               
               <option key={y} id={x.clientCode} value={x.clientName}>{x.clientName}</option>)}</select>
                    
                    
                </div>
                  </div><br />
                  <h1 >Etendue d'inspection</h1>
                  <div className='editItem'>
                  <label >Etendue:</label>
                  <input
                    className="editInput" 
                    type="text"
                    name="etendue"
                    onChange={this.onChange}
                    value={this.state.etendue}
                  />
                  </div><br />
                  <h1 >Logistique</h1>
                  <div className='editItem'>
                  <label >Materiels:</label>
                  <input
                    className="editInput" 
                    type="text"
                    name="materiels"
                    onChange={this.onChange}
                    value={this.state.materiels}
                  />
                  </div><br />
                  <div className='editItem'>
                  <label >Lieu:</label>
                  <input
                    className="editInput" 
                    type="text"
                    name="lieu"
                    onChange={this.onChange}
                    value={this.state.lieu}
                  />
                  </div><br />
                  <div className='editItem'>
                  <label >Mobilistaion:</label>
                  <input
                    className="editInput" 
                    type="text"
                    name="mobilisation"
                    onChange={this.onChange}
                    value={this.state.mobilisation}
                  />
                  </div><br />
                  <div className='editItem'>
                  <label >Logement:</label>
                  <input
                    className="editInput" 
                    type="text"
                    name="logement"
                    onChange={this.onChange}
                    value={this.state.logement}
                  />
                  </div><br />
                
                  </div>
      
                    <Button color="primary"  style={{margin:'10px'}} onClick={()=> {this.onEditPress(); }}>
                      { !this.state.isLoading &&  <span> Modifier Mission</span>}
                      { this.state.isLoading &&  <span><i class="fas fa-circle-notch fa-spin"></i> Modifier expert</span>}
                    </Button>
                    <Link  to='/missions'> 
                      <Button color="secondary" style={{margin:'10px'}}>Annuler</Button> 
                    </Link>
                  
              </div>
            
        )
    }
}
