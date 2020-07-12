import React from 'react';
import { Link } from '@reach/router';

import '../../css/Footer.css'
import tbfLogoPath from '../../img/footerlogo.png';

const Footer = (props) => {
	return (
        <div className="footer">
                <img src={tbfLogoPath} alt='tbf-logo'/>
                <p className='contact-info'>The Berkeley Forum at the University of California
                        <br/><br/>432 Eshleman Hall, Berkeley, CA 94720-4520
                        <br/><br/>General Inquiries
                        <br/>info@forum.berkeley.edu
                </p>
                <div className="footer-links">
                        <Link to="/" className="link-tag">
                                <p className="footer-link-text">Home</p>
                        </Link>
                        <Link to="/events" className="link-tag">
                                <p className="footer-link-text">Events</p>
                        </Link>
                        <Link to="/team" className="link-tag">
                                <p className="footer-link-text">Meet Our Team</p>
                        </Link>
                        <Link to="/contact" className="link-tag">
                                <p className="footer-link-text">Contact Us</p>
                        </Link>
                        <Link to="/about" className="link-tag">
                                <p className="footer-link-text">About Us</p>
                        </Link>
                        <Link to="/calendar" className="link-tag">
                                <p className="footer-link-text">Calendar</p>
                        </Link>
                        <Link to="" className="link-tag">
                                <p className="footer-link-text">Advisory Committee</p>
                        </Link>
                        <Link to="" className="link-tag">
                                <p className="footer-link-text">Privacy Policy</p>
                        </Link>
                        <Link to="/convoBlocks" className="link-tag">
                                <p className="footer-link-text">Conversations</p>
                        </Link>
                        <Link to="/pastEvents" className="link-tag">
                                <p className="footer-link-text">Past Events</p>
                        </Link>
                        <Link to="/join" className="link-tag">
                                <p className="footer-link-text">Join Us</p>
                        </Link>
                </div>
                        
        </div>
	);
};

export default Footer;
