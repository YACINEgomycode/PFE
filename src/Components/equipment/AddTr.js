import React, { Component } from 'react'
import axios from 'axios';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter, Form, FormGroup, Label, Input, FormText,Col } from 'reactstrap';
import '../ressources/modal.css'
import { object } from 'prop-types';

export class AddTr extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
            type_tr : "",
            reference_falcon :"",
            type_equi : "",
            num_mission : "",
            date_tr : "",
            affectation : "",
            etat_equi : "",
            commentaire : "",
            experts:[],
          missions:[],
          equipment:[],
          article:[],
          type:[],
          aff:"",
          identif:"",
          identif_falcon:"",
          tab:[],
          x:"",
         
    
             isLoading: false, // variable pour l'animation du button 
             modal: false,
        }
        this.toggle = this.toggle.bind(this); // close modal after adding new client
    }
    toggle() {
        // clear state 
        this.setState(prevState => ({
          modal: !prevState.modal,
          type_tr : "",
          reference_falcon :"",
          type_equi : "",
          num_mission : "",
          date_tr : "",
          affectation : "",
          etat_equi : "",
          commentaire : "",
          experts:[],
          missions:[],
          equipment:[],
          article:[],
          Quantite:[],
         
        }))}
    onChange = (e) => {
        this.setState({
          [e.target.name]: e.target.value,       
        });}

       
       
        getexpert(){
          axios
          .get("/expertsList")
          .then(res1 => this.setState({
              experts : res1.data    // get data from database named FalconData and put all data in variable called profile
          }))
          .catch(err =>console.log("err", err))
      }
      getart(){
        axios
        .get("/articles")
        .then(res4 => this.setState({
            article : res4.data    // get data from database named FalconData and put all data in variable called profile
        }))
        .catch(err =>console.log("err", err))
    }
      getequip(){
        axios
        .get("/equipments")
        .then(res3 => this.setState({
            equipement: res3.data    // get data from database named FalconData and put all data in variable called profile
        }))
        .catch(err =>console.log("err", err))
    }

      getmissions(){
          axios
          .get("/missionsList")
          .then(res2 => this.setState({
              missions : res2.data    // get data from database named FalconData and put all data in variable called profile
          }))
          .catch(err =>console.log("err", err))
      }
   
        classSelectfun = e => {
  
            var options = document.getElementById("exampleSelect1");
            var id= options[options.selectedIndex].id;
            var cl= options[options.selectedIndex].value;
            
            this.setState({
              type_tr: cl,
            })
           
         
          };
          classSelectref= e => {
  
            var options = document.getElementById("exampleSelect2");
            var id= options[options.selectedIndex].id;
            var idd= options[options.selectedIndex].className;
            var cl1= options[options.selectedIndex].value;
           
           
            this.setState({
              reference_falcon: cl1,
              type_equi : idd,
              identif:id
              
              
            })
          };
          classSelectref2= e => {
  
            var options = document.getElementById("exampleSelect3");
            var id= options[options.selectedIndex].id;
            var idd= options[options.selectedIndex].className;
            var cl1= options[options.selectedIndex].value;
           
           
            this.setState({
              num_mission : cl1,
              affectation:idd,
              identif_falcon:id
              
              
            })
          }
          classSelectEtat = e => {
  
            var options = document.getElementById("exampleSelect5");
            var id= options[options.selectedIndex].id;
            var cl= options[options.selectedIndex].value;
            
            this.setState({
              etat_equi: cl,
            })
           
         
          };
        


          AddTr = () => {
            const {type_tr,reference_falcon,type_equi,num_mission,date_tr,affectation,etat_equi,commentaire} = this.state;
            this.setState({ isLoading: true})
            setTimeout(() => {
              this.setState(prevState => ({
                modal: !prevState.modal,
                isLoading: false,
              }));
            }, 1200)
            axios
            .post("/addTransaction",{
                type_tr :  type_tr ,
          reference_falcon :reference_falcon,
          type_equi : type_equi,
          num_mission : num_mission,
          date_tr : date_tr ,
          affectation : affectation,
          etat_equi : etat_equi,
          commentaire : commentaire,
            })
            .then(res => axios.get("/transaction"), )
          .catch(err => alert(err));
        }
    


update=()=>{
 
    axios.get("/article/"+this.state.identif).then(res5 => this.setState({
      tab:res5.data  }))

    

// const a=this.state.Quantite

  axios.put("/upart/"+this.state.identif,{
  Quantite :this.state.tab+10,  
  constructeur:"no",
  LieuStockage:"yes",


  })
}


    render() {
        return (
            <div>
                <button className="homeButton" onClick={()=>{this.toggle();this.getmissions();
                  this.getexpert();this.getequip();this.getart()}}>Ajouter Transaction</button>
          <Modal size='lg' isOpen={this.state.modal} toggle={this.toggle} className={this.props.className}>
          <ModalHeader toggle={this.toggle}> Transaction</ModalHeader>
          <ModalBody>
          <FormGroup row>

<Label for="exampleEmail" sm={2}>Type transaction</Label>

<Col sm={10}>
<Input type="select" name="select1" id="exampleSelect1" onChange={()=>{this.classSelectfun()}}>{"  "}
        <option hidden selected>Choisir un type</option>
        <option>sortie-mission</option>
        <option>sortie-prêt</option>
        <option>sortie-étalonnage</option>
        <option>entrée-mission </option>
        <option>entrée-prêt</option>
        <option>entrée-étalonnage</option>
</Input>
</Col>
</FormGroup>


<FormGroup row>

<Label for="exampleEmail" sm={2}>reference Falcon</Label>
<Col sm={10}>
<Input type="select" name="select2" id="exampleSelect2" onChange={()=>{this.classSelectref()}}>{"  "}
        <option hidden selected>Choisir une Reference </option>
        {this.state.article.map((h) => 
                       <option   id={h._id} className={h.type} value={h.Reference}>{h.Reference}-({h.type})</option>
                       )}
      
</Input>
</Col>
</FormGroup>
<FormGroup row> 
                <Label for="exampleEmail" sm={2}>type d'equipement</Label>
         <Col sm={10}>
           <Input  className="inputItems"  name="type_equi"type="text"  value={this.state.type_equi} onChange={this.onChange} />
         </Col>
       </FormGroup> 


<FormGroup row>

<Label for="exampleEmail" sm={2}>Numero mission</Label>
<Col sm={10}>
<Input type="select" name="select3" id="exampleSelect3" onChange={()=>{this.classSelectref2()}}>{"  "}
        <option hidden selected>Choisir une Reference </option>
        {this.state.missions.map((x) => 
                       <option className={x.NomPrenom} id={x._id} value={x.numOrdre}>{x.numOrdre}</option>
                       )}
    
</Input>
</Col>
</FormGroup>
<FormGroup row> 
                <Label for="exampleEmail" sm={2}>Affectation</Label>
         <Col sm={10}>
           <Input  className="inputItems"  name="affectation"type="text"  value={this.state.affectation} onChange={this.onChange} />
         </Col>
       </FormGroup>  


<FormGroup row> 
                <Label for="exampleEmail" sm={2}>Date Transaction</Label>
         <Col sm={10}>
           <Input  className="inputItems"  name="date_tr"type="date"   onChange={this.onChange} />
         </Col>
       </FormGroup>              

<FormGroup row> 
                <Label for="exampleEmail" sm={2}>Etat Equipement</Label>
                <Col sm={10}>
<Input type="select" name="select5" id="exampleSelect5" onChange={()=>{this.classSelectEtat()}}>{"  "}
        <option hidden selected>Choisir un Etat</option>
        <option>Bon etat</option>
        <option>En panne</option>
</Input>
</Col>
       </FormGroup>           
<FormGroup row> 
                <Label for="exampleEmail" sm={2}>commentaire</Label>
         <Col sm={10}>
           <Input  className="inputItems"  name="commentaire"type="text"   onChange={this.onChange} />
         </Col>
       </FormGroup>          
               
                </ModalBody>
                <ModalFooter>
                    
    <Button 
          disabled={this.state.isLoading} color="primary" 
          onClick= {()=> {this.AddTr();this.update()}}
          >
        { !this.state.isLoading &&  <span> Ajouter une Transaction</span>}
        { this.state.isLoading &&  <span><i className="fas fa-circle-notch fa-spin"></i> Ajouter un equipment</span>}
    
    </Button>
    
          <Button color="secondary" onClick={this.toggle}>Annuler</Button>
          </ModalFooter>
        
                </Modal>
               
            </div>
        )
    }
}

export default AddTr

