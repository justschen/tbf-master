import React from 'react';
import { Link } from '@reach/router';

import linkedIn from '../../img/bios/LinkedIN.png';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import '../../css/EventCard.scss';

const EventCard = (props) => {
	return (
		<div className="eventCard">
			<section className="block">
				<Container className="personBlock">
					<a
						className="blockLink"
						href={props.link}
						style={{
							textDecoration: 'none',
						}}
					>
						<Row>
							<Col>
								<img
									src={props.image}
									alt="Picture of stuff"
									className="personPic"
								/>
							</Col>

							<Col>
								<h3>{props.name}</h3>
								<hr></hr>
								<p className="title">{props.title}l</p>
								<p className="date">{props.date}</p>
								<p className="content">
									{props.content} . . . <u>Click to see more</u>
								</p>
							</Col>
						</Row>
					</a>
				</Container>
			</section>
		</div>
	);
};

export default EventCard;
