import React from 'react';
import { Link } from '@reach/router';



import Button from 'react-bootstrap/Button';

import ANyName from '../img/medicatio.png';

import '../css/Landing.css';

const Landing = () => {
	return (
		<div className="landing">
			<h1>Landing Page</h1>
			<img src={ANyName} alt="whatevr" />

		
		</div>
	);
};

export default Landing;
