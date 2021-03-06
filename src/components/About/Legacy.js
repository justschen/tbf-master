import React from 'react';
import { Link } from '@reach/router';

import '../../css/Legacy.scss';
import LegacyHeader from '../../img/legacy.png';

import Header from '../A-WebElements/Header';
import Footer from '../A-WebElements/Footer';
import LegacyCard from '../A-WebElements/LegacyCard';

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import { legacyData } from './data/LegacyData.js';

const Legacy = () => {
	return (
		<div className="legacy">
			<Header name="Legacy" image={LegacyHeader} />
			<Container fluid className="profiles-desktop">
				<Row className="introduction">
					<p>
						The Berkeley Forum was founded in 2012 by Pierre Bourbonnais. The
						Forum had its first event the following spring in 2013, a panel on
						the Federal Budget.
					</p>
				</Row>
				<Row>
					<h1>Alumni & Associates</h1>
				</Row>
				<Row>
					{legacyData.map((member) => (
						<Col xs={4}>
							<LegacyCard
								major={member[2]}
								name={member[0]}
								graduation={member[1]}
								memory={member[3]}
								future={member[4]}
								image={member[5]}
								linkedIn={member[6]}
							/>
						</Col>
					))}
				</Row>

				<Row className="bottom-navbar">
					<Link to="/advisory">Advisory Committee</Link>
					<Link to="/committees">Our Committees</Link>
					<Link to="/legacy">Legacy</Link>
				</Row>
			</Container>
			<Container fluid className="profiles-mobile">
				<Row className="introduction">
					<p>
						The Berkeley Forum was founded in 2012 by Pierre Bourbonnais. The
						Forum had its first event the following spring in 2013, a panel on
						the Federal Budget.
					</p>
				</Row>
				<Row>
					<h1>Alumni & Associates</h1>
				</Row>
				{legacyData.map((member) => (
					<Row>
						<LegacyCard
							major={member[2]}
							name={member[0]}
							graduation={member[1]}
							memory={member[3]}
							future={member[4]}
							image={member[5]}
							linkedIn={member[6]}
						/>
					</Row>
				))}
				<Row className="bottom-navbar">
					<Link to="/advisory">Advisory Committee</Link>
					<Link to="/committees">Our Committees</Link>
					<Link to="/legacy">Legacy</Link>
				</Row>
			</Container>
			<Footer />
		</div>
	);
};

export default Legacy;
