import React from "react";
import logo from '../../img/logo-s.png';
// import { BrowserRouter as Link } from 'react-router-dom';
import { Navbar, Nav, Button } from 'react-bootstrap';
import * as Scroll from 'react-scroll';
import { Link, Element, Events, animateScroll as scroll, scrollSpy, scroller, handleSetActive } from 'react-scroll'
import Navlink from './Navlink';


const Navigation = () => {

    return (<>
        <nav>
            <Navlink target={'home'} />
            
            <Link activeClass="active"
                to="about"
                spy={true}
                smooth={true}
                hashSpy={true}
                offset={0}
                duration={500}
                isDynamic={true}
                //   onSetActive={this.handleSetActive}
                //   onSetInactive={this.handleSetInactive}
                ignoreCancelEvents={false}
                    >ABOUT</Link>
            <Link activeClass="active"
                to="contact"
                spy={true}
                smooth={true}
                hashSpy={true}
                offset={0}
                duration={500}
                isDynamic={true}
                //   onSetActive={this.handleSetActive}
                //   onSetInactive={this.handleSetInactive}
                ignoreCancelEvents={false}
            >CONTACT</Link>
        
            <Link activeClass="active"
                to="projects"
                spy={true}
                smooth={true}
                hashSpy={true}
                offset={0}
                duration={500}
                isDynamic={true}
                //   onSetActive={this.handleSetActive}
                //   onSetInactive={this.handleSetInactive}
                ignoreCancelEvents={false}
            >PROJECTS</Link>
            
            <Link activeClass="active"
                to="resume"
                spy={true}
                smooth={true}
                hashSpy={true}
                offset={0}
                duration={500}
                isDynamic={true}
                //   onSetActive={this.handleSetActive}
                //   onSetInactive={this.handleSetInactive}
                ignoreCancelEvents={false}
            >RESUME</Link>

            <Link activeClass="active"
                to="footer"
                spy={true}
                smooth={true}
                hashSpy={true}
                offset={0}
                duration={500}
                isDynamic={true}
                //   onSetActive={this.handleSetActive}
                //   onSetInactive={this.handleSetInactive}
                ignoreCancelEvents={false}
            >FOOTER</Link>
            
            </nav>
                                    
    </>);
}

export default Navigation


{/* <Navbar bg="light" expand="md">
<Navbar.Brand href=""><img src={logo} /></Navbar.Brand>
<Navbar.Toggle aria-controls="basic-navbar-nav" />
<Navbar.Collapse id="basic-navbar-nav">
    <Nav className="ml-auto">
    <Nav.Link href="#home" className="nav-items">HOME</Nav.Link>
    <Nav.Link href="#about" className="nav-items">ABOUT</Nav.Link>
    <Nav.Link href="#project" className="nav-items">PROJECTS</Nav.Link>
    <Nav.Link href="#skills" className="nav-items">SKILLS</Nav.Link>
    <Nav.Link href="#education" className="nav-items">EDUCATION</Nav.Link>
    <Nav.Link href="#contact" className="nav-items">CONTACT</Nav.Link>
    <Nav.Link href="#resume" className="nav-items">RESUME</Nav.Link>
</Nav>
</Navbar.Collapse>
</Navbar> */}