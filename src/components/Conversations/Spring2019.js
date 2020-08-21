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
				<div className="header-2019spring">
					<h2>
						The Berkeley Forum Announces Spring 2019 <br></br>Event Lineup
					</h2>
				</div>
				<Row>
					<p>The Berkeley Forum Announces Spring 2019 Event Lineup </p>
				</Row>
				<Row>
					<p>January 21, 2019</p>
				</Row>

				<Row>
					<p>
						BERKELEY, California―Today, the Berkeley Forum announced a selection
						of events from its Spring 2019 lineup, which includes 15 debates,
						panels, and talks with leaders from various fields and disciplines.
					</p>
				</Row>
				<Row>
					<p>
						“I am delighted to present this semester’s outstanding lineup. Our
						members have worked tirelessly to bring exciting speakers, including
						experts in human rights, perfumery and urban planning” said Michael
						Chien, President of the Berkeley Forum. “I encourage the Berkeley
						student body to come to events that interest them, so that they can
						learn, engage and hopefully take something away from the
						experience.”
						<br />
						<br />
						The spring lineup is tentative and subject to minor changes. For
						more information and the latest updates, please visit our website.
						<br />
						<br />
						Registration is required. You can view more details about the
						announced events and sign up to receive notifications when tickets
						become available on our “Upcoming Events” page. All events are open
						to the public and free for UC Berkeley students, faculty, and staff.
					</p>
				</Row>

				<Row>
					<p
						className="italics"
						style={{ borderTop: 'solid', paddingTop: '1rem' }}
					>
						<strong>Spring 2019 Lineup</strong>
					</p>
				</Row>
				<Row>
					<p className="underline">
						<strong>January:</strong>
					</p>
				</Row>
				<Row>
					<p>
						<strong>
							Dixon Osborn, Executive Director of the Center for Justice and
							Accountability
						</strong>
						<br />
						“Bringing Genocidaires to Justice: The Perspective of an NGO in the
						Trenches” <br />
						January 23, 2019
					</p>
				</Row>
				<Row>
					<p className="underline">
						<strong>February:</strong>
					</p>
				</Row>
				<Row>
					<p>
						<strong>Julie Bloom, Deputy Editor of the New York Times</strong>
						<br />
						February 4, 2019
					</p>
				</Row>
				<Row>
					<p>
						<strong>Kate Wagner, Creator of McMansion Hell</strong>
						<br />
						February 5, 2019
					</p>
				</Row>
				<Row>
					<p>
						<strong>Mandy Aftel, Founder of Aftelier Perfumes</strong>
						<br />
						“The Aftel Archive of Curious Scents: The Fascinating World of
						Natural Essences” <br /> February 11, 2019 <br />
					</p>
				</Row>
				<Row>
					<p>
						<strong>Lloyd B. Minor, Dean of Stanford Medical School</strong>
						<br />
						“Discovery and Diversity: Critical Factors to Tomorrow’s Health
						Care”
						<br /> February 12, 2019
						<br />
					</p>
				</Row>
				<Row>
					<p>
						<strong>Andrew Chau, Co-Founder of Boba Guys</strong>
						<br />
						February 14, 2019
						<br />
					</p>
				</Row>
				<Row>
					<p>
						<strong>
							Sonja Lyubomirsky, Psychology Professor and Author of the How of
							Happiness
						</strong>
						<br />
						“The How, What, and Why of Happiness”
						<br /> February 20, 2019
						<br />
					</p>
				</Row>
				<Row>
					<p>
						<strong>Tori Baisden, Designer of the Museum of Ice Cream</strong>
						<br />
						February 26, 2019
						<br />
					</p>
				</Row>
				<Row>
					<p className="underline">
						<strong>March:</strong>
					</p>
				</Row>
				<Row>
					<p>
						<strong>Natalie Coughlin, 12-Time Olympic Swimming Medalist</strong>
						<br />
						“A Conversation with Olympic Swimmer Natalie Coughlin”
						<br />
						March 4, 2019
						<br />
					</p>
				</Row>
				<Row>
					<p>
						<strong>
							Danielle Sered, Executive Director of Common Justice
						</strong>
						<br />
						“Why Mass Incarceration Will Never Keep Us Safe and What Will”
						<br />
						March 12, 2019
						<br />
					</p>
				</Row>
				<Row>
					<p>
						<strong>Yaron Brook, Chairman of the Ayn Rand Institute</strong>
						<br />
						“The Morality of Capitalism”
						<br />
						March 14, 2019
						<br />
					</p>
				</Row>
				<Row>
					<p>
						<strong>Megan Grassell, Founder of Yellowberry</strong>
						<br />
						March 21, 2019
						<br />
					</p>
				</Row>
				<Row>
					<p className="underline">
						<strong>April:</strong>
					</p>
				</Row>
				<Row>
					<p>
						<strong>Joe DeLoss, Owner of Hot Chicken Takeover</strong>
						<br />
						“Innovating HR for Good – How a social enterprise restaurant is
						outperforming the industry and supporting men and women affected by
						criminal records”
						<br />
						April 10, 2019
						<br />
					</p>
				</Row>
				<Row>
					<p>
						<strong>
							Yoon Choi, Chief Executive Officer of College Spring
						</strong>
						<br />
						“Tackling Inequity in SAT Preparation and College Access”
						<br />
						April 15, 2019
						<br />
					</p>
				</Row>
				<Row>
					<p>
						<strong>Panel:</strong> Digital Privacy
						<br />
						April 23, 2019
						<br />
					</p>
				</Row>
				<Row>
					<p>
						The Forum’s team is working to confirm more events for the Spring
						2019 session. All dates and speakers are subject to change. More
						information about these events and other upcoming events will be
						shared on the Berkeley Forum’s website and social media pages.
						Follow the Berkeley Forum on Facebook, Twitter, and Instagram and
						subscribe to our mailing list for the latest updates.
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
						Our Team page of our website. If you’re interested in joining the
						Forum’s staff, you can apply here before Friday, February 1 at 12:00
						AM.
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
