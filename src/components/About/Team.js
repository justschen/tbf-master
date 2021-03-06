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

import { execData, directorData, memberData } from './data/TeamData.js';

const Team = () => {
	return (
		<div className="team">
			<Header name="Meet Our Team" image={TeamHeader} />
			<Container fluid className="profiles-desktop">
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
					<Link to="/advisory">Advisory Committee</Link>
					<Link to="/committees">Our Committees</Link>
					<Link to="/legacy">Legacy</Link>
				</Row>
			</Container>
			<Container fluid className="profiles-mobile">
				<Row>
					<h1>Executive Committee</h1>
				</Row>
				{execData.map((member) => (
					<Row>
						<TeamCard
							bio={member[2]}
							name={member[0]}
							role={member[1]}
							image={member[3]}
						/>
					</Row>
				))}
				<Row>
					<h1>Directors</h1>
				</Row>
				{directorData.map((member) => (
					<Row>
						<TeamCard
							bio={member[2]}
							name={member[0]}
							role={member[1]}
							image={member[3]}
						/>
					</Row>
				))}
				<Row>
					<h1>Members</h1>
				</Row>
				{memberData.map((member) => (
					<Row>
						<TeamCard
							bio={member[2]}
							name={member[0]}
							role={member[1]}
							image={member[3]}
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

export default Team;
