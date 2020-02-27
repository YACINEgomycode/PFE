import React from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';

import './modal.css'


// ModalDeleteExpert class to delete an expert profile
class ModalDeleteExpert extends React.Component {
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
        <Button color="danger" onClick={this.toggle}>Supprimer expert</Button> {/*button tittle */}
        
        <Modal isOpen={this.state.modal} toggle={this.toggle} className={this.props.className}>
          <ModalHeader toggle={this.toggle}>Attention !!!</ModalHeader>
          <ModalBody>
            
            <div>
                <h5 style={{color:'red'}}>voulez vous vraiment supprimer cet expert ?</h5>
            </div>
         
            
          </ModalBody>
          <ModalFooter>
            <Button color="danger" onClick={()=> {this.props.onPressDelete(this.props.id._id); this.toggle()}}>Supprimer expert</Button>
            <Button color="secondary" onClick={this.toggle}>Annuler</Button>
          </ModalFooter>
        </Modal>
      </div>
    );
  }
}

export default ModalDeleteExpert;