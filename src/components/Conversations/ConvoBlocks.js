import React from 'react';
import { Link } from '@reach/router';

import '../../css/ConvoBlocks.css';
import AboutHeader from '../../img/conversationsPic.png';
import Header from '../A-WebElements/Header';
import Footer from '../A-WebElements/Footer';

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

const ConvoBlocks = () => {
	return (
		<div className="conversations">
			<Header name="Conversations" image={AboutHeader} />
			<Container fluid className="convo-content">
				
				<Row classname="top-row">
					<Col>
					<Link to="/randPaul" className="landing-link">
                		<p>US Senator Rand Paul at the Berkeley Forum</p>
            		</Link>
					</Col>
					<Col>
						<p>
						Ur boi US Senator Rand Paul at the Berkeley Forum
						</p>
					</Col>

				</Row>
				<Row className="middle-row1">
				<	Col>
						<p>
						US Senator Rand Paul at the Berkeley Forum
						</p>
					</Col>
					<Col>
						<p>
						Ur boi US Senator Rand Paul at the Berkeley Forum
						</p>
					</Col>
				</Row>
				<Row className="middle-row2">
					<Col>
						<p>
						US Senator Rand Paul at the Berkeley Forum
						</p>
					</Col>
					<Col>
						<p>
						Ur boi US Senator Rand Paul at the Berkeley Forum
						</p>
					</Col>
				
				</Row>
				<Row className="last-row">
					<Col>
						<p>
						US Senator Rand Paul at the Berkeley Forum
						</p>
					</Col>
					<Col>
						
					</Col>
				
				</Row>
			</Container>
			<Footer />
		</div>
	);
};

export default ConvoBlocks;
