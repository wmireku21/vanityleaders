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

class EmailSuccess extends Component {
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
                    <ModalHeader toggle={this.toggle}> Your email has been sent!  </ModalHeader>
                    <ModalBody>
                        Someone will respond to you as soon as possible. Thank you!
                    </ModalBody>
                </Modal>
            </div>
    );
  }
}

export default EmailSuccess;