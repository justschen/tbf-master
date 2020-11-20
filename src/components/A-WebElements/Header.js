import React from 'react';
import { Link as ReachRouterLink } from '@reach/router';
import { Link as ReactScrollLink } from 'react-scroll';

// import * as Scroll from 'react-scroll';
// import {
// 	Element,
// 	Events,
// 	animateScroll as scroll,
// 	scrollSpy,
// 	scroller,
// } from 'react-scroll';

import '../../css/Header.scss';
import Carousel from 'react-bootstrap/Carousel';

import landingLinePhoto from '../../img/lineup-photo.png';
import landingMailPhoto from '../../img/mailing-list-photo.png';

import HeaderBar from './HeaderBar';
import Scrolls from './Scroll';

const Header = (props) => {
	const bg = {
		backgroundImage: `url(${props.image})`,
		background: props.image,
		backgroundPosition: props.position,
	};
	if (props.name.localeCompare('landing') === 0) {
		return (
			<div className="landing-header">
				<HeaderBar />

				<Carousel wrap={false} data-wrap={false}>
					<Carousel.Item>
						<img
							className="d-block w-100"
							src={landingLinePhoto}
							alt="First slide"
						/>

						<Carousel.Caption>
							<h3>Fall 2020 Lineup</h3>
							<ReachRouterLink to="/events">See the Events</ReachRouterLink>
						</Carousel.Caption>
					</Carousel.Item>
					<Carousel.Item>
						<img
							className="d-block w-100"
							src={landingMailPhoto}
							alt="Second slide"
						/>
						<Carousel.Caption>
							<h3>Keep Up with the Forum</h3>
							<ReachRouterLink to="/mailing-list">
								Subscribe to Our Mailing List
							</ReachRouterLink>
						</Carousel.Caption>
					</Carousel.Item>
				</Carousel>
			</div>
		);
	} else if (props.name.localeCompare('blog') === 0) {
		return (
			<div className="space">
				<HeaderBar />
			</div>
		);
	} else if (props.name.localeCompare('calendar') == 0) {
		return (
			<div className="stuff" style={bg}>
				<HeaderBar />
				<iframe
					title="calender-block"
					className="calender-block"
					src="https://calendar.google.com/calendar/embed?src=u2kell0f7gr7f6t2hl2v4oelf0%40group.calendar.google.com&ctz=America%2FLos_Angeles"
					style={{
						marginTop: '11rem',
						border: '0',
						width: '80vw',
						height: '40vw',
						frameborder: '0',
						scrolling: 'no',
					}}
				></iframe>
			</div>
		);
	} else {
		return (
			<div className="whole-comp">
				<div className="stuff" style={bg}>
					<HeaderBar />

					<h2 className="text">{props.name}</h2>

					<a type="button" class="btn-default">
						<ReactScrollLink
							className="scrolldown"
							activeClass="active"
							to="scrolls"
							spy={true}
							smooth={true}
							offset={0}
							duration={500}
						>
							<svg
								width="1em"
								height="1em"
								viewBox="0 0 16 16"
								class="bi bi-chevron-compact-down"
								fill="currentColor"
								xmlns="http://www.w3.org/2000/svg"
							>
								<path
									fill-rule="evenodd"
									d="M1.553 6.776a.5.5 0 0 1 .67-.223L8 9.44l5.776-2.888a.5.5 0 1 1 .448.894l-6 3a.5.5 0 0 1-.448 0l-6-3a.5.5 0 0 1-.223-.67z"
								/>
							</svg>
						</ReactScrollLink>
					</a>
				</div>

				<div className="scrolling-show">
					<Scrolls />
				</div>
			</div>
		);
	}
};

export default Header;
