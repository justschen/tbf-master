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
				<div className="header-fall2019">
					<h2>Berkeley Forum's Fall 2019 Lineup</h2>
				</div>

				<Row>
					<p>The Berkeley Forum Announces Fall 2019 Event Lineup </p>
				</Row>
				<Row>
					<p>September 4, 2019</p>
				</Row>
				<Row>
					<p>
						BERKELEY, California―Today, the Berkeley Forum announced a selection
						of events from its Fall 2019 lineup, which includes 17 debates,
						panels, and talks with leaders from various fields and disciplines.
					</p>
				</Row>
				<Row>
					<p>
						“I am very excited to announce the Berkeley Forum’s event lineup for
						Fall 2019. Our members have gone above and beyond in curating a
						well-rounded slate of speakers, including experts in indigenous
						affairs, virtual reality, and graphic novels. My hope is for our
						audiences to both relate to and be challenged by the unique
						perspectives and lived experiences of our speakers,” said Tanya
						Mahadwar, President of the Berkeley Forum. “We are honored to host
						speakers such as Karen Diver, Sanjay Dastoor, and Jill Tarter. I am
						incredibly proud of our organization for contributing to the larger
						ideas-driven culture of Berkeley.””
					</p>
				</Row>
				<Row>
					<p>
						Registration is required. You can view more details about the
						announced events and sign up to receive notifications when tickets
						become available on our “Events” page. All events are open to the
						public and free for UC Berkeley students, faculty, and staff.
					</p>
				</Row>

				<Row>
					<p
						className="italics"
						style={{ borderTop: 'solid', paddingTop: '1rem' }}
					>
						<strong>Fall 2019 Lineup</strong>
					</p>
				</Row>
				<Row>
					<p className="underline">
						<strong>September:</strong>
					</p>
				</Row>
				<Row>
					<p>
						<strong>
							Jill Tarter, astronomer and former Director of the Center for SETI
							Research (Search for Extraterrestrial Intelligence)
						</strong>
						<br></br>
						“Technosignatures: What Are They, And How Might We Find Them?”
						<br />
						September 16, 2019
					</p>
				</Row>
				<Row>
					<p>
						<strong>Fiona Ma, California State Treasurer</strong>
						<br />
						“Bank with California State Treasurer Fiona Ma” – In collaboration
						with the Goldman School of Public Policy
						<br />
						September 16, 2019
					</p>
				</Row>
				<Row>
					<p>
						<strong>
							Gene Luen Yang, graphic novelist and author of{' '}
							<i>American Born Chinese</i>
							<br></br>
							“Asian and Asian-American Representation through Creative Mediums”
						</strong>
						<br />
						September 19, 2019,
					</p>
				</Row>
				<Row>
					<p>
						<strong>Travis Rosbach, founder of Hydroflask</strong>
						<br />
						“Engineering a Refreshing Solution”
						<br />
						September 24, 2019
					</p>
				</Row>
				<Row>
					<p>
						<strong>
							Marianne Williamson, author, activist, and spiritual leader
						</strong>
						<br />
						“Renewing the Spirituality of Democracy”
						<br />
						September 25, 2019
					</p>
				</Row>
				<Row>
					<p>
						<strong>
							Alexandra Waterbury, ballerina, model and #MeToo activist
						</strong>
						<br />
						“Breaking the #MeToo Silence in Ballet: Alexandra Waterbury at the
						Berkeley Forum”
						<br />
						September 26, 2019
					</p>
				</Row>

				<Row>
					<p className="underline">
						<strong>October:</strong>
					</p>
				</Row>
				<Row>
					<p>
						<strong>
							Kristin Kirkpatrick, award-winning dietitian and best-selling
							author
						</strong>
						<br />
						“The Impact of Social Media on Wellness”
						<br />
						October 3, 2019
					</p>
				</Row>
				<Row>
					<p>
						<strong>
							Michele Lamont, Harvard professor of Sociology, African-American
							Studies, and European Studies
						</strong>
						<br />
						“Evaluating Current Society with a Sociological Lens”
						<br />
						October 4, 2019
					</p>
				</Row>
				<Row>
					<p>
						<strong>
							Kyle Hanagami, internationally-renowned choreographer
						</strong>
						<br />
						“The Direction of the Dance Industry”
						<br />
						October 7, 2019
					</p>
				</Row>
				<Row>
					<p>
						<strong>
							Karen Diver, former Special Assistant to President Obama on Native
							American Affairs
						</strong>
						<br />
						“The State of Native Nations”
						<br />
						October 8, 2019
					</p>
				</Row>
				<Row>
					<p>
						<strong>
							Sanjay Dastoor, founder of Boosted and CEO/co-founder of Skip
						</strong>
						<br />
						“The Evolution of the Transportation Industry”
						<br />
						October 14, 2019
					</p>
				</Row>
				<Row>
					<p>
						<strong>
							Jaron Lanier, founding father of VR and activist against social
							media
						</strong>
						<br />
						“Understanding BART”
						<br />
						October 21, 2019
					</p>
				</Row>

				<Row>
					<p className="underline">
						<strong>November:</strong>
					</p>
				</Row>
				<Row>
					<p>
						<strong>
							A Debate on Breaking Up Big Tech at the Berkeley Forum
						</strong>
						<br />
						November 12, 2019
					</p>
				</Row>
				<Row>
					<p>
						<strong>
							Discussing the Harsh Realities of Homelessness and Food Insecurity
							in Bay Area: A Panel by the Berkeley Forum
						</strong>
						<br />
						November 14, 2019
					</p>
				</Row>
				<Row>
					<p>
						<strong>
							Unchained? A Debate on Reparations for Slavery at the Berkeley
							Forum
						</strong>
						<br />
						November 21, 2019
					</p>
				</Row>
				<Row>
					<p className="underline">
						<strong>December:</strong>
					</p>
				</Row>
				<Row>
					<p>
						<strong>
							Hasini Jayatilaka, Stanford researcher pioneering
							metastasis-slowing technology
						</strong>
						<br />
						“Slowing the Spread of Cancer”
						<br />
						December 4, 2019
					</p>
				</Row>

				<Row>
					<p>
						<strong>About the Berkeley Forum</strong>
					</p>
				</Row>
				<Row>
					<p>
						The Berkeley Forum is a non-partisan, student-run organization at
						the University of California, Berkeley. Established in 2012, the
						Forum hosts debates, panels, and talks by leading experts from a
						variety of fields. The Forum exists to provide the Berkeley
						community with a space for the free expression and debate of a wide
						range of viewpoints.
					</p>
				</Row>
				<Row>
					<p>
						We have welcomed over 5,000 attendees to nearly 100 events. The
						Forum’s events have been covered by many media outlets, including
						the New York Times, Politico, CNN, the Associated Press, C-SPAN, and
						the San Francisco Chronicle.
					</p>
				</Row>
				<Row>
					<p>
						Since its founding, the Forum has hosted a number of distinguished
						guests, including Senator Rand Paul, PayPal co-founder Peter Thiel,
						ACLU President Susan Herman, Khan Academy founder Salman Khan,
						Director of Saturday Night Live Don Roy King and U.S. Secretary of
						Housing and Urban Development Julián Castro.
					</p>
				</Row>
				<Row>
					<p>
						The Forum’s events are only possible because of the dedication and
						hard work of our members. Learn more about our members on the Meet
						Our Team page of our website.
					</p>
				</Row>

				<Row>
					<p>
						<strong>Press Contact</strong>
					</p>
				</Row>
				<Row>
					<p>
						Ian Wong
						<br />
						Press Manager
						<br /> press@forum.berkeley.edu
					</p>
				</Row>
			</Container>
			<Footer />
		</div>
	);
};

export default RandPaul;
