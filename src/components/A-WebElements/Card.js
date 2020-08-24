import React, { Component } from 'react';
import CardImage from '../../img/BusinessCard.png';
import MobileCard from '../../img/card-mobile.png';

import '../../css/Card.css';

const Card = () => {
	return (
		<div>
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

			<div className="contact-mobile">
				<img className="image" src={MobileCard}></img>
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
		</div>
	);
};

export default Card;
