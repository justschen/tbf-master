import React from 'react';
import { Link } from '@reach/router';

import '../../css/Team.scss';
import TeamHeader from '../../img/team-bg.png';

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import Header from '../A-WebElements/Header';
import Footer from '../A-WebElements/Footer';
import TeamCard from '../A-WebElements/TeamCard';

import CindyTang from '../../img/bios/Cindy_Tang.png';
import AparnaIyer from '../../img/bios/Aparna_Iyer.png';
import EthanQi from '../../img/bios/Ethan_Qi.png';
import AbhayAggarwal from '../../img/bios/Abhay_Aggarwal.png';
import DavidLee from '../../img/bios/David_Lee.png';
import KahoOtake from '../../img/bios/Kaho_Otake.png';
import CJHines from '../../img/bios/CJ_Hines.png';

import DanielVoskoboynik from '../../img/bios/Daniel_Voskoboynik.png';
import AnkitaInamdar from '../../img/bios/Ankita_Inamdar.png';
import NayanChavan from '../../img/bios/Nayan_Chavan.png';

var execData = [
	[
		'Cindy Tang',
		'President',
		'Cindy Tang is a third-year student studying Business Administration ' +
			'and Sociology with a minor in Human Rights Interdisciplinary.' +
			'Originally from Columbus, OH, Cindy has passions for inclusion' +
			'and diversity, people, and education. In Cindy’s free time, she' +
			'enjoys hiking, vintage shopping, and trying new restaurants.' +
			'Cindy is currently an RA in Blackwell Hall and is a huge fan of' +
			'the Ohio State Buckeyes.',
		CindyTang,
	],
	[
		'Aparna Iyer',
		'VP of Events',
		'Aparna is a third- year studying Political Science and Human Rights. ' +
			'She joined the Forum in her freshman year and has loved the process of ' +
			'inviting speakers, moderating talks with fascinating people, and learning ' +
			'more about how to host events. Her favorite events thus far have been with ' +
			'SNL Director Don Roy King and writer Gene Luen Yang. As VP of Programming, ' +
			'she facilitates speaker invitations that will determine the lineup for Fall ' +
			'2020. She enjoys politics, dance, and stand-up comedy.',
		AparnaIyer,
	],
	['Ethan Qi', 'VP of Finance', '', EthanQi],
	['Abhay Aggarwal', 'VP of Moderating', '', AbhayAggarwal],
	['David Lee', 'VP of Programming', '', DavidLee],
	['Kaho Otake', 'VP of Communication', '', KahoOtake],
	['CJ Hines', 'VP of Systems & Technology', '', CJHines],
];

var directorData = [
	['Nayan Chavan', 'Director of Social Affairs', '', NayanChavan],
	['Ankita Inamdar', 'Director of Development', '', AnkitaInamdar],
	['Daniel Voskoboynik', 'Director of Membership', '', DanielVoskoboynik],
];

var memberData = [];

const Team = () => {
	return (
		<div className="team">
			<Header name="Meet Our Team" image={TeamHeader} />
			<Container fluid className="profiles">
				<Row>
					<h1>Executive Committee</h1>
				</Row>
				<Row>
					{execData.map((member) => (
						<Col xs={4}>
							<TeamCard
								bio={member[2]}
								name={member[0]}
								role={member[1]}
								image={member[3]}
							/>
						</Col>
					))}
				</Row>
				<Row>
					<h1 className="section-divider">Directors</h1>
				</Row>
				<Row>
					{directorData.map((member) => (
						<Col xs={4}>
							<TeamCard
								bio={member[2]}
								name={member[0]}
								role={member[1]}
								image={member[3]}
							/>
						</Col>
					))}
				</Row>
				<Row>
					<h1 className="section-divider">Members</h1>
				</Row>
			</Container>
			<Footer />
		</div>
	);
};

export default Team;
