import React, { Component } from 'react';
import '../styles/Events.css';
import {Container} from 'reactstrap';

/* eslint-disable */

class Events extends Component {
  render() {
    return (
        <div>
            <Container >
                <h1 style={{textAlign: 'center'}}>Events</h1>
                <h2 style={{textAlign: 'center', margin: '15px 0px'}}>Due to COVID-19, all events have been postponed til further notice. Throughout this time,
                Vanity Leaders is taking this time to stay healthy, help out those in need and network with other vendors
                to have better events when everything clears up.</h2>  
                <div className="row" style={{textAlign: 'center'}}>
                    <div className="col-lg-4">
                        <img src={"https://img.icons8.com/plasticine/100/000000/protection-mask.png"}/>                        <h3>Wear Your Mask</h3>
                        <ul>
                            <li>You can have the virus and not show any symptoms</li>
                            <li>If you have breathing problems, take breaks so you're not suffocating yourself while wearing</li>
                            <li>The mask is not 100% virus-proof but it reduces the risk and speed of spreading from person to person</li>
                        </ul>
                    </div>
                    <div className="col-lg-4">
                        <img src={"https://img.icons8.com/doodle/100/000000/wash-your-hands.png"} />
                        <h3>Clean</h3>
                        <ul>
                            <li>Use hand sanitizer with atleast 60% alcohol</li>
                            <li>Wipe surfaces and objects often</li>
                            <li>Avoid touching your eyes, ears and mouth with unwashed hands</li>
                            <li>Use disinfecting spray to remove any germs that may be left airborne </li>
                        </ul>
                    </div>
                    <div className="col-lg-4">
                        <img src={"https://img.icons8.com/doodle/100/000000/social-distancing.png"}/>
                        <h3>Keep Your Distance</h3>
                        <ul>
                            <li>Without a mask, it is best to stay atleast 6 feet away from others, especially strangers</li>
                            <li>Even with a mask, still try to stay atleast 6 feet away if you can</li>
                            <li>If you are experiencing symptoms, try to stay away from people as much as possible, with or without the mask</li>
                        </ul>
                    </div>
                </div>
            </Container>
        </div>
    );
  }
}

export default Events