import React from 'react';

import '../../css/TeamCard.scss';

const TeamCard = (props) => {
	return (
		<div className="team-card">
			<div className="headshot">
				<img src={props.image} className="portrait" />
				<p className="bio">{props.bio}</p>
			</div>
			<h4 className="name">{props.name}</h4>
			<p className="role">{props.role}</p>
		</div>
	);
};

export default TeamCard;
