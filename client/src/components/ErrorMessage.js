import React, { Component } from 'react';
import {
    Button,
    Modal,
    ModalHeader,
    ModalBody,
    Form,
    FormGroup,
    Label, 
    Input
} from 'reactstrap';

class ErrorMessage extends Component {
    state = {
        modal: false
    }

    toggle = () => {
        this.setState({
            modal: !this.state.modal
        });
    }
    render() {
        return (
            <div>
                <Modal 
                    isOpen={this.state.modal}
                    toggle={this.toggle}
                >
                    <ModalHeader toggle={this.toggle}> Oops, something isn't right!  </ModalHeader>
                    <ModalBody>
                        Make sure you have filled out all the required slots!
                    </ModalBody>
                </Modal>
            </div>
    );
  }
}

export default ErrorMessage;