import React from 'react';
import { Link } from '@reach/router';

import '../../css/Team.scss';
import TeamHeader from '../../img/team-bg.png';

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import Header from '../A-WebElements/Header';
import Footer from '../A-WebElements/Footer';
import TeamCard from '../A-WebElements/TeamCard';

import { execData, directorData, memberData } from './TeamData.js';

const Team = () => {
	return (
		<div className="team">
			<Header name="Meet Our Team" image={TeamHeader} />
			<Container fluid className="profiles">
				<Row>
					<h1>Executive Committee</h1>
				</Row>
				<Row>
					{execData.map((member) => (
						<Col xs={4}>
							<TeamCard
								bio={member[2]}
								name={member[0]}
								role={member[1]}
								image={member[3]}
							/>
						</Col>
					))}
				</Row>
				<Row>
					<h1 className="section-divider">Directors</h1>
				</Row>
				<Row>
					{directorData.map((member) => (
						<Col xs={4}>
							<TeamCard
								bio={member[2]}
								name={member[0]}
								role={member[1]}
								image={member[3]}
							/>
						</Col>
					))}
				</Row>
				<Row>
					<h1 className="section-divider">Members</h1>
				</Row>
				<Row>
					{memberData.map((member) => (
						<Col xs={4}>
							<TeamCard
								bio={member[2]}
								name={member[0]}
								role={member[1]}
								image={member[3]}
							/>
							<p className="member-label">Committee Member</p>
						</Col>
					))}
				</Row>
				<Row className="bottom-navbar">
					<Link to="/advisory">
						<p className="link-text">Advisory Committee</p>
					</Link>
					<Link to="/committees">
						<p className="link-text">Our Committees</p>
					</Link>
					<Link to="/legacy">
						<p className="link-text">Legacy</p>
					</Link>
				</Row>
			</Container>
			<Footer />
		</div>
	);
};

export default Team;
