import React from 'react';
import { Link as ReachRouterLink } from '@reach/router';
import {Link as ReactScrollLink } from 'react-scroll';

import * as Scroll from 'react-scroll';
import { Element, Events, animateScroll as scroll, scrollSpy, scroller } from 'react-scroll'

import '../../css/Header.scss'

import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/NavBar';
import Carousel from 'react-bootstrap/Carousel';

import tasslePath from '../../img/social-tassle.png';


import landingLinePhoto from '../../img/lineup-photo.png';
import landingMailPhoto from '../../img/mailing-list-photo.png';

import HeaderBar from './HeaderBar';
import Scrolls from './Scroll';

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
                
                <Carousel wrap={true} data-wrap={false}>
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
                        alt="Second slide"
                        />
                        <Carousel.Caption className = "d-flex flex-column h-50 align-items-left justify-content-start">
                            <h3>Keep Up with the Forum</h3>
                            <p>Subscribe to Our Mailing List</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                    
                </Carousel>
            </div>
        );
    } else if(props.name.localeCompare("blog") == 0) {
        return (
            <div className="space">
                <div className="header">
                <ReachRouterLink to="/" className="landing-link">
                    <h1>The Berkeley Forum</h1>
                </ReachRouterLink>
                <img src={tasslePath} alt='tassle-socials' className='socials-tassle'/>
                <div className='bar'>
                <Navbar collapseOnSelect expand="lg" >
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="mm">
                        <div className="dropdown">
                                    <ReachRouterLink to="/about" className="link-tag">
                                        <p className="nav-text">About Us
                                        
                                        <span className="icon-bar"></span>
                                        </p>
                                    </ReachRouterLink>
                                    <div className="dropdown-content-about">
                                        <ReachRouterLink to="/team" className="link-tag">
                                            <p className="nav-text">Meet the<br/>Team</p>
                                        </ReachRouterLink>
                                    </div>
                        </div>
                        <div className="dropdown">
                                    <ReachRouterLink to="/calendar" className="link-tag">
                                        <p className="nav-text">Events</p>
                                    </ReachRouterLink>
                                    <div className="dropdown-content-events">
                                        <ReachRouterLink to="/pastEvents" className="link-tag">
                                            <p className="nav-text">Past<br/>Events</p>
                                        </ReachRouterLink>
                                        <ReachRouterLink to="/posters" className="link-tag">
                                            <p className="nav-text">Speaker<br/>Posters</p>
                                        </ReachRouterLink>
                                    </div>
                        </div>
                        <ReachRouterLink to="/join" className='link-tag'>
                            <p className="nav-text">Join Us</p>
                        </ReachRouterLink>
                        <ReachRouterLink to="/conversations" className='link-tag'>
                            <p className="nav-text">Conversations</p>
                            </ReachRouterLink>
                        <ReachRouterLink to="/contact" className='link-tag'>
                            <p className="nav-text">Contact</p>
                        </ReachRouterLink>
                        <ReachRouterLink to="/decal" className='link-tag'>
                            <p className="nav-text">Decal</p>
                        </ReachRouterLink> 
                        
                    </Nav>
        
                    </Navbar.Collapse>
                </Navbar>
                
                </div>
            </div>

        
        </div>
       
        );
    
    } else {
        return (
            <div>
                <div className="stuff" style={bg}>
                                <div className="header">
                                <ReachRouterLink to="/" className="landing-link">
                                    <h1>The Berkeley Forum</h1>
                                </ReachRouterLink>
                                <img src={tasslePath} alt='tassle-socials' className='socials-tassle'/>
                                <div className='bar'>
                                <Navbar collapseOnSelect expand="lg" >
                                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                                <Navbar.Collapse id="basic-navbar-nav">
                                    <Nav className="mm">
                                        <div className="dropdown">
                                                    <ReachRouterLink to="/about" className="link-tag">
                                                        <p className="nav-text">About Us
                                                        <span className="glyphicon glyphicon-chevron-down logo-small"></span>
                                                        <span className="icon-bar"></span>
                                                        </p>
                                                    </ReachRouterLink>
                                                    <div className="dropdown-content-about">
                                                        <ReachRouterLink to="/team" className="link-tag">
                                                            <p className="nav-text">Meet the<br/>Team</p>
                                                        </ReachRouterLink>
                                                    </div>
                                        </div>
                                        <div className="dropdown">
                                                    <ReachRouterLink to="/calendar" className="link-tag">
                                                        <p className="nav-text">Events
                                                        <span className="glyphicon glyphicon-chevron-down logo-small"></span>
                                                        <span className="icon-bar"></span>
                                                        
                                                        </p>
                                                    </ReachRouterLink>
                                                    <div className="dropdown-content-events">
                                                        <ReachRouterLink to="/pastEvents" className="link-tag">
                                                            <p className="nav-text">Past<br/>Events</p>
                                                        </ReachRouterLink>
                                                        <ReachRouterLink to="/posters" className="link-tag">
                                                            <p className="nav-text">Speaker<br/>Posters</p>
                                                        </ReachRouterLink>
                                                    </div>
                                        </div>
                                        <ReachRouterLink to="/join" className='link-tag'>
                                            <p className="nav-text">Join Us</p>
                                        </ReachRouterLink>
                                        <ReachRouterLink to="/conversations" className='link-tag'>
                                            <p className="nav-text">Conversations</p>
                                            </ReachRouterLink>
                                        <ReachRouterLink to="/contact" className='link-tag'>
                                            <p className="nav-text">Contact</p>
                                        </ReachRouterLink>
                                        <ReachRouterLink to="/decal" className='link-tag'>
                                            <p className="nav-text">Decal</p>
                                        </ReachRouterLink> 
                                        
                                    </Nav>
                        
                                    </Navbar.Collapse>
                                </Navbar>
                                
                                </div>
                            </div>


                            <h2 className="text">{props.name}</h2>

                        
                            <a type="button" class="btn-default">
                            <ReactScrollLink
                            className="scrolldown"
                            activeClass="active"
                            to="scrolls"
                            spy={true}
                            smooth={true}
                            offset={0}
                            duration= {500}
                        ><svg width="1em" height="1em" viewBox="0 0 16 16" class="bi bi-chevron-compact-down" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                        <path fill-rule="evenodd" d="M1.553 6.776a.5.5 0 0 1 .67-.223L8 9.44l5.776-2.888a.5.5 0 1 1 .448.894l-6 3a.5.5 0 0 1-.448 0l-6-3a.5.5 0 0 1-.223-.67z"/>
                    </svg></ReactScrollLink>   
                            </a>
                        

        
                </div>

                <div>
                    <Scrolls/>
                </div>

            </div>
            
    
        );
    }



};




export default Header;
