import React from 'react';
import { Link } from '@reach/router';

import '../../css/Team.scss';
import TeamHeader from '../../img/team-bg.png';

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';

import Header from '../A-WebElements/Header';
import TeamCard from '../A-WebElements/TeamCard';

import CindyTang from '../../img/bios/Cindy_Tang.png';

const Team = () => {
	return (
		<div className="team">
			<Header name="Meet Our Team" image={TeamHeader} />
			<Container fluid className = "executive-committee">
				<h1>Executive Committee</h1>
				<Row>
					<TeamCard bio="lorem ipsum" name="Aditya" role="VP Internal" image={CindyTang}/>
				</Row>
			</Container>
		</div>
	);
};

export default Team;
