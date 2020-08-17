import React from 'react';
import { Link } from '@reach/router';

import '../../css/About.scss';
import AboutHeader from '../../img/aboutUsJPG.JPG';
import Header from '../A-WebElements/Header';
import Footer from '../A-WebElements/Footer';

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';

const About = () => {
	return (
		<div className="about">
			<Header name="About Us" image={AboutHeader} />
			
			<Container fluid className="about-content">
				<Row>
					<p>
						“The Berkeley Forum is a non-partisan forum for the expression and
						debate of a wide range of ideas. Founded in 2012, the Forum
						organizes panels, debates, and talks by leading experts and
						distinguished persons on issues both topical and timeless. Forum
						events are open to the public and broadcasted online on our Facebook
						Page. Admission to Forum events is free for UC Berkeley students,
						staff, and faculty. An admission fee may be required for other event
						attendees, which will be collected at the event.
					</p>
				</Row>
				<Row className="middle-row">
					<p>
						The Forum is run entirely by undergraduate students at the
						University of California, Berkeley from a diverse range of academic
						and professional backgrounds. The Forum provides students valuable
						first-hand experience and a channel to explore and challenge the
						ideas that motivate them.”
					</p>
				</Row>
				<Row className="bottom-navbar">
					<Link to="/team">
						<p className="link-text">Meet Our Team</p>
					</Link>
					<Link to="/advisory">
						<p className="link-text">Advisory Committee</p>
					</Link>
					<Link to="/committees">
						<p className="link-text">Our Committees</p>
					</Link>
					<Link to="/legacy">
						<p className="link-text">Legacy</p>
					</Link>
				</Row>
			</Container>
			<Footer />
		</div>
	);
};

export default About;
