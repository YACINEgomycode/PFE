import React, { Component } from 'react'
import axios from 'axios';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import '../ressources/modal.css'

export class AddEquipment extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
            equipmentCode:"",
            equipmentName:"",
             tab:[],
             isLoading: false, // variable pour l'animation du button 
             modal: false,
        }
        this.toggle = this.toggle.bind(this); // close modal after adding new client
    }
    toggle() {
        // clear state 
        this.setState(prevState => ({
          modal: !prevState.modal,
          equipmentCode:"",
            equipmentName:"",
             tab:[],
        }))}
    onChange = (e) => {
        this.setState({
          [e.target.name]: e.target.value,       
        });}

       
    addEquipment = () => {
        const { equipmentCode,equipmentName } = this.state;
        this.setState({ isLoading: true})
        setTimeout(() => {
          this.setState(prevState => ({
            modal: !prevState.modal,
            isLoading: false,
          }));
        }, 1200)
        axios
        .post("/addEquipment",{
            equipmentName:equipmentName,
            equipmentCode:equipmentCode,
        })
        .then(res => axios.get("/equipments"), )
      .catch(err => alert(err));
    }
   
    
    
    render() {
        return (
            <div>
                <button className="homeButton" onClick={this.toggle}>Ajouter Equipment</button>
          <Modal size='lg' isOpen={this.state.modal} toggle={this.toggle} className={this.props.className}>
          <ModalHeader toggle={this.toggle}> Client</ModalHeader>
          <ModalBody>
          <div className="modalInput">
                <label className='modalLabel' >Nom fonctionnalité</label>
                <input  className="inputItems" type="text" name="equipmentName" onChange={this.onChange}></input>
          </div>
          <div className="modalInput">
                <label className='modalLabel' >Code fonctionnalité</label>
                <input className="inputItems" type="text" name="equipmentCode" onChange={this.onChange}></input>
          </div>
                </ModalBody>
                <ModalFooter>
                    
    <Button 
          disabled={this.state.isLoading} color="primary" 
          onClick= {()=> {this.addEquipment(); }}
          >
        { !this.state.isLoading &&  <span> Ajouter une fonctionnalité</span>}
        { this.state.isLoading &&  <span><i className="fas fa-circle-notch fa-spin"></i> Ajouter un equipment</span>}
    
    </Button>
    
          <Button color="secondary" onClick={this.toggle}>Annuler</Button>
          </ModalFooter>
        
                </Modal>
               
            </div>
        )
    }
}

export default AddEquipment

