import React from 'react';
import { Link } from '@reach/router';

import '../../css/Footer.css'
import wdbLogoPath from '../../img/footerlogo.png';

const Footer = (props) => {
	return (
        <div className="footer">
            <img src={wdbLogoPath} alt='wdb-logo'/>
            <p className='contact-info'>The Berkeley Forum at the University of California
                <br/><br/>432 Eshleman Hall, Berkeley, CA 94720-4520
                <br/><br/>General Inquiries
                <br/>info@forum.berkeley.edu</p>
        </div>
	);
};

export default Footer;
