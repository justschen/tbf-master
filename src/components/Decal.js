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
				<Row>
					<h5>Discourse at Berkeley: the Berkeley Forum DeCal</h5>
				</Row>

				<Row>
					<p>
						Discourse at Berkeley is a DeCal intended for students who are
						interested in exploring the rich history of discourse, activism, and
						political movements at UC Berkeley, all of which are particularly
						relevant to campus today. This includes dissecting and understanding
						the Free Speech Movement, Third World Liberation Front, a discussion
						of the role of the ASUC, and more.
					</p>
				</Row>

				<Row>
					<p>
						Discourse at Berkeley is a discussion-based class in which students
						are expected to attend at least 6 of the approximately 15 virtual
						events hosted by the Berkeley Forum throughout the F20 semester, and
						submit proof of their attendance to the course instructors. Students
						can expect to be exposed to a wide range of disciplines as event
						speakers generally come from various fields (for example, this
						semester we are hosting Dr. Anthony Fauci of the NIAID, a Panel on
						the Sustainability of the Gig Economy, and Joanna Calo, a television
						writer and producer).
					</p>
				</Row>
				<Row>
					<p>
						Class activities will include debates, a history of discourse at
						Berkeley, and in-depth discussions on the questions posed by
						speakers at the weekly events. Students may miss up to two classes
						without it impacting their grade. There are no other assignments
						required for the class except the final exam, which consists
						primarily of free-response questions.
					</p>
				</Row>
				<Row>
					<p>
						The deadline to apply to this DeCal is Wednesday, September 9 at
						11:59pm. For more information, visit the course page:
						<a href="https://decal.berkeley.edu/courses/5371">
							{' '}
							https://decal.berkeley.edu/courses/5371
						</a>
						{'. '}
						Please feel free to email any questions to decal@forum.berkeley.edu.
					</p>
				</Row>
			</Container>
			<Footer />
		</div>
	);
};

export default About;
