import React, { Component } from 'react'
import axios from 'axios';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import '../ressources/modal.css'

export class AddUser extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
            username:"",
            password:"",
            
             isLoading: false, // variable pour l'animation du button 
             modal: false,
        }
        this.toggle = this.toggle.bind(this); // close modal after adding new client
    }
    toggle() {
        // clear state 
        this.setState(prevState => ({
          modal: !prevState.modal,
          username:"",
            password:"",
             
        }))}
    onChange = (e) => {
        this.setState({
          [e.target.name]: e.target.value,       
        });}

       
    register = () => {
        const { username,password } = this.state;
        this.setState({ isLoading: true})
        setTimeout(() => {
          this.setState(prevState => ({
            modal: !prevState.modal,
            isLoading: false,
          }));
        }, 1200)
        axios
          .post("/register", {
            username: username,
            password: password
          })
          .then(res => console.log(res))
          .catch(err => alert('something is missing or wrong'));
    }
   
    
    
    render() {
        return (
            <div>
                <button className="homeButton" onClick={this.toggle}>Add User</button>
          <Modal size='lg' isOpen={this.state.modal} toggle={this.toggle} className={this.props.className}>
          <ModalHeader toggle={this.toggle}> User</ModalHeader>
          <ModalBody>
          <div className="modalInput">
                <label className='modalLabel' >username</label>
                <input  className="inputItems" type="text" name="username" onChange={this.onChange}></input>
          </div>
          <div className="modalInput">
                <label className='modalLabel' >Password</label>
                <input className="inputItems" type="text" name="password" onChange={this.onChange}></input>
          </div>
                </ModalBody>
                <ModalFooter>
                    
    <Button 
          disabled={this.state.isLoading} color="primary" 
          onClick= {this.register}       >
        { !this.state.isLoading &&  <span> Ajouter un utilistateur</span>}
        { this.state.isLoading &&  <span><i class="fas fa-circle-notch fa-spin"></i> </span>}
    
    </Button>
    
          <Button color="secondary" onClick={this.toggle}>Annuler</Button>
          </ModalFooter>
        
                </Modal>
               
            </div>
        )
    }
}

export default AddUser

