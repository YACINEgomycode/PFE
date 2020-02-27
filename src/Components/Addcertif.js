import React, { Component } from 'react'
import axios from 'axios';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import './modal.css'

export class Addcertif extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
           cerificats:"",
           
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
          value:"",
           
             tab:[],
        }))}
    onChange = (e) => {
        this.setState({
          [e.target.name]: e.target.value,       
        });}

       
    addcertif = () => {
        const {value } = this.state;
        let values = value.toUpperCase();
        this.setState({ isLoading: true})
        setTimeout(() => {
          this.setState(prevState => ({
            modal: !prevState.modal,
            isLoading: false,
          }));
        }, 1200)
        axios
        .post("/addCertif",{
            value : values,
        })
        .then(res => axios.get("/certifs"), )
      .catch(err => alert(err));
    }
   
    
    
    render() {
        return (
            <div>
                <button className="homeButton" onClick={this.toggle}>Ajouter certificat</button>
          <Modal size='lg' isOpen={this.state.modal} toggle={this.toggle} className={this.props.className}>
          <ModalHeader toggle={this.toggle}>Certificats</ModalHeader>
          <ModalBody>
          <div className="modalInput">
                <label className='modalLabel' >certificat</label>
                <input  className="inputItems" type="text" name="value" onChange={this.onChange}></input>
          </div>
         
                </ModalBody>
                <ModalFooter>
                    
    <Button 
          disabled={this.state.isLoading} color="primary" 
          onClick= {()=> {this.addcertif(); }}
          >
        { !this.state.isLoading &&  <span> Ajouter une certificat</span>}
        { this.state.isLoading &&  <span><i class="fas fa-circle-notch fa-spin"></i> Ajouter une certificat</span>}
    
    </Button>
    
          <Button color="secondary" onClick={this.toggle}>Annuler</Button>
          </ModalFooter>
        
                </Modal>
               
            </div>
        )
    }
}

export default Addcertif

