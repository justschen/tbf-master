import React from 'react';
import { Link } from '@reach/router';

import '../../css/Header.css'

import {Nav, NavDropdown, Navbar} from 'react-bootstrap';


const Header = () => {
    
	return (
		<div className="header">
			<h1>The Berkeley Forum</h1>
            <div class='bar'>
            <Navbar collapseOnSelect expand="lg" >
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="m-auto">
                    <div className="dropdown">
                                <Link to="/about" className="link-tag">
                                    <p className="nav-text">About Us</p>
                                </Link>
                                <div className="dropdown-content">
                                    <Link to="/team" className="link-tag">
                                        <p className="nav-text">Meet the Team</p>
                                    </Link>
                                </div>
                    </div>
                    <div className="dropdown">
                                <Link to="/calendar" className="link-tag">
                                    <p className="nav-text">Events</p>
                                </Link>
                                <div className="dropdown-content">
                                    <Link to="/pastEvents" className="link-tag">
                                        <p className="nav-text">Past Events</p>
                                    </Link>
                                    <Link to="/posters" className="link-tag">
                                        <p className="nav-text">Speaker Posters</p>
                                    </Link>
                                </div>
                    </div>
                    <Link to="/join" class='link-tag'>
                        <p className="nav-text">Join Us</p>
                    </Link>
                    <Link to="/convoBlocks" class='link-tag'>
                        <p className="nav-text">Conversations</p>
                        </Link>
                    <Link to="/contact" class='link-tag'>
                        <p className="nav-text">Contact</p>
                    </Link>
                    <Link to="/decal" class='link-tag'>
                        <p className="nav-text">Decal</p>
                    </Link> 
                    
                </Nav>
    
                </Navbar.Collapse>
            </Navbar>
            
            </div>
		</div>
	);
};

export default Header;
