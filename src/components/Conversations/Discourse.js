import React from 'react';

import '../../css/Blog.scss';
import Header from '../A-WebElements/Header';
import Footer from '../A-WebElements/Footer';

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';

const RandPaul = () => {
	return (
		<div className="conversations">
			<Header name="blog" />
			<Container fluid className="blog-content">
				<div className="header-discourse">
					<h2>"Discourse at Berkeley": The Berkeley Forum Decal</h2>
				</div>

				<Row>
					<p>
						Since 2012, the Forum has worked to increase discourse for the
						Berkeley community by hosting debates, panels, and talks with
						leading experts from a wide variety of fields. Our Fall 2019 lineup
						includes White House Special Assistant on Native American Affairs
						Karen Diver, American Born Chinese author Gene Luen Yang, Boosted
						Boards founder Sanjay Dastoor, and extraterrestrial intelligence
						researcher Jill Tarter!
					</p>
				</Row>
				<Row>
					<p>
						In order to better engage with the ideas presented by these speakers
						and the rest of our lineup, as well as to contextualize them within
						the wider history of discourse at Berkeley – the birthplace of the
						Free Speech Movement – we are offering a 2-unit DeCal (ISF 198)
						sponsored by the Interdisciplinary Studies department this semester!
						In addition, you’ll gain an insider’s understanding of the work and
						processes the Forum undertakes in its efforts to contribute to the
						larger culture of discourse at Berkeley.
					</p>
				</Row>

				<Row>
					<p>
						We hope that by the completion of this course, students have gained
						a deep understanding of the history of free speech and discourse at
						Berkeley. Additionally, students can expect to learn more about what
						it takes to bring a speaker with a unique perspective to campus. We
						hope that by the end, students are able to have their opinions
						challenged, learn about new topics, embrace new perspectives, and
						leave with new interests. [Note: This DeCal is intended for students
						who are not members of the Berkeley Forum, and the course will not
						be open to members of the Berkeley Forum.]
					</p>
				</Row>
				<Row>
					<p>
						The deadline to apply to this DeCal is{' '}
						<strong>Friday, September 6th at 11:59pm</strong>. The first day of
						class will be <strong>Thursday, September 12. </strong>
						Please feel free to email any questions to decal@forum.berkeley.edu.
					</p>
				</Row>

				<Row>
					<p>
						<a href="https://form.jotform.com/90226864097161">Click here </a>
						to apply!
					</p>
				</Row>
			</Container>
			<Footer />
		</div>
	);
};

export default RandPaul;
