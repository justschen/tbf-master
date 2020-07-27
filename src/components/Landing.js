import React from 'react';
import { Link } from '@reach/router';
import bigPic from '../img/aboutUsJPG.JPG';
import Header from './A-WebElements/Header';
import Footer from './A-WebElements/Footer';


import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';

import '../css/Landing.css';

const Landing = () => {
	return (
		
		<div className="landing">
			<Header name="landing" image={bigPic} />
			<Container fluid className="landing-content">
				<Row>
					<p>Welcome to the Berkeley Forum, a non-partisan, student-run organization at the University of California, Berkeley. 
						Since our founding in 2012, we have been committed to serving as an accessible forum that delivers on our mission 
						of discourse by hosting a variety of debates, panels, and talks by leading experts in a wide range of fields.
					</p>
				</Row>
				<Row>
					<p>With speakers ranging in expertise from politics (Senator Rand Paul, Secretary Julian Castro, Governor Martin O’Malley) 
						and tech (Project Include CEO and former Reddit CEO Ellen Pao, Craigslist founder Craig Newmark) to academia 
						(Turing Award winner Vint Cerf, Broad Institute investigator Feng Zhang) and pop culture (88Rising CEO Sean 
						Miyashiro, 12-time Olympic medalist Natalie Coughlin), our events have covered a broad array of topics and themes. 
						We sincerely hope our events catalyze discussion and broaden our understanding of the issues and the world around us.
					</p>
				</Row>
				<Row>
					<p>Recognizing the criticality of hearing a wide range of perspectives and experiences, the Berkeley Forum remains
						 dedicated to bringing a diverse lineup of speakers to campus. In conjunction with our operations transitioning 
						 into a hybrid model in the coming Fall semester, we hope to leverage this opportunity to bring to the Forum a 
						 greater diversity of speakers through a myriad of virtual platforms.
					</p>
				</Row>
				<Row>
					<p>All of the Berkeley Forum’s events are made possible by the tireless work of our student staff, who are brought 
						together by a strong commitment to our mission and desire to elevate discourse within the Berkeley community. 
						Our members constitute seven committees and run every aspect of our events, including speaker invitations, 
						marketing, finances, multimedia, moderating, and much more. In addition to our live events, the Berkeley Forum 
						is also proud to host our very own podcast: Berkeley Forum Time.
					</p>
				</Row>
				<Row>
					<p>The Berkeley Forum’s events are open to the general public and free for all UC Berkeley students, faculty, and 
						staff. To receive notifications about our upcoming events, please follow us on social media and subscribe to 
						our email updates. On behalf of all of our members, we look forward to engaging you at a future Berkeley Forum 
						event and we thank you for your curiosity and for welcoming discourse in your life.
					</p>
				</Row>
				<Row>
					<p>Cindy Tang (she/her/hers)</p>
				</Row>
				<Row>
					<p>President, The Berkeley Forum</p>
				</Row>
			</Container>
			<Footer />
		</div>
	);
};

export default Landing;
