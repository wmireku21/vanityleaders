import React, { Component } from 'react';
import kwesi from '../photos/kwesi_2.jpg';
import { Container } from 'reactstrap';
import '../styles/About.css';

class About extends Component {
  render() {
    return (
        <div>
            <div className="about" style={{margin: '50px 0px'}}>
                <Container>
                    <div className="about-kwesi" style={{textAlign: 'center'}}>
                        <h1>Meet The Founder</h1>
                        <h3>Kwesi Ayekumi</h3>
                        <p style={{margin: '0px 50px 30px 50px'}}> President of Vanity Leaders, Kwesi Ayekumi is a high energy African-American event coordinator and host that can illuminate a room with his presence. A self driven young man, that has built himself a network circle in Chicago that enables him to be capable of creating memorable events that will leave you speechless. Through small localized events, Kwesi Ayekumi, interacts directly with various communities and demographics in Chicago, IL in hopes of providing platforms for those in the creative community that need a stage to take themselves to the next level, and by giving back to the community through youth events and charitable acts.</p>
                        <img id="kwesi" src={kwesi} alt="kwesi" ></img>
                    </div>
                </Container>
            </div>
        </div>
    );
  }
}

export default About;