import React from 'react';
import { Link } from '@reach/router';
import coverPhoto from '../img/mailing-header.jpg';
import Header from './A-WebElements/Header';
import Footer from './A-WebElements/Footer';

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';

import '../css/MailingList.scss';

const MailingList = () => {
	return (
		<div className="mailing">
			<Header name="Mailing List" image={coverPhoto} />
			<Container fluid className="mailing-content">
				<Row>
					<p>
						Our mailing list is a great way to stay up to date on our events. We
						send weekly emails that include upcoming event details, features
						regarding past and future speakers, and other happenings at the
						Forum. If you’re interested in signing up, fill out the form below.
					</p>
				</Row>
			</Container>

			<div id="mc_embed_signup">
				<form
					action="https://gmail.us17.list-manage.com/subscribe/post?u=e701090cb97ff75c7911062fb&amp;id=add8b5909b"
					method="post"
					id="mc-embedded-subscribe-form"
					name="mc-embedded-subscribe-form"
					className="validate"
					target="_blank"
					novalidate
				>
					<div id="mc_embed_signup_scroll">
						<h2>Subscribe</h2>
						<div className="indicates-required">
							<span className="asterisk">*</span> indicates required
						</div>
						<div className="mc-field-group">
							<label for="mce-EMAIL">
								Email Address <span className="asterisk">*</span>
							</label>
							<input
								type="email"
								name="EMAIL"
								className="required email"
								id="mce-EMAIL"
							/>
						</div>
						<div className="mc-field-group">
							<label for="mce-FNAME">First Name </label>
							<input type="text" name="FNAME" className="" id="mce-FNAME" />
						</div>
						<div className="mc-field-group">
							<label for="mce-LNAME">Last Name </label>
							<input type="text" name="LNAME" className="" id="mce-LNAME" />
						</div>
						<div className="mc-field-group size1of2">
							<label for="mce-BIRTHDAY-month">Birthday </label>
							<div className="datefield">
								<span className="small-meta nowrap">( mm / dd )</span>
							</div>
						</div>
						<div id="mce-responses" className="clear">
							<div
								className="response"
								id="mce-error-response"
								style={{ display: 'none' }}
							></div>
							<div
								className="response"
								id="mce-success-response"
								style={{ display: 'none' }}
							></div>
						</div>
						<div
							style={{ position: 'absolute', left: '-5000px' }}
							aria-hidden="true"
						>
							<input
								type="text"
								name="b_e701090cb97ff75c7911062fb_add8b5909b"
								tabindex="-1"
							/>
						</div>
						<div className="clear">
							<input
								type="submit"
								value="Subscribe"
								name="subscribe"
								id="mc-embedded-subscribe"
								className="button"
							/>
						</div>
					</div>
				</form>
			</div>
			<Footer />
		</div>
	);
};

export default MailingList;
