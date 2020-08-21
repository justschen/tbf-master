import React from 'react';
import { Link } from '@reach/router';

import Button from 'react-bootstrap/Button';

import '../css/Join.css';
import bigPic from '../img/join.png';
import Header from './A-WebElements/Header';
import Footer from './A-WebElements/Footer';

const JoinUs = () => {
	return (
		<div class="join"> 
        <section class="top">
		<Header name="Join Us" image={bigPic}/>
        
        <h1 class='join'></h1>
        
        </section>
        <section class='bottom'>
            <p>	
			<h2 class="title">Fall 2020 Recruitment
				</h2>	
			Please check back for more information about our Fall 2020 applications! If you have any questions regarding our 
			recruitment process, please contact our Director of Membership, Daniel Voskoboynik, at recruitment@forum.berkeley.edu.
            </p>

        </section>
        <Footer/>
    </div>
	);
};

export default JoinUs;