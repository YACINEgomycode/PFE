import React from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter,Input } from 'reactstrap';
import axios from 'axios';
import "./ordreMission.css"
// modal class for adding new expert 
import '../ressources/modal.css'


class ModalE extends React.Component {
  // initial state 
  constructor(props) {
    super(props);
    this.state = {
      isLoading: false, // variable pour l'animation du button 
      modal: false,
      numOrdre: "",
        NomPrenom:"",
        Qualification:"",
        dateDebut:"",
        dateFin:"",
        dureeVisite:"",
        qualificationExigees:"",
        lieuMission:"",
        client:"",
        codeclient:"",
        etendue:"",
        materiels:"",
        lieu:"",
        mobilisation:"",
        logement:"",
        demobilisation:"",
        in:100,
        Max:[],
        Min:[],
        Equ:[],
        type:'',
       
        

    }

    this.toggle = this.toggle.bind(this); // close modal after adding new expert
  }

  // toggle get state empty after adding an expert, close modal after add expert 
  toggle() {
    // clear state 
    this.setState(prevState => ({
      modal: !prevState.modal,
      numOrdre: "",
          NomPrenom:"",
          Qualification:"",
          dateDebut:"",
          dateFin:"",
          dureeVisite:"",
          qualificationExigees:"",
          lieuMission:"",
          client:"",
          codeclient:"",
          etendue:"",
          materiels:"",
          lieu:"",
          mobilisation:"",
          logement:"",
          demobilisation:"",
          affaire:"",
          num:[],
          num1:[],
          num2:[],
          
          aa:"",
          type: "",
          
          
    }));
  }
 

  // onChange get value from input
  onChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
      
    }); 
};

getall(){
  axios.get('/missionsList').then(res1=> this.setState({
    Max:res1.data
  }))
}
getclient(){
  axios.get('/clients').then(res=> this.setState({
    Min:res.data
  }))
}
getEquipments(){
  axios.get('/equipments').then(result=> this.setState({
    Equ:result.data
  }))
}


AddMission = () =>{
  if (this.state.numOrdre===""||this.state.NomPrenom===""||this.state.Qualification==="")
  alert("veuillez remplir tout les champs");
  else{
    this.setState({ isLoading: true})
    setTimeout(() => {
      this.setState(prevState => ({
        modal: !prevState.modal,
        isLoading: false,
      }));
    }, 1200)

    axios
      .post("/addd",{  // envoyer les données récupérées a la base de données au chemin /addd
        numOrdre: this.state.numOrdre,
            NomPrenom:this.state.NomPrenom,
            Qualification:this.state.Qualification,
            dateDebut:this.state.dateDebut,
            dateFin:this.state.dateFin,
            dureeVisite:this.state.dureeVisite,
            qualificationExigees:this.state.qualificationExigees,
            lieuMission:this.state.lieuMission,
            client:this.state.client,
            codeclient:this.state.codeclient,
            etendue:this.state.etendue,
            materiels:this.state.materiels,
            lieu:this.state.lieu,
            mobilisation:this.state.mobilisation,
            logement:this.state.logement,
            demobilisation:this.state.demobilisation,      
            isChooseclient:this.state.isChooseclient,    
            affaire:this.state.affaire ,

                
        })
      .then(res => axios.get("/missionsList"), 
      
      //.then(res => this.props.updateExpertList(res.data))
      )
      .catch(err => alert(err));
 } }
 componentDidMount(){
   this.getEquipments();
 }


 SelectClassequ = e => {
  
  var options = document.getElementById("exampleSelect1");
  var id= options[options.selectedIndex].id;
  var cl2= options[options.selectedIndex].value;
  this.setState({
    materiels: cl2,
  })
};

 classSelect = e => {
  var year= new Date().getFullYear();  
  var options = document.getElementById("mySelect");
  var id= options[options.selectedIndex].id;
  var cl= options[options.selectedIndex].value;
  this.setState({
    client: cl,
  })
};
add(){
  var year= new Date().getFullYear();
  
  const result = this.state.Max.filter(word => word.affaire.includes(this.state.affaire))
  
  const resultat = result.map(el=>el.client)
  var all= resultat.map(el  => el.includes(abc))
  var options = document.getElementById("mySelect");

  var id= options[options.selectedIndex].id;
  var abc= options[options.selectedIndex].value.toString();
  var all= resultat.filter(el  => el.includes(abc)).length

  var p=all+1
  this.setState({
    num: result,
    num1:resultat,
    num2:all,
    numOrdre:id+"-"+year+"-"+this.state.affaire+"-"+p
  })

}

  render() {
   
    return (
      <div>
        <button className="homeButton"  onClick={() => {
    this.toggle();
            this.getclient();
            this.getall();
            this.getEquipments();
          }}>Créer Ordre de Mission</button>
        <Modal size='lg' isOpen={this.state.modal} toggle={this.toggle} className={this.props.className}>
          <ModalHeader toggle={this.toggle}><h2>Ordre de Mission</h2></ModalHeader>
          <ModalBody>
            
            <div className="ordreMission">

            
    <label className="modalLabel">Numero d'ordre</label><h1> {this.state.numOrdre}</h1>
    
            <h2>Inspecteur</h2>
               <label className="modalLabel">Nom et Prenom</label>
               <input className="inputItems"  name="NomPrenom"type="text"   onChange={this.onChange}/>
               <label className="modalLabel">Qualification</label>
               <input className="inputItems" name="Qualification"type="text"   onChange={this.onChange}/>
            <h2>Détails de la mission</h2>
               <label className="modalLabel">Date Debut</label>
               <input className="inputItems" name="dateDebut"type="date"   onChange={this.onChange}/>
               <label className="modalLabel">Date Fin</label>
               <input className="inputItems" name="dateFin"type="date"   onChange={this.onChange}/>
               <label className="modalLabel">Durée de la visite</label>
               <input className="inputItems" name="dureeVisite"type="text"   onChange={this.onChange}/>
               {/* <label className="modalLabel">Qualifications Exigées</label>
               <input className="inputItems" name="qualificationExigees"type="text"   onChange={this.onChange}/> */}
               <h2>Détails du Projet</h2>
               <label className="modalLabel">Lieu de la mission</label>
               <input className="inputItems" name="lieuMission"type="text"   onChange={this.onChange}/>
               <label className="modalLabel">Numéro affaire</label>
               <input className="inputItems" name="affaire"type="number"   onChange={this.onChange}/>
               <label className="modalLabel">Client</label>
               <form name="form1">
               <select id="mySelect"onChange={()=>{this.classSelect();
                this.add()}}>{"  "}
                       <option hidden selected>Choisir un client </option>
                       {this.state.Min.map((x,y) => 
                       <option onchange={this.onChange} name= "aa"key={y} id={x.clientCode} value={x.clientName}>{x.clientName}</option>)}
               </select>
                </form>
               

               <label className="modalLabel">Etendue</label>
               <input className="inputItems" name="etendue"type="text"   onChange={this.onChange} />
            <h2>Logistiques</h2>
            
            <label for="exampleEmail" sm={2}>Materiels recommandés</label>
                
                <Input  type="select" className="inputItems" name="select" id="exampleSelect1"   onChange={()=>{this.SelectClassequ();}} >{"  "}
                        <option hidden selected>Choisir un Type </option>
                        {this.state.Equ.map((x,y) => 
                        <option  id={x.equipmentCode} value={x.equipmentName}>{x.equipmentName}</option>)}
                </Input>
          
               
                
               
               
               <label className="modalLabel">lieu</label>
               <input className="inputItems" name="lieu"type="text"   onChange={this.onChange}/>
               <label className="modalLabel">Mobilisation</label>
               <input className="inputItems" name="mobilisation"type="text"   onChange={this.onChange}/>
               <label className="modalLabel">logement</label>
               <input className="inputItems" name="logement"type="text"   onChange={this.onChange}/>
               {/* <label className="modalLabel">Démobilisation</label>
               <input className="inputItems" name="demobilisation"type="text"   onChange={this.onChange}/> */}

                
            
            

            
            </div>
            
         
            
          </ModalBody>
          <ModalFooter>
    <Button 
          disabled={this.state.isLoading} color="primary" 
          onClick={()=> {this.AddMission(); }}
          >
        { !this.state.isLoading &&  <span> Ajouter un Ordre</span>}
        { this.state.isLoading &&  <span><i class="fas fa-circle-notch fa-spin"></i> Ajouter un expert</span>}
    
    </Button>
            <Button color="secondary" onClick={this.toggle}>Annuler</Button>
          </ModalFooter>
        </Modal>
      </div>
    );
  }
}

export default ModalE;