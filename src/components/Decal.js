import React from 'react';

import '../css/Decal.css';
import Header from './A-WebElements/Header';
import Footer from './A-WebElements/Footer';
import decalHeader from '../img/decalHeader.png';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';

const About = () => {
	return (
		<div className="decalPage">
			<Header name="Decal" image={decalHeader} />

			<Container fluid className="decal">
				<h5>Discourse at Berkeley: the Berkeley Forum DeCal</h5>
				<Row className="top-row">
					<p>
						Since 2012, the Forum has worked to increase discourse for the
						Berkeley community through our semesterly events lineup, hosting
						debates, panels, and talks by leading experts from a wide variety of
						fields. This semester, we are excited to announce that as a
						complement to this lineup, we are offering a 2-unit DeCal (ISF 198)
						sponsored by the Interdisciplinary Studies department.
					</p>
				</Row>

				<Row className="middle-row">
					<p>
						Through this course, students will discuss and further engage with
						topics presented in our events, as well as learn what it takes to
						bring a speaker with a valuable perspective to campus. We hope that
						by the completion of the course, students are able to have their
						opinions challenged, learn about new topics, embrace new
						perspectives, and leave with new interests. [Note: This DeCal is
						intended for students who are not members of the Berkeley Forum, and
						the course will not be open to members of the Berkeley Forum.
					</p>
				</Row>
				<Row className="bottom-row">
					<p>
						The deadline to apply to this DeCal is Friday, February 7 at 11:59
						pm. Please check back later for more information about the Fall 2020
						DeCal. Please feel free to email any questions to
						decal@forum.berkeley.edu.
					</p>
				</Row>
			</Container>
			<Footer />
		</div>
	);
};

export default About;
