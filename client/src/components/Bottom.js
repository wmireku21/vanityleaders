import React, { Component } from "react";
import '../styles/Bottom.css';
//import axios from 'axios';


class Bottom extends Component {

    constructor(props) {
        super(props); 
        this.state = {
            name: '',
            email: '',
            number: ''
        }

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange = e => {
        this.setState({ [e.target.name]: e.target.value })
    }
  
    handleSubmit(e) {
        e.preventDefault();

        const {name, email, number} = this.state;
        // eslint-disable-next-line
        {/*axios.post('/signup', {
          name,
          email,
          number
        }) */}
        
    }

    render() {
        return (
            <div className="footer">
                <div className="mt-20">
                    <br></br>
                </div>
                <div className="bottom-page" className="container">
                    <div className="row">
                      
                        <div className="part col">
                           <h4>Get In Touch</h4>
                           <p>
                           <a style={{color: 'black'}} href="tel:3127743151">(312) 774-3151</a><br></br>
                           <a style={{color: 'black'}} href="mailto:vanityleaders@gmail.com">vanityleaders@gmail.com</a><br></br>
                           </p>
                           <a href="https://www.facebook.com/Vanity-Leaders-104289611177277/?__tn__=%2Cd%2CP-R&eid=ARDX3A1cL92_I3pStCE4lcCJ3EHTQh6okF3NkDSmh_U-yinUq3x8KWDP4WnzYx1rVQtpAxUZh_22sPtC"><i class="ico fab fa-facebook-f"></i></a>
                            <a href="https://www.instagram.com/vanityleaders/"><i class="ico fab fa-instagram"></i></a>
                            <i class="ico fab fa-snapchat-ghost"></i>
                        </div>
                        <div className="part col-6" >
                            <h4> Subscribe to receive our latest updates</h4>
                            <form action="/signup" method="POST">
                                <div class="form-group">
                                    <input
                                    type="text"
                                    name="fullName"
                                    id="full-name"
                                    class="form-control"
                                    placeholder="Full Name"
                                    />
                                </div>
                                <div class="form-group">
                                    <input
                                    type="email"
                                    name="email"
                                    id="email"
                                    class="form-control"
                                    placeholder="Email"
                                    />
                                </div>
                                <div class="form-group">
                                    <input
                                    type="text"
                                    name="number"
                                    id="number"
                                    class="form-control"
                                    placeholder="Phone Number (optional)"
                                    />
                                </div>
                                <button id="submit" type="submit" class="btn btn-dark btn-block">
                                    Sign Up
                                </button>
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
                <div class="part1">
                    <div className="container" >
                            <h4 style={{textAlign: 'center'}}> Subscribe to receive our latest updates</h4>
                            <form action="/signup" method="POST">
                                <div class="form-group">
                                    <input
                                    type="text"
                                    name="fullName"
                                    id="full-name"
                                    class="form-control"
                                    placeholder="Full Name"
                                    />
                                </div>
                                <div class="form-group">
                                    <input
                                    type="email"
                                    name="email"
                                    id="email"
                                    class="form-control"
                                    placeholder="Email"
                                    />
                                </div>
                                <div class="form-group">
                                    <input
                                    type="text"
                                    name="number"
                                    id="number"
                                    class="form-control"
                                    placeholder="Phone Number (optional)"
                                    />
                                </div>
                                <button id="submit" type="submit" class="btn btn-dark btn-block">
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
                                    <a href="https://www.facebook.com/Vanity-Leaders-104289611177277/?__tn__=%2Cd%2CP-R&eid=ARDX3A1cL92_I3pStCE4lcCJ3EHTQh6okF3NkDSmh_U-yinUq3x8KWDP4WnzYx1rVQtpAxUZh_22sPtC"><i class="ico fab fa-facebook-f"></i></a>
                                    <a href="https://www.instagram.com/vanityleaders/"><i class="ico fab fa-instagram"></i></a>
                                    <i class="ico fab fa-snapchat-ghost"></i>

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