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
			<Header name="blog" />
			<Container fluid className="blog-content">
				<div className="header-none">
					<h2>
						Statement Regarding the Cancellation of the Marianne Williamson
						Event
					</h2>
				</div>

				<Row>
					<p>
						It was recently brought to our attention by campus staff that
						federal laws prohibit any arm of a public university–including
						registered student organizations–from engaging in any activity that
						may support a current presidential candidate. This includes hosting
						an event with a candidate on a public university campus–even if the
						event is not a campaign event. We took many measures to see if there
						was any way we could still host this event. This included meeting
						with administrative staff, academic departments, and other relevant
						parties. Unfortunately though, we were unable to resolve the issue.
					</p>
				</Row>
				<Row>
					<p>
						In the interest of avoiding liability, and thereby jeopardizing our
						ability to host future events for the Berkeley community, we have
						ultimately decided not to move forward with this event. We
						understand that this is an event that many of you were looking
						forward to, and we apologize for any inconvenience this cancellation
						may cause.
					</p>
				</Row>
			</Container>
			<Footer />
		</div>
	);
};

export default RandPaul;
