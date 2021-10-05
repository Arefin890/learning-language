import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';

import './Header.css';

const Header = () => {
    return (
        <Navbar collapseOnSelect expand="lg" variant="dark" className="navbar">
          <Container>
          <Navbar.Brand to="/">Language Learning</Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto navigation">
              <NavLink to="/home">Home</NavLink>
              <NavLink to="/about">About</NavLink>
              <NavLink to="/services">Service</NavLink>
              <NavLink to="/gallery">Gallery</NavLink>
            </Nav>
          </Navbar.Collapse>
          </Container>
        </Navbar>
    );
};

export default Header;