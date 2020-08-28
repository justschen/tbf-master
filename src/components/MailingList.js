import React from 'react';
import coverPhoto from '../img/mailing-header.jpg';
import Header from './A-WebElements/Header';
import Footer from './A-WebElements/Footer';

import useScript from './Hooks/useScript';

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';

import '../css/MailingList.scss';

const MailingList = () => {
	useScript('https://sibforms.com/forms/end-form/build/main.js');
	window.REQUIRED_CODE_ERROR_MESSAGE = 'Please choose a country code';

	window.EMAIL_INVALID_MESSAGE = window.SMS_INVALID_MESSAGE =
		'The information provided is invalid. Please review the field format and try again.';

	window.REQUIRED_ERROR_MESSAGE = 'This field cannot be left blank. ';

	window.GENERIC_INVALID_MESSAGE =
		'The information provided is invalid. Please review the field format and try again.';

	window.translation = {
		common: {
			selectedList: '{quantity} list selected',
			selectedLists: '{quantity} lists selected',
		},
	};

	var AUTOHIDE = Boolean(1);
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
			<div>
				{/* Begin Sendinblue Form */}
				{/* START - We recommend to place the below code in head tag of your website html  */}
				<style
					dangerouslySetInnerHTML={{
						__html:
							'\n  @font-face {\n    font-display: block;\n    font-family: Roboto;\n    src: url(https://assets.sendinblue.com/font/Roboto/Latin/normal/normal/7529907e9eaf8ebb5220c5f9850e3811.woff2) format("woff2"), url(https://assets.sendinblue.com/font/Roboto/Latin/normal/normal/25c678feafdc175a70922a116c9be3e7.woff) format("woff")\n  }\n\n  @font-face {\n    font-display: fallback;\n    font-family: Roboto;\n    font-weight: 600;\n    src: url(https://assets.sendinblue.com/font/Roboto/Latin/medium/normal/6e9caeeafb1f3491be3e32744bc30440.woff2) format("woff2"), url(https://assets.sendinblue.com/font/Roboto/Latin/medium/normal/71501f0d8d5aa95960f6475d5487d4c2.woff) format("woff")\n  }\n\n  @font-face {\n    font-display: fallback;\n    font-family: Roboto;\n    font-weight: 700;\n    src: url(https://assets.sendinblue.com/font/Roboto/Latin/bold/normal/3ef7cf158f310cf752d5ad08cd0e7e60.woff2) format("woff2"), url(https://assets.sendinblue.com/font/Roboto/Latin/bold/normal/ece3a1d82f18b60bcce0211725c476aa.woff) format("woff")\n  }\n\n  #sib-container input:-ms-input-placeholder {\n    text-align: left;\n    font-family: "Helvetica", sans-serif;\n    color: #c0ccda;\n  }\n\n  #sib-container input::placeholder {\n    text-align: left;\n    font-family: "Helvetica", sans-serif;\n    color: #c0ccda;\n  }\n\n  #sib-container textarea::placeholder {\n    text-align: left;\n    font-family: "Helvetica", sans-serif;\n    color: #c0ccda;\n  }\n',
					}}
				/>
				<link
					rel="stylesheet"
					href="https://sibforms.com/forms/end-form/build/sib-styles.css"
				/>
				{/*  END - We recommend to place the above code in head tag of your website html */}
				{/* START - We recommend to place the below code where you want the form in your website html  */}
				<div
					className="sib-form"
					style={{ textAlign: 'center', backgroundColor: '#EFF2F7' }}
				>
					<div id="sib-form-container" className="sib-form-container">
						<div
							id="error-message"
							className="sib-form-message-panel"
							style={{
								fontSize: 16,
								textAlign: 'left',
								fontFamily: '"Helvetica", sans-serif',
								color: '#661d1d',
								backgroundColor: '#ffeded',
								borderRadius: 3,
								borderColor: '#ff4949',
								maxWidth: 540,
							}}
						>
							<div className="sib-form-message-panel__text sib-form-message-panel__text--center">
								<svg
									viewBox="0 0 512 512"
									className="sib-icon sib-notification__icon"
								>
									<path d="M256 40c118.621 0 216 96.075 216 216 0 119.291-96.61 216-216 216-119.244 0-216-96.562-216-216 0-119.203 96.602-216 216-216m0-32C119.043 8 8 119.083 8 256c0 136.997 111.043 248 248 248s248-111.003 248-248C504 119.083 392.957 8 256 8zm-11.49 120h22.979c6.823 0 12.274 5.682 11.99 12.5l-7 168c-.268 6.428-5.556 11.5-11.99 11.5h-8.979c-6.433 0-11.722-5.073-11.99-11.5l-7-168c-.283-6.818 5.167-12.5 11.99-12.5zM256 340c-15.464 0-28 12.536-28 28s12.536 28 28 28 28-12.536 28-28-12.536-28-28-28z" />
								</svg>
								<span className="sib-form-message-panel__inner-text">
									Your subscription could not be saved. Please try again.
								</span>
							</div>
						</div>
						<div />
						<div
							id="success-message"
							className="sib-form-message-panel"
							style={{
								fontSize: 16,
								textAlign: 'left',
								fontFamily: '"Helvetica", sans-serif',
								color: '#085229',
								backgroundColor: '#e7faf0',
								borderRadius: 3,
								borderColor: '#13ce66',
								maxWidth: 540,
							}}
						>
							<div className="sib-form-message-panel__text sib-form-message-panel__text--center">
								<svg
									viewBox="0 0 512 512"
									className="sib-icon sib-notification__icon"
								>
									<path d="M256 8C119.033 8 8 119.033 8 256s111.033 248 248 248 248-111.033 248-248S392.967 8 256 8zm0 464c-118.664 0-216-96.055-216-216 0-118.663 96.055-216 216-216 118.664 0 216 96.055 216 216 0 118.663-96.055 216-216 216zm141.63-274.961L217.15 376.071c-4.705 4.667-12.303 4.637-16.97-.068l-85.878-86.572c-4.667-4.705-4.637-12.303.068-16.97l8.52-8.451c4.705-4.667 12.303-4.637 16.97.068l68.976 69.533 163.441-162.13c4.705-4.667 12.303-4.637 16.97.068l8.451 8.52c4.668 4.705 4.637 12.303-.068 16.97z" />
								</svg>
								<span className="sib-form-message-panel__inner-text">
									Thank you for subscribing to the Berkeley Forum's mailing
									list! We look forward to seeing you at a future event.
								</span>
							</div>
						</div>
						<div />
						<div
							id="sib-container"
							className="sib-container--large sib-container--vertical"
							style={{
								textAlign: 'center',
								backgroundColor: 'rgba(255,255,255,1)',
								maxWidth: 540,
								borderRadius: 3,
								borderWidth: 1,
								borderColor: '#C0CCD9',
								borderStyle: 'solid',
							}}
						>
							<form
								id="sib-form"
								method="POST"
								action="https://sibforms.com/serve/MUIEAOpeQRpRJEO9OwioiGNL-tePSf3qhGzbgg59Fsl2AypVl03CNeWBkBw-SqnQysY6iOrsN2FElW8eb7pwKWYt9qhBxct8vjqoex6XPYwNEkQg1X2FTv_cw-O34YHPPxtNgJGze8Fr9y3L4D569GblVAIFCYpsbkjLQvDfwfkjXsRnwQXzX6XqRp_o_8enPrm1stpe_G6N1c46"
								data-type="subscription"
							>
								<div style={{ padding: '16px 0' }}>
									<div
										className="sib-form-block"
										style={{
											fontSize: 32,
											textAlign: 'left',
											fontWeight: 700,
											fontFamily: '"Helvetica", sans-serif',
											color: '#3C4858',
											backgroundColor: 'transparent',
										}}
									>
										<p>Mailing List Subscription</p>
									</div>
								</div>
								<div style={{ padding: '16px 0' }}>
									<div className="sib-form-block sib-divider-form-block">
										<div
											style={{ border: 0, borderBottom: '1px solid #E5EDF6' }}
										/>
									</div>
								</div>
								<div style={{ padding: '16px 0' }}>
									<div className="sib-input sib-form-block">
										<div className="form__entry entry_block">
											<div className="form__label-row ">
												<label
													className="entry__label"
													style={{
														fontSize: 16,
														textAlign: 'left',
														fontWeight: 700,
														fontFamily: '"Helvetica", sans-serif',
														color: '#3c4858',
													}}
													htmlFor="FIRSTNAME"
													data-required="*"
												>
													First Name
												</label>
												<div className="entry__field">
													<input
														className="input"
														maxLength={200}
														type="text"
														id="FIRSTNAME"
														name="FIRSTNAME"
														autoComplete="off"
														placeholder="Oski"
														data-required="true"
														required
													/>
												</div>
											</div>
											<label
												className="entry__error entry__error--primary"
												style={{
													fontSize: 16,
													textAlign: 'left',
													fontFamily: '"Helvetica", sans-serif',
													color: '#661d1d',
													backgroundColor: '#ffeded',
													borderRadius: 3,
													borderColor: '#ff4949',
												}}
											></label>
										</div>
									</div>
								</div>
								<div style={{ padding: '16px 0' }}>
									<div className="sib-input sib-form-block">
										<div className="form__entry entry_block">
											<div className="form__label-row ">
												<label
													className="entry__label"
													style={{
														fontSize: 16,
														textAlign: 'left',
														fontWeight: 700,
														fontFamily: '"Helvetica", sans-serif',
														color: '#3c4858',
													}}
													htmlFor="LASTNAME"
													data-required="*"
												>
													Last Name
												</label>
												<div className="entry__field">
													<input
														className="input"
														maxLength={200}
														type="text"
														id="LASTNAME"
														name="LASTNAME"
														autoComplete="off"
														placeholder="Bear"
														data-required="true"
														required
													/>
												</div>
											</div>
											<label
												className="entry__error entry__error--primary"
												style={{
													fontSize: 16,
													textAlign: 'left',
													fontFamily: '"Helvetica", sans-serif',
													color: '#661d1d',
													backgroundColor: '#ffeded',
													borderRadius: 3,
													borderColor: '#ff4949',
												}}
											></label>
										</div>
									</div>
								</div>
								<div style={{ padding: '16px 0' }}>
									<div className="sib-input sib-form-block">
										<div className="form__entry entry_block">
											<div className="form__label-row ">
												<label
													className="entry__label"
													style={{
														fontSize: 16,
														textAlign: 'left',
														fontWeight: 700,
														fontFamily: '"Helvetica", sans-serif',
														color: '#3c4858',
													}}
													htmlFor="EMAIL"
													data-required="*"
												>
													Email
												</label>
												<div className="entry__field">
													<input
														className="input"
														type="text"
														id="EMAIL"
														name="EMAIL"
														autoComplete="off"
														placeholder="oski.bear@berkeley.edu"
														data-required="true"
														required
													/>
												</div>
											</div>
											<label
												className="entry__error entry__error--primary"
												style={{
													fontSize: 16,
													textAlign: 'left',
													fontFamily: '"Helvetica", sans-serif',
													color: '#661d1d',
													backgroundColor: '#ffeded',
													borderRadius: 3,
													borderColor: '#ff4949',
												}}
											></label>
										</div>
									</div>
								</div>
								<div style={{ padding: '16px 0' }}>
									<div className="sib-form-block" style={{ textAlign: 'left' }}>
										<button
											className="sib-form-block__button sib-form-block__button-with-loader"
											style={{
												fontSize: 16,
												textAlign: 'left',
												fontWeight: 700,
												fontFamily: '"Helvetica", sans-serif',
												color: '#FFFFFF',
												backgroundColor: '#3E4857',
												borderRadius: 3,
												borderWidth: 0,
											}}
											form="sib-form"
											type="submit"
										>
											<svg
												className="icon clickable__icon progress-indicator__icon sib-hide-loader-icon"
												viewBox="0 0 512 512"
											>
												<path d="M460.116 373.846l-20.823-12.022c-5.541-3.199-7.54-10.159-4.663-15.874 30.137-59.886 28.343-131.652-5.386-189.946-33.641-58.394-94.896-95.833-161.827-99.676C261.028 55.961 256 50.751 256 44.352V20.309c0-6.904 5.808-12.337 12.703-11.982 83.556 4.306 160.163 50.864 202.11 123.677 42.063 72.696 44.079 162.316 6.031 236.832-3.14 6.148-10.75 8.461-16.728 5.01z" />
											</svg>
											SUBSCRIBE
										</button>
									</div>
								</div>
								<div style={{ padding: '16px 0' }}>
									<div
										className="sib-form-block"
										style={{
											fontSize: 14,
											textAlign: 'center',
											fontFamily: '"Helvetica", sans-serif',
											color: '#333',
											backgroundColor: 'transparent',
										}}
									>
										<div className="sib-text-form-block">
											<p>
												<a href="https://sendinblue.com" target="_blank">
													Terms &amp; Privacy policy
												</a>
											</p>
										</div>
									</div>
								</div>
								<input
									type="text"
									name="email_address_check"
									defaultValue
									className="input--hidden"
								/>
								<input type="hidden" name="locale" defaultValue="en" />
							</form>
						</div>
					</div>
				</div>
				{/* END - We recommend to place the below code where you want the form in your website html  */}
				{/* START - We recommend to place the below code in footer or bottom of your website html  */}
				{/* END - We recommend to place the above code in footer or bottom of your website html  */}
				{/* End Sendinblue Form */}
			</div>
			<Footer />
		</div>
	);
};

export default MailingList;
