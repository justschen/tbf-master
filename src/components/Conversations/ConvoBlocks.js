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
					<Col className="blank">
					<Link to="/lineup">
                		<p >Introducing the Berkeley Forum's <br></br>Spring 2020 Lineup</p>
						<h6>January 27, 2020</h6>
            		</Link>
					
					</Col>
					<Col className="blank">
					<Link to="/randPaul">
                		<p >2019 Crowdfunding Campaign <br></br>Update</p>
						<h6>Novermber 20, 2019</h6>
            		</Link>
					</Col>

				</Row>
				<Row className="">
				<Col className="blank">
					<Link to="/randPaul">
                		<p >Statement Regarding the Cancellation of the Marianne Wiliamson Event</p>
						<h6>September 14, 2019</h6>
            		</Link>
					
					</Col>
					<Col className="lineup1">
					<Link to="/randPaul">
                		<p >Introducing the Berkeley Forum's <br></br>Fall 2019 Lineup</p>
						<h6>September 4, 2019</h6>
            		</Link>
					
					</Col>
				</Row>
				<Row className="top-row">
				<Col className="discourse">
					<Link to="/randPaul">
                		<p >"Discourse at Berkeley": The Berkeley Forum DeCal</p>
						<h6>August 22, 2019</h6>
            		</Link>
					
					</Col>
					<Col className="rand">
					<Link to="/randPaul">
                		<p >US Senator Rand Paul at the Berkeley Forum</p>
							<h6>April 17, 2019</h6>
            		</Link>
					
					</Col>
				
				</Row>
				<Row className="top-row">
				<Col className="ellen">
					<Link to="/randPaul">
                		<p >Chief Diversity Officer for the Kapor Center Ellen Pao at the Berkeley Forum</p>
							<h6>April 16, 2019</h6>
            		</Link>
					
					</Col>
					<Col className="homeland">
					<Link to="/randPaul">
                		<p >Former Secretary of Homeland Security Jeh Johnson at the Berkeley Forum</p>	
						<h6>April 16, 2019</h6>
            		</Link>
				
					</Col>
				
				</Row>

				<Row className="top-row">
				<Col className="feng">
					<Link to="/randPaul">
                		<p >CRISPR Pioneer Feng Zhang at the Berkeley Forum</p>
						<h6>April 8, 2019</h6>
            		</Link>
					
					</Col>
					<Col className="politico">
					<Link to="/randPaul">
                		<p >Co-Founder of Axios and Politico Jim VandeHei at the Berkeley Forum</p>
						<h6>March 19, 2019</h6>
            		</Link>
					
					</Col>
				
				</Row>

				<Row className="top-row">
				<Col className="blank">
					<Link to="/cancellation">
                		<p >Cancellation of the Co-Founders of Cards Against Humanity Event</p>
						<h6>March 13, 2019</h6>
            		</Link>
					
					</Col>
					<Col className="host">
					<Link to="/host">
                		<p >Co-Host of The Young Turks Ana Kasparian at the Berkeley Forum</p>
							<h6>March 9, 2019</h6>
            		</Link>
				
					</Col>
				
				</Row>

				<Row className="top-row">
				<Col className="hey-vsauce-michael-here">
					<Link to="/vsauce">
                		<p >VSauce Creator Michael Stevens at the Berkeley Forum</p><
							h6>March 1, 2019</h6>
            		</Link>
					
					</Col>
					<Col className="josh">
					<Link to="/josh">
                		<p >Former White House Press Secretary Josh Earnest at the Berkeley Forum</p>
						<h6>February 22, 2019</h6>
            		</Link>
					
					</Col>
				
				</Row>

				<Row className="top-row">
				<Col className="lineup2">
					<Link to="/randPaul">
                		<p >The Berkeley Forum Announces Spring 2019 Event Lineup</p>
						<h6>January 21, 2019</h6>
            		</Link>
					
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
