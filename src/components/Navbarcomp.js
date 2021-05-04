import React from 'react';
import { Link } from 'react-router-dom'
import { Navbar, Nav, NavDropdown, Image } from 'react-bootstrap';
import { BsFillBagFill } from "react-icons/bs";

export default function Navbarcomp () {

    return (

      <Navbar className="pt-4" bg="" expand="xl">
      <Image src="http://via.placeholder.com/80x50" rounded />
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mr-auto m-auto">
          <Nav.Link className="pr-5" href="#home">Bikes</Nav.Link>
          <Nav.Link className="pr-5" href="#link">Accessories</Nav.Link>
          <Nav.Link className="pr-5" href="#link">Reviews</Nav.Link>
          <Nav.Link className="pr-5" href="#link">Service</Nav.Link>
          <Nav.Link className="pr-5" href="#link">Contact</Nav.Link>
        </Nav>
        <Nav.Link className="pr-5" href="#link">
          <BsFillBagFill />
        </Nav.Link>
      </Navbar.Collapse>
    </Navbar>

        
    )
  }