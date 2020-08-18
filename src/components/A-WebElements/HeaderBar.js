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

const facebookURL = 'http://facebook.com/berkeleyforum';
const instagramURL = 'http://instagram.com/berkeleyforum';
const twitterURL = 'https://twitter.com/berkeleyforum';
const linkedinURL =
	'https://www.linkedin.com/company/the-berkeley-forum/about/';

const HeaderBar = (props) => {
	let middle;

	return (
		<div className="header">
			<Link to="/" className="landing-link">
				<h1>The Berkeley Forum</h1>
			</Link>
			<div className="social-links">
				<img src={tasslePath} alt="socials-tassle" className="socials-tassle" />
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
							<div className="dropdown">
								<Link to="/about" className="link-tag">
									<p className="nav-text">
										About Us
										<span class="glyphicon glyphicon-on logo-small"></span>
										<span class="icon-bar"></span>
									</p>
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
							<div className="dropdown">
								<Link to="/calendar" className="link-tag">
									<p className="nav-text">Events</p>
								</Link>
								<div className="dropdown-content-events">
									<Link to="/pastEvents" className="link-tag">
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
								<p className="nav-text">Join Us</p>
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
	);
};

export default HeaderBar;
