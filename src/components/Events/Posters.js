import React from 'react';
import { Link } from '@reach/router';

import '../../css/Posters.css';
import PosterHeader from '../../img/PosterPic.png';
import Header from '../A-WebElements/Header';
import Footer from '../A-WebElements/Footer';

import Accordion from 'react-bootstrap/Accordion';
import Card from 'react-bootstrap/Card';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Poster1 from '../../img/poster1.png';
import Poster2 from '../../img/poster2.png';
import Poster3 from '../../img/poster3.png';
import Poster4 from '../../img/poster4.png';
import Poster5 from '../../img/poster5.png';
import Poster6 from '../../img/poster6.png';

import F18P1 from '../../img/Posters/Fall 2018/Nov2-2018.png';
import F18P1 from '../../img/Posters/Fall 2018';
import F18P1 from '../../img/Posters/Fall 2018';
import F18P1 from '../../img/Posters/Fall 2018';
import F18P1 from '../../img/Posters/Fall 2018';
import F18P1 from '../../img/Posters/Fall 2018';
import F18P1 from '../../img/Posters/Fall 2018';

import ToggleArrowDown from '../../img/toggle-arrow-down.png';
import ToggleArrowRight from '../../img/toggle-arrow-right.png';

const Posters = () => {
	let opened2019 = false;
	let opened2018 = false;
	let opened2017 = false;
	let opened2019Mobile = false;
	let opened2018Mobile = false;
	let opened2017Mobile = false;

	function rotate(arrowName, arrowVariable) {
		document.getElementById(arrowName).style.transition = '0.5s';
		if (!arrowVariable) {
			document.getElementById(arrowName).style.transform = 'rotate(-90deg)';
			arrowVariable = true;
		} else {
			document.getElementById(arrowName).style.transform = 'rotate(0)';
			arrowVariable = false;
		}
	}

	function rotate2(arrowName, arrowVariable) {
		document.getElementById(arrowName).style.transition = '0.5s';
		if (!arrowVariable) {
			document.getElementById(arrowName).style.transform = 'rotate(90deg)';
			arrowVariable = true;
		} else {
			document.getElementById(arrowName).style.transform = 'rotate(0)';
			arrowVariable = false;
		}
	}
	const openTeacher = () => {
		rotate2('toggle-arrow-teacher', opened2019);
		opened2019 = !opened2019;
	};
	const openStudent = () => {
		rotate('toggle-arrow-student', opened2018);
		opened2018 = !opened2018;
	};
	const openDeveloper = () => {
		rotate('toggle-arrow-developer', opened2017);
		opened2017 = !opened2017;
	};
	const openTeacherMobile = () => {
		rotate('toggle-arrow-teacher-mobile', opened2019Mobile);
		opened2019Mobile = !opened2019Mobile;
	};
	const openStudentMobile = () => {
		rotate('toggle-arrow-student-mobile', opened2018Mobile);
		opened2018Mobile = !opened2018Mobile;
	};
	const openDeveloperMobile = () => {
		rotate('toggle-arrow-developer-mobile', opened2017Mobile);
		opened2017Mobile = !opened2017Mobile;
	};
	return (
		<div className="posters">
			<Header name="Speaker Posters" image={PosterHeader} />

			<Container fluid className="poster-content">
				<Row classname="top-row">
					<Col>
						<p>
							“The Berkeley Forum has hosted over 170 events since its inaugural
							event in the Spring of 2013, following the organization’s
							inception the previous semester in 2012. For every event, the
							Communications Committee creates a poster that encapsulates the
							essence of the event’s themes that the speaker(s) are asked to
							sign and are later gifted to our guests. While these are only a
							fraction of the total posters the Forum has created and gifted,
							they all serve as an archive of past events to highlight not only
							the variety of speakers we have hosted but also the diversity of
							thought that we have brought to Berkeley.”
						</p>
					</Col>
				</Row>
			</Container>

			<Container fluid className="body">
				<Row className="toggle-row">
					<Col>
						<Accordion defaultActiveKey="0">
							<Card>
								<Accordion.Toggle
									as={Card.Header}
									eventKey="0"
									className="toggle"
									onClick={openTeacher}
								>
									<div className="toggle-top">
										<h3 className="year">Spring 2020</h3>

										<img
											src={ToggleArrowDown}
											alt="toggle-arrow"
											className="toggle-arrow selectDisable"
											draggable="false"
											id="toggle-arrow-teacher"
										/>
									</div>
								</Accordion.Toggle>
								<Accordion.Collapse eventKey="0" class="show">
									<Card.Body>
										<Row>
											<Col>
												<img
													src={Poster1}
													alt="Picture of stuff"
													className="posterImg"
												/>
											</Col>
											<Col>
												<img
													src={Poster2}
													alt="Picture of stuff"
													className="posterImg"
												/>
											</Col>
										</Row>
										<Row>
											<Col>
												<img
													src={Poster3}
													alt="Picture of stuff"
													className="posterImg"
												/>
											</Col>
											<Col>
												<img
													src={Poster4}
													alt="Picture of stuff"
													className="posterImg"
												/>
											</Col>
										</Row>
										<Row>
											<Col>
												<img
													src={Poster5}
													alt="Picture of stuff"
													className="posterImg"
												/>
											</Col>
											<Col>
												<img
													src={Poster6}
													alt="Picture of stuff"
													className="posterImg"
												/>
											</Col>
										</Row>
									</Card.Body>
								</Accordion.Collapse>
							</Card>
						</Accordion>
					</Col>
				</Row>
				<Row className="toggle-row">
					<Col>
						<Accordion>
							<Card>
								<Accordion.Toggle
									as={Card.Header}
									eventKey="0"
									className="toggle"
									onClick={openStudent}
								>
									<div className="toggle-top">
										<h3 className="year">Fall 2019</h3>
										<img
											src={ToggleArrowRight}
											alt="toggle-arrow"
											className="toggle-arrow selectDisable"
											draggable="false"
											id="toggle-arrow-student"
										/>
									</div>
								</Accordion.Toggle>
								<Accordion.Collapse eventKey="0">
									<Card.Body>
										<Row>
											<Col>
												<img
													src={Poster1}
													alt="Picture of stuff"
													className="posterImg"
												/>
											</Col>
											<Col>
												<img
													src={Poster2}
													alt="Picture of stuff"
													className="posterImg"
												/>
											</Col>
										</Row>
										<Row>
											<Col>
												<img
													src={Poster3}
													alt="Picture of stuff"
													className="posterImg"
												/>
											</Col>
											<Col>
												<img
													src={Poster4}
													alt="Picture of stuff"
													className="posterImg"
												/>
											</Col>
										</Row>
										<Row>
											<Col></Col>
											<Col></Col>
										</Row>
									</Card.Body>
								</Accordion.Collapse>
							</Card>
						</Accordion>
					</Col>
				</Row>
				<Row className="toggle-row">
					<Col>
						<Accordion>
							<Card>
								<Accordion.Toggle
									as={Card.Header}
									eventKey="0"
									className="toggle"
									onClick={openDeveloper}
								>
									<div className="toggle-top">
										<h3 className="year">Spring 2019</h3>
										<img
											src={ToggleArrowRight}
											alt="toggle-arrow"
											className="toggle-arrow selectDisable"
											draggable="false"
											id="toggle-arrow-developer"
										/>
									</div>
								</Accordion.Toggle>
								<Accordion.Collapse eventKey="0">
									<Card.Body>
										<Row>
											<Col>
												<img
													src={Poster1}
													alt="Picture of stuff"
													className="posterImg"
												/>
											</Col>
											<Col>
												<img
													src={Poster2}
													alt="Picture of stuff"
													className="posterImg"
												/>
											</Col>
										</Row>
										<Row>
											<Col>
												<img
													src={Poster3}
													alt="Picture of stuff"
													className="posterImg"
												/>
											</Col>
											<Col>
												<img
													src={Poster4}
													alt="Picture of stuff"
													className="posterImg"
												/>
											</Col>
										</Row>
										<Row>
											<Col>
												<img
													src={Poster5}
													alt="Picture of stuff"
													className="posterImg"
												/>
											</Col>
											<Col>
												<img
													src={Poster6}
													alt="Picture of stuff"
													className="posterImg"
												/>
											</Col>
										</Row>
									</Card.Body>
								</Accordion.Collapse>
							</Card>
						</Accordion>
					</Col>
				</Row>
			</Container>
			<Footer />
		</div>
	);
};

export default Posters;
