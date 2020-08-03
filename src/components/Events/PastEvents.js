import React from 'react';
import { Link } from '@reach/router';

import Button from 'react-bootstrap/Button';

import '../../css/PastEvents.css';
import PosterHeader from '../../img/pastEvents.png';
import Julie from '../../img/julie.png'
import Lloyd from '../../img/lloyd.png'

import Header from '../A-WebElements/Header';
import Footer from '../A-WebElements/Footer';


import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

const PastEvents = () => {
	return (
		<div className="past">
			<Header name="Past Events" image={PosterHeader} />
			
			
			<section className="block">
			
				<Container className="personBlock">
					<Row>
						<Col>
							<img src={Julie} alt="Picture of stuff" className="juliePic"/>
						</Col>

						<Col>
							<h3>Julie Bloom</h3>
							<hr></hr>
							<p className="title">Deputy Editor on the New York Times National Desk</p>
							<p className="date">February 4, 2019 | 6:00pm - 7:30pm | 125 Morrison Hall, UC Berkeley</p>
							<p className="content">In the first half of the twentieth century, the average New York Times editor might never see California, the average New York Times reader might not have either. Much has changed since then. The Times now has more than two dozen journalists based up and down the state and more readers in the state than anywhere else in the country, including New York. Ms. Bloom will talk. . .</p>
						</Col>
					</Row>
				
				</Container>
				
				
				
			</section>

			<section className="block">
			
				<Container className="personBlock">
					<Row>
						<Col>
							<img src={Lloyd} alt="Picture of stuff" className="lloydPic"/>
						</Col>

						<Col>
							<h3>Lloyd B. Minor</h3>
							<hr></hr>
							<p className="title">Deputy Editor on the New York Times National Desk</p>
							<p className="date">February 4, 2019 | 6:00pm - 7:30pm | 125 Morrison Hall, UC Berkeley</p>
							<p className="content">How are medical schools adapting to today’s greatest challenges? Join the Dean of Stanford University School of Medicine, Lloyd B. Minor M.D., for a discussion on the ways in which medical education is changing and responding to unique social demands. Dean Minor will specifically discuss the challenges in biomedical discovery and the vital importance of. . . </p>
						</Col>
					</Row>
				
				</Container>
				
				
				
			</section>









			<Footer></Footer>
		</div>
	);
};

export default PastEvents;