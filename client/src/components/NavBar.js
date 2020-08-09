import React, {Component} from 'react';
import {
    Collapse,
    Navbar,
    NavbarToggler,
    NavbarBrand,
    Nav,
    NavItem,
    NavLink,
    Container
} from 'reactstrap';
import { Link } from 'react-router-dom';   

class NavBar extends Component {
    state = {
        isOpen: false
    }

    toggle = () => {
        this.setState({
            isOpen: !this.state.isOpen
        });
    }

      render() {
          return (
            <div>
                <Navbar color="dark" dark expand="sm" className="mb-5">
                <Container>
                        <NavbarBrand><Link to="/">Vanity Leaders</Link></NavbarBrand>
                        <NavbarToggler onClick={this.toggle} />
                        <Collapse isOpen= {this.state.isOpen} navbar>
                            <Nav className="ml-auto" navbar>
                                <NavItem>
                                    <NavLink><Link to="/events">Events</Link></NavLink>
                                </NavItem>
                                <NavItem>
                                    <NavLink><Link to="/gallery">Gallery</Link></NavLink>
                                </NavItem>
                                <NavItem>
                                    <NavLink><Link to="/about">About</Link></NavLink>
                                </NavItem>
                                <NavItem>
                                    <NavLink><Link to="/contact">Contact</Link></NavLink>
                                </NavItem>

                            </Nav>
                        </Collapse>
                    </Container>
                </Navbar>
            </div>
          );
          
    }
}

export default NavBar;