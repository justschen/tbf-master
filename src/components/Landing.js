import React from 'react';
import { Link } from '@reach/router';

import Button from 'react-bootstrap/Button';

import ANyName from '../img/medicatio.png';

import '../css/Landing.css';

const Landing = () => {
	return (
		<div className="landing">
			<h1>wassup</h1>
			<img src={ANyName} alt="whatevr" />
			<Link to="/about">
				<Button className="my-button">to about</Button>
			</Link>
		</div>
	);
};

export default Landing;
