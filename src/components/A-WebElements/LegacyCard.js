import React from 'react';

import '../../css/LegacyCard.scss';

const LegacyCard = (props) => {
	return (
		<div className="legacy-card">
			<div className="headshot">
				<a href={props.linkedIn} className="linkedIn-link">
					<img src={props.image} alt="portrait" className="portrait" />
					<p className="bio">
						<strong>Favorite memory in The Berkeley Forum: </strong>
						{props.memory}
						<br />
						<br />
						<strong>Future: </strong>
						{props.future}
					</p>
				</a>
			</div>
			<h4 className="name">{props.name}</h4>
			<h4 className="graduation">{props.graduation}</h4>
			<p className="major">{props.major}</p>
		</div>
	);
};

export default LegacyCard;
