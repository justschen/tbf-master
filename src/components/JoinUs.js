import React from 'react';

import '../css/Join.css';
import bigPic from '../img/join.png';
import Header from './A-WebElements/Header';
import Footer from './A-WebElements/Footer';
import Calendly from './Hooks/Calendly.js';

const JoinUs = () => {
	return (
		<div class="join">
			<section class="top">
				<Header name="Join Us" image={bigPic} />
			</section>
			<section class="bottom">
				<p>
					<h2 class="title">Fall 2020 Recruitment</h2>
					Our Fall 2020 Application
					is closed. If you have any questions
					regarding our recruitment process, please contact our Director of
					Membership, Daniel Voskoboynik, at recruitment@forum.berkeley.edu.
				</p>
			</section>
			<div className="youtube">
				<iframe
					className="youtube-player"
					src="https://www.youtube.com/embed/fV2ufCKfkW4"
					allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
					frameborder="0"
					allowfullscreen="allowfullscreen"
					mozallowfullscreen="mozallowfullscreen"
					msallowfullscreen="msallowfullscreen"
					oallowfullscreen="oallowfullscreen"
					webkitallowfullscreen="webkitallowfullscreen"
					title="video"
				/>
			</div>
			
			<Footer />
		</div>
	);
};

export default JoinUs;
