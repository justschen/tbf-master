import React from 'react';
import { Link } from '@reach/router';

import '../../css/About.css'
import bigPic from '../../img/aboutUsJPG.JPG'
import Header from '../A-WebElements/Header'
import ANyName from '../../img/medicatio.png';

const About = () => {
	return (
    <div class="about"> 
        <section class="top">
            <header>
                <Header></Header>
            </header>
            
        
            <h1 class='aboutPic'>About Us</h1>
			<Link to="/">to home</Link>
        
        </section>
        <section class='bottom'>
            
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laboriosam sunt id inventore ipsam ea iusto esse sint voluptates iure blanditiis, dignissimos, dicta, autem consequuntur! Nemo accusamus facere reiciendis obcaecati! Tempore!</p>
            <div class="form">
				<h2>Stuff</h2>
            </div>
        </section>
    </div>
		

	);
};

export default About;
