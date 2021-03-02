import React, { Component } from 'react';
import { 
    
    Button, 
    Form, 
    FormGroup, 
    Label, 
    Input,
    Container 
} 
from 'reactstrap';
import '../styles/Contact.css';
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


class Contact extends Component {
    constructor(props) {
        super(props); 
        
        this.state = {
            name: '',
            email: '',
            message: ''
        }

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange = e => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    handleSubmit = e => {
        e.preventDefault();
        const {name, email, message} = this.state;

        axios.post('/api/form', {
            name, 
            email, 
            message
        }).then(toast.success("Thank you for the message. I will be responding as soon as possible"))
        .catch(err => console.log(err));

        setTimeout(() => this.setState({
            name: '',
            email: '',
            message: ''
        }), 5500);
    }
   
    render() {
        return (
        
            <div>
                <div className="contact-background">
                    <ToastContainer position="top-center"/>
                    <Container className="contact">
                    <h1>Contact</h1>
                    <p> Vanity wishes to collaborate with anyone that is willing to make the night one to remember!
                    If there are any inquiries or you have any questions, please feel free to contact us by filling out the following:</p>
                            <Form onSubmit={this.handleSubmit.bind(this)} method="POST">
                                <FormGroup for="email">
                                    <Label><b>Name</b></Label>
                                    <Input type="text" name="name" id="contact-name" placeholder="Full Name" value={this.state.name} onChange={this.handleChange} pattern="^([A-Za-z]+[,.]?[ ]?|[A-Za-z]+['-]?)+$" title="Please enter a valid name" required/>
                                </FormGroup>
                                <FormGroup>
                                    <Label><b>Email</b></Label>
                                    <Input type="email" name="email" id="contact-email" placeholder="Email" value={this.state.email} onChange={this.handleChange} pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{3,}$" title="Please enter a valid email" required/>
                                </FormGroup>
                                <FormGroup>
                                    <Label><b>Message</b></Label>
                                    <Input type="textarea" name="message" id="contact-message" placeholder="Type your message here" value={this.state.message} onChange={this.handleChange} required/>
                                </FormGroup>
                                <Button> Send Message</Button>
                            </Form>
                    </Container>
                </div>
            </div>
    );
  }
}

export default Contact;