import React, { Component } from 'react';
import CardImage from '../../img/BusinessCard.png';

import '../../css/Card.css';

const Card = () => {
	return (
		<div className="cardStuff">
			<img className="image" src={CardImage}></img>
			<div className="cardBack">
				<p>
					The Berkeley Forum at the <br></br>University of California
				</p>

				<p>
					432 Eshelman Hall, <br></br>Berkeley, CA, 94720-4520
				</p>

				<p>
					General Inquiries <br></br>inquries@berkeley.edu
				</p>
			</div>
		</div>
	);
};

export default Card;
