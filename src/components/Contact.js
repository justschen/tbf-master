import React from 'react';
import { useState } from 'react';

import '../css/Contact.css';
import Header from './A-WebElements/Header';
import Footer from './A-WebElements/Footer';
import contactHeader from '../img/contactPic.png';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';

import Slider from '../img/Slider.png';
import Card from './A-WebElements/Card';

import RGF from 'react-google-forms';

const Contact = () => {
	const ToggleClass = () => {
		const oldClassName = document.getElementById('test').className;
		const newClassName =
			oldClassName === 'transform' ? 'transform-card' : 'transform';
		document.getElementById('test').className = newClassName;
	};

	const ToggleForm = () => {
		const oldClassName = document.getElementById('test1').className;
		const newClassName =
			oldClassName === 'not-hidden-text' ? 'hidden-text' : 'not-hidden-text';
		document.getElementById('test1').className = newClassName;
	};

	const ToggleDestroy = () => {
		const oldClassName = document.getElementById('test2').className;
		const newClassName =
			oldClassName === 'hidden-form' ? 'non-hidden-form' : 'hidden-form';
		document.getElementById('test2').className = newClassName;
	};

	return (
		<div className="fullpage">
			<div className="contactPage">
				<Header name="Contact Us" image={contactHeader} />
				<Container fluid className="decal">
					<Row className="top-row">
						<p>
							For general inquiries, please use the submission box below. We’ll
							make sure to answer your question as soon as we can! You can find
							our contact information down below.
						</p>
					</Row>

					<Row className="middle-row">
						<p></p>
					</Row>
					<Row className="bottom-row">
						<p></p>
					</Row>
				</Container>
				<div className="outside">
					<div className="formContainer">
						<h2 id="test1" className="hidden-text">
							Thank you for submitting a response!
						</h2>

						<div className="non-hidden-form" id="test2">
							<form
								target="_blank"
								rel="noopener noreferrer"
								onSubmitCapture={ToggleForm}
								onSubmit={ToggleDestroy}
								action="https://docs.google.com/forms/u/2/d/e/1FAIpQLSeOLhwMZlugYyKMIBliQq901MkFazcQjblB0N_ELLLGg8yqkA/formResponse"
								method="POST"
								id="mG61Hd"
							>
								<p>
									<label for="first">NAME/ORGANIZATION</label>
									<input
										type="text"
										required
										name="entry.290479036"
										id="first"
										placeholder="Please enter your name or organization."
									/>
								</p>

								<p class="email">
									<label for="first">EMAIL ADDRESS</label>
									<input
										type="text"
										required
										name="entry.913134178"
										id="first"
										placeholder="Please enter your email address."
									/>
								</p>
								<p>
									<label for="first">MESSAGE</label>
									<textarea
										type="text"
										required
										name="entry.1166173655"
										id="first"
										placeholder="Please enter your message."
										class="big"
										style={{
											height: '120px',
										}}
									/>
								</p>
								<p>
									<input id="submit" type="submit" value="Send message" />
								</p>
							</form>
						</div>
					</div>
				</div>

				<div className="contact-desktop">
					<div className="clickUp">
						<p>
							Click on the blue sleeve <br></br>for our business card!
						</p>
					</div>

					<div id="test" className="transform-card">
						<Card />
					</div>

					<button className="hidbutton" onClick={ToggleClass}>
						<img src={Slider} alt="BusinessCard" className="slider" />
					</button>
				</div>

				<div className="contact-mobile">
					<Card />
				</div>

				<Row className="bottom-space">
					<p></p>
				</Row>

				<Footer />
			</div>
		</div>
	);
};

export default Contact;
