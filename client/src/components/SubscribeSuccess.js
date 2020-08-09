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

class SubscribeSuccess extends Component {
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
                    <ModalHeader toggle={this.toggle}> Congrats, you've been added to the database! </ModalHeader>
                    <ModalBody>
                        We will send you an email or text regarding any news concerning Vanity Leaders so be on the look out!
                    </ModalBody>
                </Modal>
            </div>
        );
    }
}

export default SubscribeSuccess;