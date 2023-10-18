import React from 'react';
import { Container, Nav, Navbar, Image } from 'react-bootstrap';
import { Cart } from 'react-bootstrap-icons';

const TopMenu = () => (
  <Container fluid id="topMenu">
    <Navbar expand="lg" bg="light" className="bg-gradient">
      <Container className="py-1">
        <Nav className="justify-content-start gap-2 white mb-1">
          <Nav.Link><h4>LUNCH</h4></Nav.Link>
          <Nav.Link><h4>DINNER</h4></Nav.Link>
          <Nav.Link><h4>DRINKS & PUPU</h4></Nav.Link>
        </Nav>
        <Navbar.Brand className="justify-content-center" href="#">
          <Image
            src="wod-BuzzsLogo60Years.png"
            height="70px"
          />
        </Navbar.Brand>
        <Nav className="justify-content-end gap-2 white">
          <Nav.Link><h4>ABOUT</h4></Nav.Link>
          <Nav.Link><h4>LOCATION</h4></Nav.Link>
          <Nav.Link><h4>SHOP</h4></Nav.Link>
          <Nav.Link className="align-self-center"><h4><Cart className="mb-1" /></h4></Nav.Link>
        </Nav>
      </Container>
    </Navbar>
  </Container>
);

export default TopMenu;
