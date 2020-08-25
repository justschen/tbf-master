import React from 'react';
import { Link } from '@reach/router';

import '../../css/ConvoBlocks.css';
import ConvoHeader from '../../img/conversationsPic.png';
import Header from '../A-WebElements/Header';
import Footer from '../A-WebElements/Footer';

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

const ConvoBlocks = () => {
	return (
		<div className="convos">
			<Header name="Conversations" image={ConvoHeader} />
			<h3 className="medium">
				We're now on Medium! Check us out here or read our past transcripts down
				below.
			</h3>

			<Container fluid className="convo-content">
				<Row classname="top-row" xs={1} md={2} lg={2}>
					<Col className="blank">
						<Link to="/spring-2020-lineup">
							<p>
								Introducing the Berkeley Forum's <br></br>Spring 2020 Lineup
							</p>
							<h6>January 27, 2020</h6>
						</Link>
					</Col>
					<Col className="blank">
						<Link to="/2019-crowdfunding-update">
							<p>
								2019 Crowdfunding Campaign <br></br>Update
							</p>
							<h6>Novermber 20, 2019</h6>
						</Link>
					</Col>
				</Row>
				<Row classname="top-row" xs={1} md={2} lg={2}>
					<Col className="blank">
						<Link to="/statement-marianne-williamson">
							<p>
								Statement Regarding the Cancellation of the Marianne Wiliamson
								Event
							</p>
							<h6>September 14, 2019</h6>
						</Link>
					</Col>
					<Col className="fall2019">
						<Link to="/fall-2019-lineup">
							<p>
								Introducing the Berkeley Forum's <br></br>Fall 2019 Lineup
							</p>
							<h6>September 4, 2019</h6>
						</Link>
					</Col>
				</Row>
				<Row classname="top-row" xs={1} md={2} lg={2}>
					<Col className="discourse">
						<Link to="/discourse-at-berkeley-decal">
							<p>"Discourse at Berkeley": The Berkeley Forum DeCal</p>
							<h6>August 22, 2019</h6>
						</Link>
					</Col>
					<Col className="rand">
						<Link to="/rand-paul-at-the-berkeley-forum">
							<p>
								US Senator Rand Paul at the Berkeley <br></br>Forum
							</p>
							<h6>April 17, 2019</h6>
						</Link>
					</Col>
				</Row>
				<Row classname="top-row" xs={1} md={2} lg={2}>
					<Col className="ellen">
						<Link to="/ellen-pao-at-the-berkeley-forum">
							<p>
								Chief Diversity Officer for the Kapor Center Ellen Pao at the
								Berkeley Forum
							</p>
							<h6>April 16, 2019</h6>
						</Link>
					</Col>
					<Col className="homeland">
						<Link to="/jeh-johnson-at-the-berkeley-forum">
							<p>
								Former Secretary of Homeland Security Jeh Johnson at the
								Berkeley Forum
							</p>
							<h6>April 16, 2019</h6>
						</Link>
					</Col>
				</Row>

				<Row classname="top-row" xs={1} md={2} lg={2}>
					<Col className="feng">
						<Link to="/feng-zhang-at-the-berkeley-forum">
							<p>CRISPR Pioneer Feng Zhang at the Berkeley Forum</p>
							<h6>April 8, 2019</h6>
						</Link>
					</Col>
					<Col className="politico">
						<Link to="/jim-vandehei-at-the-berkeley-forum">
							<p>
								Co-Founder of Axios and Politico Jim VandeHei at the Berkeley
								Forum
							</p>
							<h6>March 19, 2019</h6>
						</Link>
					</Col>
				</Row>
				<Row classname="top-row" xs={1} md={2} lg={2}>
					<Col className="blank">
						<Link to="/statement-cards-against-humanity">
							<p>
								Cancellation of the Co-Founders of Cards Against Humanity Event
							</p>
							<h6>March 13, 2019</h6>
						</Link>
					</Col>
					<Col className="host">
						<Link to="/ana-kasparian-at-the-berkeley-forum">
							<p>
								Co-Host of The Young Turks Ana Kasparian at the Berkeley Forum
							</p>
							<h6>March 9, 2019</h6>
						</Link>
					</Col>
				</Row>

				<Row classname="top-row" xs={1} md={2} lg={2}>
					<Col className="hey-vsauce-michael-here">
						<Link to="/hey-vsauce-michael-here">
							<p>VSauce Creator Michael Stevens at the Berkeley Forum</p>
							<h6>March 1, 2019</h6>
						</Link>
					</Col>
					<Col className="josh">
						<Link to="/josh-earnest-at-the-berkeley-forum">
							<p>
								Former White House Press Secretary Josh Earnest at the Berkeley
								Forum
							</p>
							<h6>February 22, 2019</h6>
						</Link>
					</Col>
				</Row>

				<Row classname="top-row" xs={1} md={2} lg={2}>
					<Col className="spring">
						<Link to="/spring-2019-lineup">
							<p>
								The Berkeley Forum Announces the Spring 2019 Semester Event
								Lineup
							</p>
							<h6>January 21, 2019</h6>
						</Link>
					</Col>
					<Col></Col>
				</Row>
			</Container>
			<Footer />
		</div>
	);
};

export default ConvoBlocks;
