import React, { Component } from 'react';
import '../styles/Home.css';
import services from './services';
import SingleService from './SingleService';
import { Container, Col, Row} from 'reactstrap';
import vanity from '../photos/VanityLogo.jpg';


class Home extends Component {
    
  render() {

    return (
        <div>
            <div className="home-page">
                <div className="party">
                    <h1 style={{fontSize: '48px'}}> <b>Party</b> with a <b>Purpose</b></h1>
                    {/*<button id="button" type="button" class="btn btn-lg">Contact</button>*/}
                </div>
            </div>
            <Container className="who" style={{textAlign: 'center'}}>
                <h1 style={{marginTop: '20px'}}><b>who</b> we are?</h1>
                <p id="vanity-text" style={{fontSize: '22px'}}>Vanity Leaders is Chicago’s latest addition to the entertainment and creative community that is booming in the city. 
                                Vanity provides our audiences with a variety of themed parties and exhibitions to captivate the mind! One week you’re at a musical showcase at a lounge or restaurant, and next weekend you may be out in one of the city’s hottest club scenes. 
                                Not only do we host parties and outings, but Vanity Leaders’ believe in enforcing a positive impact into the neighborhoods that make up our city of Chicago.</p>
            </Container>
            <Col className="services">
                <h1 style={{textAlign: 'center'}}><b>what</b> we do?</h1>
                <Row>
                    {services.map((item) =>
                        <Col sm="4">
                            <SingleService key={item.id} img={item.img} title={item.title} text={item.text}/>
                        </Col>
                    )};
                </Row>
            </Col>
            <Container className="why">
                <h1 style={{textAlign: 'center' }}> & <b>why </b>we do this?</h1>
                <br></br>
                <p style={{fontSize: '22px', textAlign: 'center'}}>Vanity Leaders look to be more than just entertainment service, but also a organizaion who
                        gives back to the community. Not only do we host parties and outings, but we believe in enforcing a positive impact into the neighborhoods that make up our city of Chicago. How does vanity play their role into our city's society?
                        By hosting exhibitions and small galas in which we have local artists, musicians, and performers exploit their talents in front of an audience. In doing so, those that participate in our events gain a sense of confidence and experience in performing that may be used to catapult their careers to a higher level. 
                </p>
            </Container>
        </div>
    );
  }
}

export default Home;