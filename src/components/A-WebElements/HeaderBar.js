import React from 'react';
import { Link } from '@reach/router';

import '../../css/HeaderBar.scss';

import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/NavBar';

import tasslePath from '../../img/social-tassle/tassle.png';
import facebookIcon from '../../img/social-tassle/Facebook.png';
import instagramIcon from '../../img/social-tassle/Instagram.png';
import twitterIcon from '../../img/social-tassle/Twitter.png';
import linkedinIcon from '../../img/social-tassle/LinkedIN.png';

import DropdownArrow from '../../img/dropdown-arrow.png';

const facebookURL = 'http://facebook.com/berkeleyforum';
const instagramURL = 'http://instagram.com/berkeleyforum';
const twitterURL = 'https://twitter.com/berkeleyforum';
const linkedinURL =
	'https://www.linkedin.com/company/the-berkeley-forum/about/';

const HeaderBar = (props) => {
	let middle;

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
							<img src={facebookIcon} />
						</a>
						<a href={instagramURL}>
							<img src={instagramIcon} />
						</a>
						<a href={twitterURL}>
							<img src={twitterIcon} />
						</a>
						<a href={linkedinURL}>
							<img src={linkedinIcon} />
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
									<div className="dropdown-content-about">
										<Link to="/team" className="link-tag">
											<p className="nav-text">
												Meet the
												<br />
												Team
											</p>
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
										<Link to="/posters" className="link-tag">
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
								<div className="icons">
									<a href={facebookURL}>
										<img src={facebookIcon} />
									</a>
									<a href={instagramURL}>
										<img src={instagramIcon} />
									</a>
									<a href={twitterURL}>
										<img src={twitterIcon} />
									</a>
									<a href={linkedinURL}>
										<img src={linkedinIcon} />
									</a>
								</div>
							</Nav>
						</Navbar.Collapse>
					</Navbar>
				</div>
			</div>
		</div>
	);
};

export default HeaderBar;
