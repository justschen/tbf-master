import React from 'react';
import { Link } from '@reach/router';

import '../../css/SecretPage.css';
import yikes1 from '../../img/pastEvents.png';

import Header from '../A-WebElements/Header';
import Footer from '../A-WebElements/Footer';

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

const SecretePage = () => {
	return (
		<div className="secret">
			<Header name="Member's Portal" image={yikes1} />
			<h3>Member's Portal</h3>
			<form
				action="https://cprewritten.net"
				style={{
					borderStyle: 'dashed',
					borderWidth: '3px',
					borderColor: '#233748',
					width: '80%',
					margin: 'auto',
					padding: '1rem',
				}}
			>
				<p>
					<label for="first">USER NAME </label>
					<input
						type="text"
						required
						id="first"
						placeholder="Please enter your name."
					/>
				</p>

				<p class="email">
					<label for="first">*PASSWORD* </label>
					<input
						type="text"
						required
						id="first"
						placeholder="Please enter your *password*."
					/>
				</p>
				<p>
					<input
						id="submit"
						type="submit"
						value="Enter"
						style={{ background: '#233748', color: 'white' }}
					/>
				</p>
			</form>
		

			<Footer />
		</div>
	);
};

export default SecretePage;
