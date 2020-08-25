import React from 'react';
import ReactPlayer from 'react-player';

import '../css/Join.css';
import bigPic from '../img/join.png';
import Header from './A-WebElements/Header';
import Footer from './A-WebElements/Footer';

const JoinUs = () => {
	return (
		<div class="join">
			<section class="top">
				<Header name="Join Us" image={bigPic} />

				<h1 class="join"></h1>
			</section>
			<section class="bottom">
				<p>
					<h2 class="title">Fall 2020 Recruitment</h2>
					Our{' '}
					<a href="https://docs.google.com/forms/d/e/1FAIpQLScz95X2NgKh8bm1HtAZDCkSLzLll5FJ_asNPIdFyZ_l-uS4Iw/viewform?edit_requested=true">
						Fall 2020 Application
					</a>{' '}
					is live! Applications will be due on Thursday, September 10th at 11:59
					PM. Late applications will not be accepted. If you have any questions
					regarding our recruitment process, please contact our Director of
					Membership, Daniel Voskoboynik, at recruitment@forum.berkeley.edu. We
					will have one information session on Tuesday, September 1st at 5 PM
					PDT, which will be recorded and posted on our Facebook page. We will
					also be virtually tabling via Zoom through Thursday, September 10th.
					Feel free to drop by with any questions!
				</p>
			</section>
			<div className="youtube">
				<iframe
					className="youtube-player"
					src="https://www.youtube.com/embed/fV2ufCKfkW4"
					allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
					frameborder="0"
					allow="autoplay; encrypted-media"
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
