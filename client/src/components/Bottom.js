import React, { Component } from "react";
import '../styles/Bottom.css';
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Button, UncontrolledPopover, PopoverHeader, PopoverBody } from 'reactstrap';

//const notify = (message) => toast.success(message);

class Bottom extends Component {

    constructor(props) {
        super(props); 
        
        this.state = {
            name: '',
            email: '',
            number: '',
            toast: false
        }

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange = e => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }
    
    nameValidation = (fieldValue) => {
        if (fieldValue.trim() === '') {
            return `Your name is required`;
        }

        if (/[^a-zA-Z -]/.test(fieldValue)) {
            return 'Invalid characters. Please try again';
        }

        if (fieldValue.trim().length < 3) {
            return `Your name needs to be atleast 3 characters`;
        }

        return null;
    }

    emailValidation = email => {
        if (/^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/
        .test(email,)) {
            return null;
        }

        if (email.trim() === '') {
            return 'Email is required';
        }

        return 'Please enter a valid email';
    }

    numberValidation = number => {
        if (number.trim().length > 0 && number.trim().length < 10) {
            return 'Please enter a valid phone number';
        }

        return null;
    }


    handleSubmit = e => {

        e.preventDefault();
        let newContact = JSON.stringify({
            name: this.state.name,
            email: this.state.email,
            number: this.state.number
        });
        
        this.nameValidation(this.state.name);
        this.emailValidation(this.state.email);
        this.numberValidation(this.state.number);
                
        
        axios.post('/api/items', newContact, {headers:{"Content-Type" : "application/json"}})
             .then(res => {
                 //res => console.log(res.data)
                 toast.success("You've been added to the subscription list")
             })
             .catch(
                err => console.log(err)
            );
            
            setTimeout(() => this.setState({
                name: '',
                email: '',
                number: '',
                error: ''
            }), 5500);  
        
    }

    toggle = () => {
        this.setState({
            toast: !this.state.modal
        });
    }

    render() {
        return (
            <div className="footer">
                <ToastContainer position="top-center"/>
                <div className="mt-20">
                    <br></br>
                </div>
                <div className="container bottom-page">
                    <div className="row">
                      
                        <div className="part col">
                           <h4>Get In Touch</h4>
                           <p>
                           <i className="fas fa-phone"></i>{' '}<a style={{color: 'black'}} href="tel:3127743151">(312) 774-3151</a><br></br>
                           <i className="fas fa-envelope"></i>{' '}<a style={{color: 'black'}} href="mailto:vanityleaders@gmail.com">vanityleaders@gmail.com</a><br></br>
                           </p>
                           <a href="https://www.facebook.com/Vanity-Leaders-104289611177277/?__tn__=%2Cd%2CP-R&eid=ARDX3A1cL92_I3pStCE4lcCJ3EHTQh6okF3NkDSmh_U-yinUq3x8KWDP4WnzYx1rVQtpAxUZh_22sPtC" target="_blank" rel="noopener noreferrer"><i class="ico fab fa-facebook-f"></i></a>
                            <a href="https://www.instagram.com/vanityleaders/" target="_blank" rel="noopener noreferrer"><i className="ico fab fa-instagram" rel="noopener noreferrer"></i></a>
                            <i style={{cursor: 'pointer'}} id="UncontrolledPopover" className="ico fab fa-snapchat-ghost"></i>      
                            <UncontrolledPopover placement="bottom" target="UncontrolledPopover">
                                <PopoverHeader>Snapchat</PopoverHeader>
                                <PopoverBody>Follow VanityLeaders on Snapchat @vanityleaders</PopoverBody>
                            </UncontrolledPopover>
                            
                        </div>
                        <div className="part col-6" >
                            <h4> Subscribe to receive our latest updates</h4>
                            <form onSubmit={this.handleSubmit} method="POST">
                                <div class="form-group">
                                    <input
                                    onChange={this.handleChange}
                                    value={this.state.name}
                                    type="text"
                                    name="name"
                                    id="full-name"
                                    class="form-control"
                                    placeholder="Full Name"
                                    pattern="^([A-Za-z]+[,.]?[ ]?|[A-Za-z]+['-]?)+$"
                                    title="Please enter a valid name"
                                    required
                                    />
                                </div>
                                <div class="form-group">
                                    <input
                                    onChange={this.handleChange}
                                    value={this.state.email}
                                    type="email"
                                    name="email"
                                    id="email"
                                    class="form-control"
                                    placeholder="Email"
                                    pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{3,}$"
                                    title="Please enter a valid email"
                                    required
                                    />
                                </div>
                                <div class="form-group">
                                    <input
                                    onChange={this.handleChange}
                                    value={this.state.number}
                                    type="tel"
                                    name="number"
                                    id="number"
                                    class="form-control"
                                    minLength="10"
                                    pattern="[0-9]+"
                                    title="Please enter a valid phone number"
                                    placeholder="Phone Number (optional)"
                                    />
                                </div>
                                <Button id="submit" type="submit" className="btn btn-dark btn-block">
                                    Sign Up
                                </Button>
                            </form>
                        </div>
                        <div className="part col">
                            <h4>Vanity Leaders 
                            </h4>
                            <p id="copyright"> Chicago, IL <br></br> 
                            Copyright 2020 &copy; Vanity Leaders </p>
                        </div>
                        
                    </div>
                </div>
                <div className="part1">
                    <div className="container" >
                            <h4 style={{textAlign: 'center'}}> Subscribe to receive our latest updates</h4>
                            <form onSubmit={this.handleSubmit}>
                                <div class="form-group">
                                    <input
                                    onChange={this.handleChange}
                                    value={this.state.name}
                                    type="text"
                                    name="name"
                                    id="full-name"
                                    class="form-control"
                                    placeholder="Full Name"
                                    pattern="^([A-Za-z]+[,.]?[ ]?|[A-Za-z]+['-]?)+$"
                                    title="Please enter a valid name"
                                    required
                                    />
                                </div>
                                <div class="form-group">
                                    <input
                                    onChange={this.handleChange}
                                    value={this.state.email}
                                    type="email"
                                    name="email"
                                    id="email"
                                    class="form-control"
                                    placeholder="Email"
                                    pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{3,}$"
                                    title="Please enter a valid email"
                                    required
                                    />
                                </div>
                                <div class="form-group">
                                    <input
                                    onChange={this.handleChange}
                                    value={this.state.number}
                                    type="tel"
                                    name="number"
                                    id="number"
                                    class="form-control"
                                    minLength="10"
                                    pattern="[0-9]+"
                                    title="Please enter a valid phone number"
                                    placeholder="Phone Number (optional)"
                                    />
                                </div>
                                <button  id="submit" type="submit" className="btn btn-dark btn-block">
                                    Sign Up
                                </button>
                            </form>
                        </div>
                        <div class="container" style={{paddingTop: '7px'}}>
                           <div class="row text-center">
                                <div class="col-sm-6">
                                    <h4>Get In Touch</h4>
                                    <p>
                                    <i className="fas fa-phone"></i>{' '}<a style={{color: 'black'}} href="tel:3127743151">(312) 774-3151</a><br></br>
                                    <i className="fas fa-envelope"></i>{' '}<a style={{color: 'black'}} href="mailto:vanityleaders@gmail.com">vanityleaders@gmail.com</a><br></br>
                                    <a href="https://www.facebook.com/Vanity-Leaders-104289611177277/?__tn__=%2Cd%2CP-R&eid=ARDX3A1cL92_I3pStCE4lcCJ3EHTQh6okF3NkDSmh_U-yinUq3x8KWDP4WnzYx1rVQtpAxUZh_22sPtC" target="_blank" rel="noopener noreferrer"><i class="ico fab fa-facebook-f"></i></a>
                                    <a href="https://www.instagram.com/vanityleaders/"><i className="ico fab fa-instagram" target="_blank" rel="noopener noreferrer"></i></a>
                                    <i style={{cursor: 'pointer'}} id="UncontrolledPopover" className="ico fab fa-snapchat-ghost"></i>      
                                    <UncontrolledPopover placement="bottom" target="UncontrolledPopover">
                                        <PopoverHeader>Snapchat</PopoverHeader>
                                        <PopoverBody>Follow VanityLeaders on Snapchat @vanityleaders</PopoverBody>
                                    </UncontrolledPopover>
                                    </p>
                                </div>
                                <div className="col-sm-6">
                                    <h4>Copyright &copy; 2020
                                    </h4>
                                    <p id="copyright"> Chicago, IL <br></br> 
                                    All Rights Reservered </p>
          
                                </div>
                                
                           </div>
                        </div>
                      
                </div>
                <div className="mb-20">
                    <br></br>
                </div>
            </div>
        );
    }

   


}

export default Bottom;