import React from 'react';
import { Link } from '@reach/router';

import '../../css/About.css'
import bigPic from '../../img/aboutUsJPG.JPG'
import Header from '../A-WebElements/Header'
import ANyName from '../../img/medicatio.png';
import Button from '../A-WebElements/Button';
import Footer from '../A-WebElements/Footer';

const About = () => {
	return (
    <div class="about"> 
        <section class="top">
            <Header/>

            <h1 class='aboutPic'>About Us</h1>
			<Link to="/">to home</Link>
        
        </section>
        <section class='bottom'>
            <div class ='info-text'>
                <p>“The Berkeley Forum is a non-partisan forum for the expression and debate of a wide range of ideas. Founded in 2012, the Forum organizes panels, debates, and talks by leading experts and distinguished persons on issues both topical and timeless. Forum events are open to the public and broadcasted online on our Facebook Page. Admission to Forum events is free for UC Berkeley students, staff, and faculty. An admission fee may be required for other event attendees, which will be collected at the event.
                    <br></br><br></br>The Forum is run entirely by undergraduate students at the University of California, Berkeley from a diverse range of academic and professional backgrounds. The Forum provides students valuable first-hand experience and a channel to explore and challenge the ideas that motivate them.”
                </p>
            </div>
            <div class="form">
                <Button text='MEET OUR TEAM'/>
                <Button text='ADVISORY COMMITTEE'/>
                <Button text='OUR COMMITTEES'/>
                <Button text='LEGACY'/>
            </div>

            <Footer/>
        </section>
    </div>
		

	);
};

export default About;
