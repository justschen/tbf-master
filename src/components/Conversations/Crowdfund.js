import React from 'react';
import { Link } from '@reach/router';

import '../../css/Blog.scss';
import AboutHeader from '../../img/aboutUsJPG.JPG';
import Header from '../A-WebElements/Header';
import Footer from '../A-WebElements/Footer';


import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

const RandPaul = () => {
	return (
		<div className="conversations">
			<Header name="blog"/>
			<Container fluid className="blog-content">
			<div className="header-none">

				<h2>
				2019 Crowdfunding Campaign Update
				</h2>
				
			</div>

				<Row>
					<p className>
					On behalf of all of the student members of the Berkeley Forum, a massive thank you to all of those who donated. With your help, we were able to <strong>SURPASS</strong> our goal to raise $5,315 (and over $8,000 counting corporate matching)!
					</p>
					
				</Row>
				<Row>
					<p>
					The generous support of our donors will allow our organization to bring some of the best thinkers, leaders, and innovators to campus to participate in debates and panels. The money we raised will allow our organization to keep growing at the incredible pace that we have been since our founding in 2012.
					</p>
				</Row>
				<Row>
				<p>
					We will be able to not only increase the number and quality of our speakers, debates, and panels, but also strive to continue engaging our community in discussions featuring a wide array of perspectives. Your incredible support will allow us to energetically pursue our mission of furthering Cal’s history and tradition as a place of free speech and intellectual dialogue. More importantly, our crowdfunding success will keep our events completely free for all UC Berkeley students, staff, and faculty and accessible for community members.	</p>
				</Row>
				
	
				<Row  >
					<p>
					Thank you so much again to all our donors on behalf of the Forum staff. Because of your efforts and support for Free Speech, the Berkeley Forum will be able to continue to grow and bring even more incredible guests to campus!
					</p>
				</Row>
			
			</Container>
			<Footer />
		</div>
	);
};

export default RandPaul;
