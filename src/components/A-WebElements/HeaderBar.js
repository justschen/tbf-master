import React from 'react';
import { Link } from '@reach/router';

import '../../css/HeaderBar.scss';

import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

import Container from 'react-bootstrap/Container';

import tasslePath from '../../img/social-tassle/tassle.png';
import facebookIcon from '../../img/social-tassle/facebook-icon.png';
import instagramIcon from '../../img/social-tassle/instagram-icon.png';
import twitterIcon from '../../img/social-tassle/twitter-icon.png';
import spotifyIcon from '../../img/social-tassle/spotify-icon.png';

import facebookWhite from '../../img/social-tassle/facebook-white.png';
import instagramWhite from '../../img/social-tassle/instagram-white.png';
import twitterWhite from '../../img/social-tassle/twitter-white.png';
import spotifyWhite from '../../img/social-tassle/spotify-icon-white.png';

import DropdownArrow from '../../img/dropdown-arrow.png';

const facebookURL = 'http://facebook.com/berkeleyforum';
const instagramURL = 'http://instagram.com/berkeleyforum';
const twitterURL = 'https://twitter.com/berkeleyforum';
const linkedinURL =
	'https://www.linkedin.com/company/the-berkeley-forum/about/';
const spotifyURL =
	'https://open.spotify.com/show/1EhFT7urj3aA6oxQ2DDL3S?si=o8BHNKekTY-unIuggK6nFg';

const HeaderBar = (props) => {
	return (
		<div className="header">
			<div className="header-desktop">
				<Link to="/" className="landing-link">
					<h1>The Berkeley Forum</h1>
				</Link>
				<div className="social-links">
					<img
						src={tasslePath}
						alt="socials-tassle"
						className="socials-tassle"
					/>
					<div className="icons">
						<a href={facebookURL}>
							<img alt="facebook" src={facebookIcon} />
						</a>
						<a href={instagramURL}>
							<img alt="instagram" src={instagramIcon} />
						</a>
						<a href={twitterURL}>
							<img alt="twitter" src={twitterIcon} />
						</a>
						<a href={spotifyURL}>
							<img alt="spotify" src={spotifyIcon} />
						</a>
					</div>
				</div>
				<div className="bar">
					<Navbar collapseOnSelect expand="lg">
						<Navbar.Toggle aria-controls="basic-navbar-nav" />
						<Navbar.Collapse id="basic-navbar-nav">
							<Nav className="mm">
								<div className="dropdown" id="parent">
									<Link to="/about" className="link-tag">
										<div className="toggle-head">
											<p className="nav-text">About&nbsp;Us</p>
											<img
												src={DropdownArrow}
												alt="toggle-arrow"
												className="dropdown-arrow"
												draggable="false"
												id="toggle-arrow-teacher"
											/>
										</div>
									</Link>
									<div className="dropdown-content-events">
										<Link to="/team" className="link-tag">
											<p className="nav-text">
												Meet the
												<br />
												Team
											</p>
										</Link>
										<Link to="/committees" className="link-tag">
											<p className="nav-text">Committees</p>
										</Link>
										<Link
											to="/legacy"
											className="link-tag"
											style={{
												marginBottom: '1rem',
											}}
										>
											<p className="nav-text">Legacy</p>
										</Link>
									</div>
								</div>
								<div className="dropdown" id="other">
									<Link to="/events" className="link-tag">
										<div className="toggle-head">
											<p className="nav-text">Events</p>
											<img
												src={DropdownArrow}
												alt="toggle-arrow"
												className="dropdown-arrow2"
												draggable="false"
												id="toggle-arrow-teacher"
											/>
										</div>
									</Link>
									<div className="dropdown-content-events">
										<Link to="/past-events" className="link-tag">
											<p className="nav-text">
												Past
												<br />
												Events
											</p>
										</Link>
										<Link
											to="/posters"
											className="link-tag"
											style={{
												marginBottom: '1rem',
											}}
										>
											<p className="nav-text">
												Speaker
												<br />
												Posters
											</p>
										</Link>
									</div>
								</div>
								<Link to="/join" class="link-tag">
									<p className="nav-text">Join&nbsp;Us</p>
								</Link>
								<Link to="/conversations" class="link-tag">
									<p className="nav-text">Conversations</p>
								</Link>
								<Link to="/contact" class="link-tag">
									<p className="nav-text">Contact</p>
								</Link>
								<Link to="/decal" class="link-tag">
									<p className="nav-text">Decal</p>
								</Link>
							</Nav>
						</Navbar.Collapse>
					</Navbar>
				</div>
			</div>
			<div className="header-mobile selectDisable site-navbar-mobile">
				<Link to="/" className="landing-link">
					<h1>The Berkeley Forum</h1>
				</Link>

				<div className="bar">
					<Navbar
						className="landing-navbar selectDisable site-navbar-mobile"
						expand="lg"
						variant="light"
					>
						<Navbar.Toggle aria-controls="basic-navbar-nav" />
						<Navbar.Collapse id="basic-navbar-nav">
							<Nav className="mr-auto">
								<Link to="/about" className="link-tag">
									<p className="nav-text">About&nbsp;Us</p>
								</Link>

								<Link to="/team" className="link-tag">
									<p className="nav-text">Meet&nbsp;the&nbsp;Team</p>
								</Link>
								<Link to="/committees" className="link-tag">
									<p className="nav-text">Committees</p>
								</Link>
								<Link to="/legacy" className="link-tag">
									<p className="nav-text">Legacy</p>
								</Link>

								<Link to="/events" className="link-tag">
									<p className="nav-text">Events</p>
								</Link>

								<Link to="/past-events" className="link-tag">
									<p className="nav-text">Past&nbsp;Events</p>
								</Link>
								<Link to="/posters" className="link-tag">
									<p className="nav-text">Speaker&nbsp;Posters</p>
								</Link>

								<Link to="/join" class="link-tag">
									<p className="nav-text">Join&nbsp;Us</p>
								</Link>
								<Link to="/conversations" class="link-tag">
									<p className="nav-text">Conversations</p>
								</Link>
								<Link to="/contact" class="link-tag">
									<p className="nav-text">Contact</p>
								</Link>
								<Link to="/decal" class="link-tag">
									<p className="nav-text">Decal</p>
								</Link>
							</Nav>
							<div className="mobile-tassle">
								<Container className="icon-pic">
									<a href={facebookURL}>
										<img className="icon-image" src={facebookWhite} alt="Facebook"/>
									</a>

									<a href={instagramURL}>
										<img className="icon-image" src={instagramWhite} alt="instagram"/>
									</a>

									<a href={twitterURL}>
										<img className="icon-image" src={twitterWhite} alt="twitter"/>
									</a>

									<a href={spotifyURL}>
										<img className="icon-image" src={spotifyWhite} alt="spotify"/>
									</a>
								</Container>
							</div>
						</Navbar.Collapse>
					</Navbar>
				</div>
			</div>
		</div>
	);
};

export default HeaderBar;
