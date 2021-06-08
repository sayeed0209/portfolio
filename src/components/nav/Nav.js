import React from "react";
import "./Nav.css";
import { Navbar, Nav, NavDropdown } from "react-bootstrap";
import linkedinIMG from '../../img/linkedin.svg'
import twitterIMG from '../../img/twitter.svg'
import githubIMG from '../../img/github.svg'
import logo from '../../img/sayeed-logo.PNG'
const NavComponent = () => {
  return (
    <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark" className="p-1 px-5">
      <Navbar.Brand href="#home"><img src={logo}  width='80px' className="rounded-circle"/></Navbar.Brand>
      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
      <Navbar.Collapse id="responsive-navbar-nav">
        <Nav className="mr-auto">
          <Nav.Link href="#features" >Features</Nav.Link>
          <Nav.Link href="#pricing">Pricing</Nav.Link>
          <NavDropdown title="Dropdown" id="collasible-nav-dropdown">
            <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
            <NavDropdown.Item href="#action/3.2">
              Another action
            </NavDropdown.Item>
            <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
            <NavDropdown.Divider />
            <NavDropdown.Item href="#action/3.4">
              Separated link
            </NavDropdown.Item>
          </NavDropdown>
        </Nav>
        <Nav>
          <Nav.Link href="#deets" className='px-4'><img src={linkedinIMG} className="text-light" width="30px"/></Nav.Link>
          <Nav.Link href="#deets" className='px-4'><img src={twitterIMG} className="text-light" width="30px"/></Nav.Link>
          <Nav.Link href="#deets" className='px-4'><img src={githubIMG} className="text-light" width="30px"/></Nav.Link>
         
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default NavComponent;
