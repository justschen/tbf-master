import React from 'react';
import { Link } from '@reach/router';

import '../css/Contact.css';
import Header from './A-WebElements/Header';
import Footer from './A-WebElements/Footer';
import contactHeader from '../img/contactPic.png';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

const Contact = () => {
	return (
		<div className="decalPage">
			<Header name="Contact Us" image={contactHeader} />
			
			<Container fluid className="decal">
					
				<Row className="top-row">
					<p>
					For general inquiries, please use the submission box below. We’ll make sure to answer your question as soon as we can!
					</p>
					
				</Row>
				
				<Row className="middle-row">
					<p>
						
						
					</p>
				</Row>
				<Row className="bottom-row">
					<p>
						
						</p>
				</Row>
			</Container>
			<Footer />
		</div>
	);
};

export default Contact;
