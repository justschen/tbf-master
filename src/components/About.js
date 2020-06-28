import React from 'react';
import { Link } from '@reach/router';

import '../css/About.css';

const About = () => {
	return (
		<div>
			<h1>this is about</h1>
			<Link to="/">to home</Link>
		</div>
	);
};

export default About;
