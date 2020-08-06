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
					<Col className="randPaul-link">
					<Link to="/randPaul">
                		<p >Introducing the Berkeley Forum's <br></br>Spring 2020 Lineup</p>
            		</Link>
					<h6>April 17, 2019</h6>
					</Col>
					<Col className="articleLink">
					<Link to="/randPaul">
                		<p >2019 Crowdfunding Campaign <br></br>Update</p>
						<h6>April 17, 2019</h6>
            		</Link>
					</Col>

				</Row>
				<Row className="top-row">
				<Col className="articleLink">
					<Link to="/randPaul">
                		<p >Statement Regarding the Cancellation of the Marianne Wiliamson Event</p>
            		</Link>
					<h6>April 17, 2019</h6>
					</Col>
					<Col className="articleLink">
					<Link to="/randPaul">
                		<p >Introducing the Berkeley Forum's <br></br>Fall 2019 Lineup</p>
            		</Link>
					<h6>April 17, 2019</h6>
					</Col>
				</Row>
				<Row className="top-row">
				<Col className="articleLink">
					<Link to="/randPaul">
                		<p >"Discourse at Berkeley": The Berkeley Forum DeCal</p>
            		</Link>
					<h6>April 17, 2019</h6>
					</Col>
					<Col className="articleLink">
					<Link to="/randPaul">
                		<p >US Senator Rand Paul at the Berkeley Forum</p>
            		</Link>
					<h6>April 17, 2019</h6>
					</Col>
				
				</Row>
				<Row className="top-row">
				<Col className="articleLink">
					<Link to="/randPaul">
                		<p >Chief Diversity Officer for the Kapor Center Ellen Pao at the Berkeley Forum</p>
            		</Link>
					<h6>April 17, 2019</h6>
					</Col>
					<Col className="articleLink">
					<Link to="/randPaul">
                		<p >Former Secretary of Homeland Security Jeh Johnson at the Berkeley Forum</p>
            		</Link>
					<h6>April 17, 2019</h6>
					</Col>
				
				</Row>

				<Row className="top-row">
				<Col className="articleLink">
					<Link to="/randPaul">
                		<p >CRISPR Pioneer Feng Zhang at the Berkeley Forum</p>
            		</Link>
					<h6>April 17, 2019</h6>
					</Col>
					<Col className="articleLink">
					<Link to="/randPaul">
                		<p >Co-Founder of Axios and Politico Jim VandeHei at the Berkeley Forum</p>
            		</Link>
					<h6>April 17, 2019</h6>
					</Col>
				
				</Row>

				<Row className="top-row">
				<Col className="articleLink">
					<Link to="/randPaul">
                		<p >Statement Regarding Cancellation of the Co-Founders of Cards Against Humanity Event</p>
            		</Link>
					<h6>April 17, 2019</h6>
					</Col>
					<Col className="articleLink">
					<Link to="/randPaul">
                		<p >Co-Host of The Young Turks Ana Kasparian at the Berkeley Forum</p>
            		</Link>
					<h6>April 17, 2019</h6>
					</Col>
				
				</Row>

				<Row className="top-row">
				<Col className="articleLink">
					<Link to="/randPaul">
                		<p >VSauce Creator Michael Stevens at the Berkeley Forum</p>
            		</Link>
					<h6>April 17, 2019</h6>
					</Col>
					<Col className="articleLink">
					<Link to="/randPaul">
                		<p >Former White House Press Secretary Josh Earnest at the Berkeley Forum</p>
            		</Link>
					<h6>April 17, 2019</h6>
					</Col>
				
				</Row>

				<Row className="top-row">
				<Col className="articleLink">
					<Link to="/randPaul">
                		<p >The Berkeley Forum Announces Spring 2019 Event Lineup</p>
            		</Link>
					<h6>April 17, 2019</h6>
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
