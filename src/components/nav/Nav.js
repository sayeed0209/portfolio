import React from "react";
import "./Nav.css";
import { Navbar, Nav } from "react-bootstrap";
import linkedinIMG from '../../img/linkedin.svg'
import twitterIMG from '../../img/twitter.svg'
import githubIMG from '../../img/github.svg'
import logo from '../../img/a.svg'
import logo2 from '../../img/s.svg'
const NavComponent = ({onClickShowAbout,onClickShowProject,onClickShowContact}) => {
  return (
    <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark" className="p-3 px-5">
      <Navbar.Brand href="#home" ><img src={logo}  width='50px' className="rounded-circle" alt="logo"  /> <img src={logo2}  width='50px' className="rounded-circle" alt="logo"/></Navbar.Brand>
      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
      <Navbar.Collapse id="responsive-navbar-nav">
        <Nav className="ml-auto">
        <Nav.Link href="#features" className='px-4 btn btn-outline-warning text-white' onClick={onClickShowAbout}>About</Nav.Link>
          <Nav.Link href="#pricing" className='px-4' onClick={onClickShowProject}>Projects</Nav.Link>
          <Nav.Link href="#pricing" className='px-4'onClick={onClickShowContact}>Contact</Nav.Link>
          <Nav.Link href="https://www.linkedin.com/in/sayeed0209/" className='px-4'><img src={linkedinIMG} className="text-light" width="30px" alt="linkedin" /></Nav.Link>
          <Nav.Link href="#deets" className='px-4'><img src={twitterIMG} className="text-light" width="30px"alt="twitter"/></Nav.Link>
          <Nav.Link href="#deets" className='px-4'><img src={githubIMG} className="text-light" width="30px"alt="github"/></Nav.Link>
         
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default NavComponent;
