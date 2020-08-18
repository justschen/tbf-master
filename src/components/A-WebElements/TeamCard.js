import React from 'react';
import { Link } from '@reach/router';

import '../../css/TeamCard.scss';

const TeamCard = (props) => {
	const bg = {
		backgroundImage: `url(${props.image})`,
		background: props.image,
	};
	return (
		<div className="team-card">
			<div className="headshot">
				<img src={props.image} />
				<p className="bio">{props.bio}</p>
			</div>
			<h4 className="name">{props.name}</h4>
			<p className="role">{props.role}</p>
		</div>
	);
};

export default TeamCard;
