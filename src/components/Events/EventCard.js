import React from 'react';

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import '../../css/EventCard.scss';

const EventCard = (props) => {
	return (
		<div className="eventCard">
			<section className="block">
				<Container className="personBlock">
					<Row xs={1} md={2} lg={2}>
						<Col>
							<img src={props.image} alt="Event Person" className="personPic" />
						</Col>

						<Col>
							<h3>{props.name}</h3>
							<hr></hr>
							<p className="title">{props.title}</p>
							<p className="date">{props.date}</p>
							<p className="content">{props.content}</p>
							<p className="content">
								{props.extra} <br></br>
								<br></br>
								<a
									target="_blank"
									rel="noopener noreferrer"
									className="blockLink"
									href={props.link}
									style={{
										textDecoration: 'none',
									}}
								>
									<u>Click for the Facebook Link</u>
								</a>
								&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
								<a
									target="_blank"
									rel="noopener noreferrer"
									className="blockLink"
									href={props.google}
									style={{
										textDecoration: 'none',
									}}
								>
									<u>Add to Google Calendar</u>
								</a>
							</p>
							<p className="passed-event"> {props.passed}</p>
						</Col>
					</Row>
				</Container>
			</section>
		</div>
	);
};

export default EventCard;
