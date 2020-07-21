import React from 'react';
import { Link } from '@reach/router';

import '../../css/Footer.scss';
import tbfLogoPath from '../../img/footerlogo.png';
import wdbLogoPath from '../../img/wdblogo.png';

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

const Footer = (props) => {
	return (
		<Container fluid className="footer">
			<Col
				xs={5}
				className="left-col"
				style={{ borderRight: '2px solid #FFFFFF' }}
			>
				<img src={tbfLogoPath} alt="tbf-logo" className="tbf-logo" />
				<div className="contact-info">
					<p>The Berkeley Forum at the University of California</p>
					<p>432 Eshleman Hall, Berkeley, CA 94720-4520</p>
					<p>
						General Inquiries
						<br />
						info@forum.berkeley.edu
					</p>
				</div>
			</Col>
			<Col xs={7} className="right-col">
				<Row className="footer-links">
					<Col xs={3} className="footer-col">
						<Link to="/" className="link-tag">
							<p>Home</p>
						</Link>
						<Link to="/events" className="link-tag">
							<p>Events</p>
						</Link>
						<Link to="/team" className="link-tag">
							<p>Meet Our Team</p>
						</Link>
					</Col>

					<Col xs={3} className="footer-col">
						<Link to="/contact" className="link-tag">
							<p>Contact Us</p>
						</Link>
						<Link to="/about" className="link-tag">
							<p>About Us</p>
						</Link>
						<Link to="/calendar" className="link-tag">
							<p>Calendar</p>
						</Link>
					</Col>
					<Col xs={3} className="footer-col">
						<Link to="" className="link-tag">
							<p>Advisory Committee</p>
						</Link>
						<Link to="" className="link-tag">
							<p>Privacy Policy</p>
						</Link>
						<Link to="/convoBlocks" className="link-tag">
							<p>Conversations</p>
						</Link>
					</Col>

					<Col xs={3} className="footer-col">
						<Link to="/pastEvents" className="link-tag">
							<p>Past Events</p>
						</Link>
						<Link to="/join" className="link-tag">
							<p>Join Us</p>
						</Link>
					</Col>
				</Row>
				<Row className="justify-content-end">
					<img src={wdbLogoPath} alt="wdb-logo" className="wdb-logo" />
				</Row>
			</Col>
		</Container>
	);
};

export default Footer;
