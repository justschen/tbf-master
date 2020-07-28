import React from 'react';
import { Link } from '@reach/router';


import '../../css/Team.css';
import TeamHeader from '../../img/team-bg.png';
import Header from '../A-WebElements/Header';

const Team = () => {
	return (
		<div className="team">
			<Header name="Meet Our Team" image={TeamHeader} />
			<h1>Team Page</h1>
		</div>
	);
};

export default Team;
