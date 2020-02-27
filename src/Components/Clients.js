import React, { Component } from 'react'
import axios from 'axios';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import './modal.css'

export class Clients extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
            clientCode:"",
            clientName:"",
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
          clientCode:"",
            clientName:"",
             tab:[],
        }))}
    onChange = (e) => {
        this.setState({
          [e.target.name]: e.target.value,       
        });}

       
    addclient = () => {
        const { clientCode,clientName } = this.state;
        this.setState({ isLoading: true})
        setTimeout(() => {
          this.setState(prevState => ({
            modal: !prevState.modal,
            isLoading: false,
          }));
        }, 1200)
        axios
        .post("/addClient",{
            clientName:clientName,
            clientCode:clientCode,
        })
        .then(res => axios.get("/clients"), )
      .catch(err => alert(err));
    }
   
    
    
    render() {
        return (
            <div>
                <button className="homeButton" onClick={this.toggle}>Ajouter client</button>
          <Modal size='lg' isOpen={this.state.modal} toggle={this.toggle} className={this.props.className}>
          <ModalHeader toggle={this.toggle}> Client</ModalHeader>
          <ModalBody>
          <div className="modalInput">
                <label className='modalLabel' >Nom Client</label>
                <input  className="inputItems" type="text" name="clientName" onChange={this.onChange}></input>
          </div>
          <div className="modalInput">
                <label className='modalLabel' >Code Client</label>
                <input className="inputItems" type="text" name="clientCode" onChange={this.onChange}></input>
          </div>
                </ModalBody>
                <ModalFooter>
                    
    <Button 
          disabled={this.state.isLoading} color="primary" 
          onClick= {()=> {this.addclient(); }}
          >
        { !this.state.isLoading &&  <span> Ajouter un Client</span>}
        { this.state.isLoading &&  <span><i class="fas fa-circle-notch fa-spin"></i> Ajouter un expert</span>}
    
    </Button>
    
          <Button color="secondary" onClick={this.toggle}>Annuler</Button>
          </ModalFooter>
        
                </Modal>
               
            </div>
        )
    }
}

export default Clients

