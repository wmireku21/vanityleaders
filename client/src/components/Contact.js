import React, { Component } from 'react';
import { 
    Col, 
    Row, 
    Button, 
    Form, 
    FormGroup, 
    Label, 
    Input,
    Container 
} 
from 'reactstrap';
import '../styles/Contact.css';

class Contact extends Component {
    constructor() {
        super()

        this.state = {
            name: '',
            email: '',
            message: ''
        }
    }
    
    render() {
        return (
        
            <div>
                <div className="contact-background">
                    <Container className="contact">
                    <h1>Contact</h1>
                    <p> Vanity wishes to collaborate with anyone that is willing to make the night one to remember!
                    If there are any inquiries or you have any questions, please feel free to contact us by filling out the following:</p>
                            <Form>
                                <FormGroup for="email">
                                    <Label><b>Name</b></Label>
                                    <Input type="text" name="name" id="contact-name" placeholder="Full Name" required/>
                                </FormGroup>
                                <FormGroup>
                                    <Label><b>Email</b></Label>
                                    <Input type="email" name="email" id="contact-email" placeholder="Email" required/>
                                </FormGroup>
                                <FormGroup>
                                    <Label><b>Message</b></Label>
                                    <Input type="textarea" name="text" id="contact-message" placeholder="Type your message here" required/>
                                </FormGroup>
                                <Button> Send Message</Button>
                            </Form>
                    </Container>
                    {/*
                    <div className="icons">
                        <i className="fas fa-phone"></i>
                        <i className="fas fa-envelope"></i>
                        <i className="fab fa-facebook-f"></i>
                        <i className="fab fa-instagram"></i>            
                        <i className="fab fa-snapchat-ghost"></i>
                    </div>
                    */}
                </div>
               
            </div>
    );
  }
}

export default Contact;