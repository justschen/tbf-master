import React from 'react';
import CardImage from '../../img/BusinessCard.png';
import MobileCard from '../../img/card-mobile.png';

import '../../css/Card.scss';

const Card = () => {
	return (
		<div>
			<div className="card-content">
				<img className="image" alt="card" src={CardImage}></img>
				<div className="card-back">
					<p>
						The Berkeley Forum at the <br></br>University of California
					</p>

					<p>
						432 Eshelman Hall, <br></br>Berkeley, CA, 94720-4520
					</p>

					<p>
						General Inquiries <br></br>info@forum.berkeley.edu
					</p>
				</div>
			</div>

			<div className="contact-mobile">
				<img className="image" alt="card" src={MobileCard}></img>
				<div className="card-back">
					<p>
						The Berkeley Forum at the <br></br>University of California
					</p>

					<p>
						432 Eshelman Hall, <br></br>Berkeley, CA, 94720-4520
					</p>

					<p>
						General Inquiries <br></br>info@forum.berkeley.edu
					</p>
				</div>
			</div>
		</div>
	);
};

export default Card;
