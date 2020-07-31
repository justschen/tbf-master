import React from 'react';
import { Link } from '@reach/router';

import '../../css/Header.css'

import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/NavBar';
import Carousel from 'react-bootstrap/Carousel';

import tasslePath from '../../img/social-tassle.png';


import landingLinePhoto from '../../img/lineup-photo.png';
import landingMailPhoto from '../../img/mailing-list-photo.png';

import HeaderBar from './HeaderBar';

const Header = (props) => {
    let middle;
    const bg = {
        backgroundImage:`url(${props.image})`,
        background: props.image,
    };
    if(props.name.localeCompare("landing") == 0) {
        return (
            <div className='landing-header'>
                <HeaderBar />
                <Carousel>
                    <Carousel.Item> 
                        <img
                        className="d-block w-100"
                        src={landingLinePhoto}
                        alt="First slide"
                        />

                        <Carousel.Caption className = "d-flex flex-column h-50 align-items-left justify-content-start">
                            <h3>Fall 2020 Lineup</h3>
                            <p>See the Events</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                        className="d-block w-100"
                        src={landingMailPhoto}
                        alt="Third slide"
                        />
                        <Carousel.Caption className = "d-flex flex-column h-50 align-items-left justify-content-start">
                            <h3>Keep Up with the Forum</h3>
                            <p>Subscribe to Our Mailing List</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                </Carousel>
            </div>
        );
    } else if(props.name.localeCompare("randPaul") == 0) {
        return (
            <div className="space">
                <div className="header">
                <Link to="/" className="landing-link">
                    <h1>The Berkeley Forum</h1>
                </Link>
                <img src={tasslePath} alt='tassle-socials' className='socials-tassle'/>
                <div className='bar'>
                <Navbar collapseOnSelect expand="lg" >
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="mm">
                        <div className="dropdown">
                                    <Link to="/about" className="link-tag">
                                        <p className="nav-text">About Us
                                        <span className="glyphicon glyphicon-chevron-down logo-small"></span>
                                        <span className="icon-bar"></span>
                                        </p>
                                    </Link>
                                    <div className="dropdown-content-about">
                                        <Link to="/team" className="link-tag">
                                            <p className="nav-text">Meet the<br/>Team</p>
                                        </Link>
                                    </div>
                        </div>
                        <div className="dropdown">
                                    <Link to="/calendar" className="link-tag">
                                        <p className="nav-text">Events</p>
                                    </Link>
                                    <div className="dropdown-content-events">
                                        <Link to="/pastEvents" className="link-tag">
                                            <p className="nav-text">Past<br/>Events</p>
                                        </Link>
                                        <Link to="/posters" className="link-tag">
                                            <p className="nav-text">Speaker<br/>Posters</p>
                                        </Link>
                                    </div>
                        </div>
                        <Link to="/join" className='link-tag'>
                            <p className="nav-text">Join Us</p>
                        </Link>
                        <Link to="/convoBlocks" className='link-tag'>
                            <p className="nav-text">Conversations</p>
                            </Link>
                        <Link to="/contact" className='link-tag'>
                            <p className="nav-text">Contact</p>
                        </Link>
                        <Link to="/decal" className='link-tag'>
                            <p className="nav-text">Decal</p>
                        </Link> 
                        
                    </Nav>
        
                    </Navbar.Collapse>
                </Navbar>
                
                </div>
            </div>

        
        </div>
       
        );
    
    } else {
        return (
            <div className="stuff" style={bg}>
                <div className="header">
                <Link to="/" className="landing-link">
                    <h1>The Berkeley Forum</h1>
                </Link>
                <img src={tasslePath} alt='tassle-socials' className='socials-tassle'/>
                <div className='bar'>
                <Navbar collapseOnSelect expand="lg" >
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="mm">
                        <div className="dropdown">
                                    <Link to="/about" className="link-tag">
                                        <p className="nav-text">About Us
                                        <span className="glyphicon glyphicon-chevron-down logo-small"></span>
                                        <span className="icon-bar"></span>
                                        </p>
                                    </Link>
                                    <div className="dropdown-content-about">
                                        <Link to="/team" className="link-tag">
                                            <p className="nav-text">Meet the<br/>Team</p>
                                        </Link>
                                    </div>
                        </div>
                        <div className="dropdown">
                                    <Link to="/calendar" className="link-tag">
                                        <p className="nav-text">Events
                                        <span className="glyphicon glyphicon-chevron-down logo-small"></span>
                                        <span className="icon-bar"></span>
                                        
                                        </p>
                                    </Link>
                                    <div className="dropdown-content-events">
                                        <Link to="/pastEvents" className="link-tag">
                                            <p className="nav-text">Past<br/>Events</p>
                                        </Link>
                                        <Link to="/posters" className="link-tag">
                                            <p className="nav-text">Speaker<br/>Posters</p>
                                        </Link>
                                    </div>
                        </div>
                        <Link to="/join" className='link-tag'>
                            <p className="nav-text">Join Us</p>
                        </Link>
                        <Link to="/convoBlocks" className='link-tag'>
                            <p className="nav-text">Conversations</p>
                            </Link>
                        <Link to="/contact" className='link-tag'>
                            <p className="nav-text">Contact</p>
                        </Link>
                        <Link to="/decal" className='link-tag'>
                            <p className="nav-text">Decal</p>
                        </Link> 
                        
                    </Nav>
        
                    </Navbar.Collapse>
                </Navbar>
                
                </div>
            </div>


            <h2 className="text">{props.name}</h2>
        
        </div>
        );
    }
};

export default Header;
