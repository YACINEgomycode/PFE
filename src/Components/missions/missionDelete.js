import React from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';

import '../ressources/modal.css'


// ModalDeleteExpert class to delete an expert profile
class MissionDelete extends React.Component {
  // initial state 
  constructor(props) {
    super(props);
    this.state = {
      modal: false,
    };

    this.toggle = this.toggle.bind(this);
  }
// toggle function that close modal on button click
  toggle() {
    this.setState(prevState => ({
      modal: !prevState.modal,
    }));
  }
  render() {
    return (
      <div>
        <Button color="danger" onClick={this.toggle}>Supprimer mission</Button> {/*button tittle */}
        
        <Modal isOpen={this.state.modal} toggle={this.toggle} className={this.props.className}>
          <ModalHeader toggle={this.toggle}>Attention !!!</ModalHeader>
          <ModalBody>
            
            <div>
                <h5 style={{color:'red'}}>voulez vous vraiment supprimer cet ordre ?</h5>
            </div>
         
            
          </ModalBody>
          <ModalFooter>
            <Button color="danger" onClick={()=> {this.props.onDelete(this.props.id._id)}}>Supprimer mission</Button>
            <Button color="secondary" onClick={this.toggle}>Annuler</Button>
          </ModalFooter>
        </Modal>
      </div>
    );
  }
}

export default MissionDelete;