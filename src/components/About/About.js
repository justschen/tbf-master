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
        <Header name="About Us" image={bigPic}/>
        
        <h1 class='aboutPic'></h1>
        
        </section>
        <section class='bottom'>
            
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laboriosam sunt id inventore ipsam ea iusto esse sint voluptates iure blanditiis, dignissimos, dicta, autem consequuntur! Nemo accusamus facere reiciendis obcaecati! Tempore!</p>
            <div class="form">
                <button>Meet Our Team</button>
                <button>Advisory Committee</button>
                <button>Our Committees</button>
                <button>Legacy</button>
            </div>
        </section>
    </div>
		

	);
};

export default About;
