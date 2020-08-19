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

import F18P14 from '../../img/Posters/Fall2018/Nov2-F18.png';
import F18P15 from '../../img/Posters/Fall2018/Nov7-F18.png';
import F18P7 from '../../img/Posters/Fall2018/Oct1-F18.png';
import F18P8 from '../../img/Posters/Fall2018/Oct3-F18.png';
import F18P9 from '../../img/Posters/Fall2018/Oct4-F18.png';
import F18P10 from '../../img/Posters/Fall2018/Oct8-F18.png';
import F18P11 from '../../img/Posters/Fall2018/Oct10-F18.png';
import F18P12 from '../../img/Posters/Fall2018/Oct17-F18.png';
import F18P13 from '../../img/Posters/Fall2018/Oct24-F18.png';
import F18P1 from '../../img/Posters/Fall2018/Sept6-F18.png';
import F18P2 from '../../img/Posters/Fall2018/Sept10-F18.png';
import F18P3 from '../../img/Posters/Fall2018/Sept17-F18.png';
import F18P4 from '../../img/Posters/Fall2018/Sept18-F18.png';
import F18P5 from '../../img/Posters/Fall2018/Sept20-F18.png';
import F18P6 from '../../img/Posters/Fall2018/Sept22-F18.png';

import F17P1 from '../../img/Posters/Fall2017/Aug3-17.png';
import F17P12 from '../../img/Posters/Fall2017/Dec7-17.png';
import F17P8 from '../../img/Posters/Fall2017/Nov6-17.png';
import F17P9 from '../../img/Posters/Fall2017/Nov7-17.png';
import F17P10 from '../../img/Posters/Fall2017/Nov13-17.png';
import F17P11 from '../../img/Posters/Fall2017/Nov15-17.png';
import F17P5 from '../../img/Posters/Fall2017/Oct10-17.png';
import F17P6 from '../../img/Posters/Fall2017/Oct12-17.png';
import F17P7 from '../../img/Posters/Fall2017/Oct19-17.png';
import F17P2 from '../../img/Posters/Fall2017/Sept12-17.png';
import F17P3 from '../../img/Posters/Fall2017/Sept21-17.png';
import F17P4 from '../../img/Posters/Fall2017/Sept28-17.png';

import F19P11 from '../../img/Posters/Fall2019/Nov12-F19.png';
import F19P12 from '../../img/Posters/Fall2019/Nov21-F19.png';
import F19P6 from '../../img/Posters/Fall2019/Oct3-F19.png';
import F19P7 from '../../img/Posters/Fall2019/Oct4-F19.png';
import F19P8 from '../../img/Posters/Fall2019/Oct8-F19.png';
import F19P9 from '../../img/Posters/Fall2019/Oct14-F19.png';
import F19P10 from '../../img/Posters/Fall2019/Oct16-F19.png';
import F19P1 from '../../img/Posters/Fall2019/Sept10-F2019.png';
import F19P2 from '../../img/Posters/Fall2019/Sept16-F19.png';
import F19P3 from '../../img/Posters/Fall2019/Sept19-F19.png';
import F19P4 from '../../img/Posters/Fall2019/Sept24-F19.png';
import F19P5 from '../../img/Posters/Fall2019/Sept26-F19.png';

import S18P8 from '../../img/Posters/Spring2018/Apr2-S18.png';
import S18P9 from '../../img/Posters/Spring2018/Apr3-S18.png';
import S18P10 from '../../img/Posters/Spring2018/Apr4-S18.png';
import S18P11 from '../../img/Posters/Spring2018/Apr9-S18.png';
import S18P12 from '../../img/Posters/Spring2018/Apr12-S18.png';
import S18P13 from '../../img/Posters/Spring2018/Apr17-S18.png';
import S18P1 from '../../img/Posters/Spring2018/Feb13-S18.png';
import S18P2 from '../../img/Posters/Spring2018/Feb27-S18.png';
import S18P3 from '../../img/Posters/Spring2018/Mar6-S18.png';
import S18P4 from '../../img/Posters/Spring2018/Mar7-S18.png';
import S18P5 from '../../img/Posters/Spring2018/Mar12-S18.png';
import S18P6 from '../../img/Posters/Spring2018/Mar19-S18.png';
import S18P7 from '../../img/Posters/Spring2018/Mar21-S18.png';

import S19P9 from '../../img/Posters/Spring2019/Apr4-S19.png';
import S19P10 from '../../img/Posters/Spring2019/Apr10-S19.png';
import S19P11 from '../../img/Posters/Spring2019/Apr15-S19.png';
import S19P12 from '../../img/Posters/Spring2019/Apr29-S19.png';
import S19P1 from '../../img/Posters/Spring2019/Feb4-S19.png';
import S19P2 from '../../img/Posters/Spring2019/Feb5-S19.png';
import S19P3 from '../../img/Posters/Spring2019/Feb11-S19.png';
import S19P4 from '../../img/Posters/Spring2019/Feb12-S19.png';
import S19P5 from '../../img/Posters/Spring2019/Feb14-S19.png';
import S19P6 from '../../img/Posters/Spring2019/Feb20-S19.png';
import S19P7 from '../../img/Posters/Spring2019/Mar2-S19.png';
import S19P8 from '../../img/Posters/Spring2019/Mar4-S19.png';

import S20P6 from '../../img/Posters/Spring2020/Apr15-S20.png';
import S20P7 from '../../img/Posters/Spring2020/Apr23-S20.png';
import S20P1 from '../../img/Posters/Spring2020/Feb6-S20.png';
import S20P2 from '../../img/Posters/Spring2020/Feb20-S20.png';
import S20P3 from '../../img/Posters/Spring2020/Feb27-S20.png';
import S20P4 from '../../img/Posters/Spring2020/Mar2-S20.png';
import S20P5 from '../../img/Posters/Spring2020/Mar5-S20.png';

import ToggleArrowDown from '../../img/toggle-arrow-down.png';
import ToggleArrowRight from '../../img/toggle-arrow-right.png';

const Posters = () => {
	let opened2019 = false;
	let opened2018 = false;
	let opened2017 = false;
	let opened2016 = false;
	let opened2015 = false;
	let opened2014 = false;
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
	const open0 = () => {
		rotate2('toggle-arrow-0', opened2019);
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
	const open3 = () => {
		rotate('toggle-arrow-3', opened2017);
		opened2017 = !opened2017;
	};
	const open4 = () => {
		rotate('toggle-arrow-4', opened2017);
		opened2017 = !opened2017;
	};
	const open5 = () => {
		rotate('toggle-arrow-5', opened2017);
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
									onClick={open0}
								>
									<div className="toggle-top">
										<h3 className="year">Spring 2020</h3>

										<img
											src={ToggleArrowDown}
											alt="toggle-arrow"
											className="toggle-arrow-down selectDisable"
											draggable="false"
											id="toggle-arrow-0"
										/>
									</div>
								</Accordion.Toggle>
								<Accordion.Collapse eventKey="0" class="show">
									<Card.Body>
										<Row>
											<Col>
												<img
													src={S20P1}
													alt="Picture of stuff"
													className="posterImg"
												/>
											</Col>
											<Col>
												<img
													src={S20P2}
													alt="Picture of stuff"
													className="posterImg"
												/>
											</Col>
										</Row>
										<Row>
											<Col>
												<img
													src={S20P3}
													alt="Picture of stuff"
													className="posterImg"
												/>
											</Col>
											<Col>
												<img
													src={S20P4}
													alt="Picture of stuff"
													className="posterImg"
												/>
											</Col>
										</Row>
										<Row>
											<Col>
												<img
													src={S20P5}
													alt="Picture of stuff"
													className="posterImg"
												/>
											</Col>
											<Col>
												<img
													src={S20P6}
													alt="Picture of stuff"
													className="posterImg"
												/>
											</Col>
										</Row>
										<Row>
											<Col>
												<img
													src={S20P7}
													alt="Picture of stuff"
													className="posterImg"
												/>
											</Col>
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
									onClick={openStudent}
								>
									<div className="toggle-top">
										<h3 className="year">Fall 2019</h3>
										<img
											src={ToggleArrowRight}
											alt="toggle-arrow-right"
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
													src={F19P1}
													alt="Picture of stuff"
													className="posterImg"
												/>
											</Col>
											<Col>
												<img
													src={F19P2}
													alt="Picture of stuff"
													className="posterImg"
												/>
											</Col>
										</Row>
										<Row>
											<Col>
												<img
													src={F19P3}
													alt="Picture of stuff"
													className="posterImg"
												/>
											</Col>
											<Col>
												<img
													src={F19P4}
													alt="Picture of stuff"
													className="posterImg"
												/>
											</Col>
										</Row>
										<Row>
											<Col>
												<img
													src={F19P5}
													alt="Picture of stuff"
													className="posterImg"
												/>
											</Col>
											<Col>
												<img
													src={F19P6}
													alt="Picture of stuff"
													className="posterImg"
												/>
											</Col>
										</Row>
										<Row>
											<Col>
												<img
													src={F19P7}
													alt="Picture of stuff"
													className="posterImg"
												/>
											</Col>
											<Col>
												<img
													src={F19P8}
													alt="Picture of stuff"
													className="posterImg"
												/>
											</Col>
										</Row>
										<Row>
											<Col>
												<img
													src={F19P9}
													alt="Picture of stuff"
													className="posterImg"
												/>
											</Col>
											<Col>
												<img
													src={F19P10}
													alt="Picture of stuff"
													className="posterImg"
												/>
											</Col>
										</Row>
										<Row>
											<Col>
												<img
													src={F19P11}
													alt="Picture of stuff"
													className="posterImg"
												/>
											</Col>
											<Col>
												<img
													src={F19P12}
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
													src={S19P1}
													alt="Picture of stuff"
													className="posterImg"
												/>
											</Col>
											<Col>
												<img
													src={S19P2}
													alt="Picture of stuff"
													className="posterImg"
												/>
											</Col>
										</Row>
										<Row>
											<Col>
												<img
													src={S19P3}
													alt="Picture of stuff"
													className="posterImg"
												/>
											</Col>
											<Col>
												<img
													src={S19P4}
													alt="Picture of stuff"
													className="posterImg"
												/>
											</Col>
										</Row>
										<Row>
											<Col>
												<img
													src={S19P5}
													alt="Picture of stuff"
													className="posterImg"
												/>
											</Col>
											<Col>
												<img
													src={S19P6}
													alt="Picture of stuff"
													className="posterImg"
												/>
											</Col>
										</Row>
										<Row>
											<Col>
												<img
													src={S19P7}
													alt="Picture of stuff"
													className="posterImg"
												/>
											</Col>
											<Col>
												<img
													src={S19P8}
													alt="Picture of stuff"
													className="posterImg"
												/>
											</Col>
										</Row>
										<Row>
											<Col>
												<img
													src={S19P9}
													alt="Picture of stuff"
													className="posterImg"
												/>
											</Col>
											<Col>
												<img
													src={S19P10}
													alt="Picture of stuff"
													className="posterImg"
												/>
											</Col>
										</Row>
										<Row>
											<Col>
												<img
													src={S19P11}
													alt="Picture of stuff"
													className="posterImg"
												/>
											</Col>
											<Col>
												<img
													src={S19P12}
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
									onClick={open3}
								>
									<div className="toggle-top">
										<h3 className="year">Fall 2018</h3>
										<img
											src={ToggleArrowRight}
											alt="toggle-arrow"
											className="toggle-arrow selectDisable"
											draggable="false"
											id="toggle-arrow-3"
										/>
									</div>
								</Accordion.Toggle>
								<Accordion.Collapse eventKey="0">
									<Card.Body>
										<Row>
											<Col>
												<img
													src={F18P1}
													alt="Picture of stuff"
													className="posterImg"
												/>
											</Col>
											<Col>
												<img
													src={F18P2}
													alt="Picture of stuff"
													className="posterImg"
												/>
											</Col>
										</Row>
										<Row>
											<Col>
												<img
													src={F18P3}
													alt="Picture of stuff"
													className="posterImg"
												/>
											</Col>
											<Col>
												<img
													src={F18P4}
													alt="Picture of stuff"
													className="posterImg"
												/>
											</Col>
										</Row>
										<Row>
											<Col>
												<img
													src={F18P5}
													alt="Picture of stuff"
													className="posterImg"
												/>
											</Col>
											<Col>
												<img
													src={F18P6}
													alt="Picture of stuff"
													className="posterImg"
												/>
											</Col>
										</Row>
										<Row>
											<Col>
												<img
													src={F18P7}
													alt="Picture of stuff"
													className="posterImg"
												/>
											</Col>
											<Col>
												<img
													src={F18P8}
													alt="Picture of stuff"
													className="posterImg"
												/>
											</Col>
										</Row>
										<Row>
											<Col>
												<img
													src={F18P9}
													alt="Picture of stuff"
													className="posterImg"
												/>
											</Col>
											<Col>
												<img
													src={F18P10}
													alt="Picture of stuff"
													className="posterImg"
												/>
											</Col>
										</Row>
										<Row>
											<Col>
												<img
													src={F18P11}
													alt="Picture of stuff"
													className="posterImg"
												/>
											</Col>
											<Col>
												<img
													src={F18P12}
													alt="Picture of stuff"
													className="posterImg"
												/>
											</Col>
										</Row>
										<Row>
											<Col>
												<img
													src={F18P13}
													alt="Picture of stuff"
													className="posterImg"
												/>
											</Col>
											<Col>
												<img
													src={F18P14}
													alt="Picture of stuff"
													className="posterImg"
												/>
											</Col>
										</Row>
										<Row>
											<Col>
												<img
													src={F18P15}
													alt="Picture of stuff"
													className="posterImg"
												/>
											</Col>
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
									onClick={open4}
								>
									<div className="toggle-top">
										<h3 className="year">Spring 2018</h3>
										<img
											src={ToggleArrowRight}
											alt="toggle-arrow"
											className="toggle-arrow selectDisable"
											draggable="false"
											id="toggle-arrow-4"
										/>
									</div>
								</Accordion.Toggle>
								<Accordion.Collapse eventKey="0">
									<Card.Body>
										<Row>
											<Col>
												<img
													src={S18P1}
													alt="Picture of stuff"
													className="posterImg"
												/>
											</Col>
											<Col>
												<img
													src={S18P2}
													alt="Picture of stuff"
													className="posterImg"
												/>
											</Col>
										</Row>
										<Row>
											<Col>
												<img
													src={S18P3}
													alt="Picture of stuff"
													className="posterImg"
												/>
											</Col>
											<Col>
												<img
													src={S18P4}
													alt="Picture of stuff"
													className="posterImg"
												/>
											</Col>
										</Row>
										<Row>
											<Col>
												<img
													src={S18P5}
													alt="Picture of stuff"
													className="posterImg"
												/>
											</Col>
											<Col>
												<img
													src={S18P6}
													alt="Picture of stuff"
													className="posterImg"
												/>
											</Col>
										</Row>
										<Row>
											<Col>
												<img
													src={S18P7}
													alt="Picture of stuff"
													className="posterImg"
												/>
											</Col>
											<Col>
												<img
													src={S18P8}
													alt="Picture of stuff"
													className="posterImg"
												/>
											</Col>
										</Row>
										<Row>
											<Col>
												<img
													src={S18P9}
													alt="Picture of stuff"
													className="posterImg"
												/>
											</Col>
											<Col>
												<img
													src={S18P10}
													alt="Picture of stuff"
													className="posterImg"
												/>
											</Col>
										</Row>
										<Row>
											<Col>
												<img
													src={S18P11}
													alt="Picture of stuff"
													className="posterImg"
												/>
											</Col>
											<Col>
												<img
													src={S18P12}
													alt="Picture of stuff"
													className="posterImg"
												/>
											</Col>
										</Row>
										<Row>
											<Col>
												<img
													src={S18P13}
													alt="Picture of stuff"
													className="posterImg"
												/>
											</Col>
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
									onClick={open5}
								>
									<div className="toggle-top">
										<h3 className="year">Fall 2017</h3>
										<img
											src={ToggleArrowRight}
											alt="toggle-arrow"
											className="toggle-arrow selectDisable"
											draggable="false"
											id="toggle-arrow-5"
										/>
									</div>
								</Accordion.Toggle>
								<Accordion.Collapse eventKey="0">
									<Card.Body>
										<Row>
											<Col>
												<img
													src={F17P1}
													alt="Picture of stuff"
													className="posterImg"
												/>
											</Col>
											<Col>
												<img
													src={F17P2}
													alt="Picture of stuff"
													className="posterImg"
												/>
											</Col>
										</Row>
										<Row>
											<Col>
												<img
													src={F17P3}
													alt="Picture of stuff"
													className="posterImg"
												/>
											</Col>
											<Col>
												<img
													src={F17P4}
													alt="Picture of stuff"
													className="posterImg"
												/>
											</Col>
										</Row>
										<Row>
											<Col>
												<img
													src={F17P5}
													alt="Picture of stuff"
													className="posterImg"
												/>
											</Col>
											<Col>
												<img
													src={F17P6}
													alt="Picture of stuff"
													className="posterImg"
												/>
											</Col>
										</Row>
										<Row>
											<Col>
												<img
													src={F17P7}
													alt="Picture of stuff"
													className="posterImg"
												/>
											</Col>
											<Col>
												<img
													src={F17P8}
													alt="Picture of stuff"
													className="posterImg"
												/>
											</Col>
										</Row>
										<Row>
											<Col>
												<img
													src={F17P9}
													alt="Picture of stuff"
													className="posterImg"
												/>
											</Col>
											<Col>
												<img
													src={F17P10}
													alt="Picture of stuff"
													className="posterImg"
												/>
											</Col>
										</Row>
										<Row>
											<Col>
												<img
													src={F17P11}
													alt="Picture of stuff"
													className="posterImg"
												/>
											</Col>
											<Col>
												<img
													src={F17P12}
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
