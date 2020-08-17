import React from 'react';
import { Link } from '@reach/router';

import '../../css/Blog.scss';
import AboutHeader from '../../img/aboutUsJPG.JPG';
import Header from '../A-WebElements/Header';
import Footer from '../A-WebElements/Footer';


import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

const Lineup = () => {
	return (
		<div className="conversations">
			<Header name="blog"/>
			<Container fluid className="blog-content">
			<div className="header-2020lineup">

				<h2>
				Introducing the Berkeley Forum’s Spring 2020 Lineup
				</h2>
				
			</div>

				<Row>
					<p>
					BERKELEY, California ― Today, the Berkeley Forum announced that it has confirmed 13 events for its Spring 2020 lineup, which includes talks, debates, and panels featuring leaders from various fields and disciplines. The Forum’s team is working to confirm more events for the Spring 2020 session.
					</p>
					
				</Row>
				<Row>
					<p>
					“These events will address some of the most important topics and discussions our world faces right now, and I’m so proud of our club’s tireless work to produce them and keep them free and accessible to the public,” said Charlie McMurry, the current President of the Berkeley Forum. “From entrepreneurs to activists, there’s something for everyone among our lineup of distinguished speakers, and I sincerely hope many first-timers will come to an event this semester and enjoy what we have to offer the campus community.”
					</p>
				</Row>
				<Row>
					
				<p>
				All events are free and open to UC Berkeley-affiliated individuals and the public. Ticket reservation for every event is highly suggested, as there are limited seatings. For more information about our upcoming events and to receive notifications when tickets become available, please visit our Facebook page or subscribe to our mailing list on our website. Follow the Berkeley Forum’s Twitter, and Instagram real time updates before, during, and after the events. 
				</p>
				</Row>
				
	
				<Row  >
					<p className="italics">
					*The Spring lineup is tentative and subject to minor changes. For more information and the latest updates, please visit our website.
					</p>
				</Row>
				<Row  >
					<p>
					_________________________________________________________________
					</p>
				</Row>
			
				<Row style={{
				justifyContent:"flex-start"
				}}>
				
					<p>
					<strong><u>FEBRUARY</u></strong>
					<br></br><br></br>
					<strong> - Rebecca Nagle, two-spirit Cherokee activist</strong>  -  Thursday, February 6
					</p>

					<p>
					<strong>- Ien Chi, Creative Director of Jubilee</strong>  -  Monday, February 10
					</p>
					<p>
					<strong>- Tim Chau, Owner of 3.14 (pi) on Instagram</strong>  -  Tuesday, February 25
					</p>
					<p>
					<strong>- Christian Picciolini, Founder of the Free Radicals Project</strong>  -  Thursday, February 27
					</p>
				
					
				</Row>
				<Row style={{
				justifyContent:"flex-start"
				}}>	
					
						<p>
						<strong><u>MARCH</u></strong>
						<br></br><br></br>
						<strong>- Bias in Machine Learning Panel</strong>  -  Monday, March 2
						</p>
	
						<p>
						<strong>- Affirmative Action Debate</strong>  -  Thursday, March 5 &nbsp
						</p>
						<p>
						<strong>- Andrew Kortina, Co-founder of Venmo</strong>  -  Wednesday, March 11
						</p>
						<p>
						<strong>- Doug Freeman, COO of Patagonia</strong>  -  Tuesday, March 17
						</p>
				
				
					
				</Row>
				
				<Row style={{
				justifyContent:"flex-start"
				}}>
					
					<p>
						<strong><u>APRIL</u></strong>
						<br></br><br></br>
						<strong>- Alice Wong, Founder & Director of the Disability Visibility Project</strong>  -  Monday, April 6
					</p>
					<p>
					<strong>- Hong Kong Protests Panel</strong>  -  Thursday, April 23
					</p>
					<p>
					<strong>- Barry Levenson, Founder & Curator of the National Mustard Museum</strong>  -  Tuesday, April 28
					</p>
			
				</Row>
				<Row style={{
				justifyContent:"left"
				}}>
					
					<p>
						<strong><u>TENTATIVE</u></strong>
						<br></br><br></br>
						<strong>- Steven Lim, Buzzfeed Producer</strong>  -  TBA
					</p>
					
					<p>
					<strong>- Alaleh Kianerci, District Attorney of People v. Brock Turner (2016)</strong>  - TBA
					</p>
			
					
				</Row>
				<Row  >
					<p>
					_________________________________________________________________
					</p>
				</Row>
				<Row  >
					<h3>
					<strong>About The Berkeley Forum</strong> 
					</h3>
				</Row>

				<Row >
					<p>
					The Berkeley Forum is a non-partisan, student-run organization at the University of California, Berkeley. Established in 2012, the Forum hosts debates, panels, and talks by leading experts from a variety of fields. The Forum exists to provide the Berkeley community with a space for the free expression and debate of a wide range of viewpoints. 
					</p>
				</Row>

				<Row  >
					<p>
					We have welcomed over 5,000 attendees to nearly 100 events. The Forum’s events have been covered by many media outlets, including the New York Times, Politico, CNN, the Associated Press, C-SPAN, and the San Francisco Chronicle. 
					</p>
				</Row>

				<Row  >
					<p>
					Since its founding, the Forum has hosted a number of distinguished guests, including Senator Rand Paul, PayPal co-founder Peter Thiel, ACLU President Susan Herman, Khan Academy founder Salman Khan, Director of Saturday Night Live Don Roy King and U.S. Secretary of Housing and Urban Development Julián Castro. 
					</p>
				</Row>

				<Row  >
					<p>
					The Forum’s events are only possible because of the dedication and hard work of our members. Learn more about our members on the Meet Our Team page of our website.
					</p>
				</Row>

				<Row style={{
				justifyContent:"flex-start"
				}}>
					<p>
					<strong>Press Contact</strong>
					<br></br><br></br>
					Da Eun Jung
					<br></br><br></br>
					Communications Project Manager
					<br></br><br></br>
					da-eun.jung@berkeley.edu 
					</p>
				</Row>
			</Container>
			<Footer />
		</div>
	);
};

export default Lineup;
