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
						Statement Regarding the Cancellation of the Co-Founders of Cards
						Against Humanity Event
					</h2>
				</div>

				<Row>
					<p>tw: sexual assault</p>
				</Row>
				<Row>
					<p>
						Since 2012, the Berkeley Forum has hosted speakers with the mission
						of bringing discourse to the Berkeley community. One of the policies
						we maintain in accordance with this mission is to not provide a
						platform for speakers who have been accused of sexual harassment
						and/or assault.
					</p>
				</Row>

				<Row>
					<p>
						Recently, we were made aware of allegations of sexual assault
						against one of our speakers, Max Temkin, scheduled to speak on March
						20th. As such, the Berkeley Forum has decided to rescind the
						invitation and cancel this event.
					</p>
				</Row>
				<Row>
					<p>
						Our organization apologizes for any inconvenience this cancellation
						may cause.
					</p>
				</Row>

				<Row>
					<p>
						If you are seeking resources regarding sexual harassment and/or
						assault, Path to CARE provides confidential support on campus.
					</p>
				</Row>
				<Row>
					<p>https://sa.berkeley.edu/dean/confidential-care-advocate</p>
				</Row>
				<Row>
					<p>(510) 642-1988</p>
				</Row>
			</Container>
			<Footer />
		</div>
	);
};

export default RandPaul;
