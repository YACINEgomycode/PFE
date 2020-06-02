import React, { Component } from 'react'
import {Link} from 'react-router-dom'
import { Button, Modal, ModalHeader, ModalBody, ModalFooter,ListGroup, ListGroupItem  } from 'reactstrap';
import '../ressources/modal.css';
import Barcode from './react-barcode'
import PrintComponents from "react-print-components";

export class More extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
           
             isLoading: false, // variable pour l'animation du button 
             modal: false,
        }
        this.toggle = this.toggle.bind(this); // close modal after adding new client
    }
    
    
    toggle() {
        // clear state 
        this.setState(prevState => ({
          modal: !prevState.modal,
        
        }))}


   
 
        
       
       

        onEditPress = () => {
              
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
            <div>
                <Button color="primary" style={{width:'50px'}} onClick={() => {
    this.toggle();
           
          }}>+</Button>
          <Modal size='lg' isOpen={this.state.modal} toggle={this.toggle} className={this.props.className}>
          <ModalHeader toggle={this.toggle}> Client</ModalHeader>
          <ModalBody>
          <div className="ordreMission">
          
          <Barcode value={this.props.data.Reference}/>
       
<h2>vous pouvez seulement modifier les dates d'etallonnage et d'expiration d'etallonage</h2>
       
       
        
          </div>
                </ModalBody>
                <ModalFooter>
                    
                <Link to={`/edit/art/${this.props.data._id}`}>
            <Button className="btn-ordre" color="primary" >Modifier</Button>
                            </Link>
                            
    
          <Button color="secondary" onClick={this.toggle}>Annuler</Button>
          </ModalFooter>
        
                </Modal>
               
            </div>
        )
    }
}

export default More

