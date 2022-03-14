import React from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Form from 'react-bootstrap/Form';
import FormControl from 'react-bootstrap/FormControl';
import Button from 'react-bootstrap/Button';

import './NavBar.css';

function NavBar() {
  return (    
    <Navbar className="container-fluid" bg="black" expand="lg" variant="dark">        
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <NavDropdown title="PlayStation" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Consolas</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">Videojuegos</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Accesorios</NavDropdown.Item>
            </NavDropdown>
            <NavDropdown title="Xbox" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Consolas</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">Videojuegos</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Accesorios</NavDropdown.Item>
            </NavDropdown>
            <NavDropdown title="Nintendo" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Consolas</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">Videojuegos</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Accesorios</NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
        <Navbar.Brand className="textNav" href="#home">Varda´s Gaming Store</Navbar.Brand>
        <Form className="d-flex">
          <FormControl
            type="search"
            placeholder="Search"
            className="me-2"
            aria-label="Search"
          />
          <Button variant="outline-success">Search</Button>
        </Form>
    </Navbar>
  )
}

export default NavBar