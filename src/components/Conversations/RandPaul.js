import React from 'react';
import { Link } from '@reach/router';

import '../../css/RandPaul.css';
import AboutHeader from '../../img/conversationsPic.png';
import Header from '../A-WebElements/Header';
import Footer from '../A-WebElements/Footer';

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

const RandPaul = () => {
	return (
		<div className="conversations">
			<Header/>
			
			<Container fluid className="convo-content">
			<div className="weird">
				<p>
					Stuff
				</p>

		</div>
				<Row classname="top-row">
					
				</Row>
				<Row className="middle-row1">
				
				</Row>
				<Row className="middle-row2">
					
				
				</Row>
				<Row className="last-row">
					
				</Row>
			</Container>
			<Footer />
		</div>
	);
};

export default RandPaul;
