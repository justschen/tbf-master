import React from 'react';
import { Link } from '@reach/router';

import Button from 'react-bootstrap/Button';

import '../../css/PastEvents.css';
import PosterHeader from '../../img/pastEvents.png';
import Julie from '../../img/julieNew.png';
import Lloyd from '../../img/lloydNew.png';

import Header from '../A-WebElements/Header';
import Footer from '../A-WebElements/Footer';

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

const PersonBlock = () => {
	return (
		<div>
			<section className="block">
				<Container className="personBlock">
					<a
						className="blockLink"
						href="/events"
						style={{
							textDecoration: 'none',
						}}
					>
						<Row>
							<Col>
								<img src={Lloyd} alt="Picture of stuff" className="personPic" />
							</Col>

							<Col>
								<h3>Lloyd B. Minor</h3>
								<hr></hr>
								<p className="title">Dean of Stanford’s Medical School</p>
								<p className="date">
									February 12, 2019 | 6:00pm - 7:30pm | 125 Morrison Hall, UC
									Berkeley
								</p>
								<p className="content">
									How are medical schools adapting to today’s greatest
									challenges? Join the Dean of Stanford University School of
									Medicine, Lloyd B. Minor M.D., for a discussion on the ways in
									which medical education is changing and responding to unique
									social demands. Dean Minor will specifically discuss the
									challenges in biomedical discovery and the vital importance of
									diversity in science . . . <u>Click to see more</u>
								</p>
							</Col>
						</Row>
					</a>
				</Container>
			</section>
		</div>
	);
};

export default PersonBlock;
