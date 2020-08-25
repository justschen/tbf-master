import React from 'react';

import '../../css/PastEvents.css';
import PosterHeader from '../../img/pastEvents.png';

import Header from '../A-WebElements/Header';
import Footer from '../A-WebElements/Footer';

import Row from 'react-bootstrap/Row';

import { currentEventData } from './CurrentEventData.js';
import EventCard from './EventCard.js';

const PastEvents = () => {
	return (
		<div className="past">
			<Header name="calendar" image={PosterHeader} />

			<h4 className="currentEvents">Current/Upcoming Events</h4>
			{currentEventData.map((speaker) => (
				<Row xs={1}>
					<EventCard
						name={speaker[0]}
						title={speaker[1]}
						date={speaker[2]}
						content={speaker[3]}
						image={speaker[4]}
						link={speaker[5]}
						google={speaker[6]}
						extra={speaker[7]}
						className="event-card"
					/>
				</Row>
			))}
			<Row>
				<p></p>
			</Row>

			<Footer></Footer>
		</div>
	);
};

export default PastEvents;
