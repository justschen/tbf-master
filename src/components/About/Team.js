import React from 'react';
import { Link } from '@reach/router';

import '../../css/Team.scss';
import TeamHeader from '../../img/team-bg.png';

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';

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

const Team = () => {
	return (
		<div className="team">
			<Header name="Meet Our Team" image={TeamHeader} />
			<Container fluid className = "executive-committee">
				<Row>
					<h1>Executive Committee</h1>
				</Row>
				<Row>
					<TeamCard bio="Cindy Tang is a third-year student studying Business Administration 
						and Sociology with a minor in Human Rights Interdisciplinary. 
						Originally from Columbus, OH, Cindy has passions for inclusion 
						and diversity, people, and education. In Cindy’s free time, she 
						enjoys hiking, vintage shopping, and trying new restaurants. 
						Cindy is currently an RA in Blackwell Hall and is a huge fan of 
						the Ohio State Buckeyes." 
						name="Cindy Tang" role="President" image={CindyTang}/>
					<TeamCard name="Aparna Iyer" role="VP of Events" image={AparnaIyer}/>
					<TeamCard name="Ethan Qi" role="VP of Finance" image={EthanQi}/>
				</Row>
				<Row>
					<TeamCard name="Abhay Aggarwal" role="VP of Moderating" image={AbhayAggarwal}/>
					<TeamCard name="David Lee" role="VP of Programming" image={DavidLee}/>
					<TeamCard name="Kaho Otake" role="VP of Communication" image={KahoOtake}/>
				</Row>
				<Row>
					<TeamCard name="CJ Hines" role="VP of System & Technology" image={CJHines}/>
				</Row>
				<Row>
					<h1 className="section-divider">Directors</h1>
				</Row>
				<Row>
					<TeamCard name="Nayan Chavan" role="VP of System & Technology" image={NayanChavan}/>
					<TeamCard name="Ankita Inamdar" role="VP of System & Technology" image={AnkitaInamdar}/>
					<TeamCard name="Daniel Voskoboynik" role="VP of System & Technology" image={DanielVoskoboynik}/>
				</Row>
				<Row>
					<h1 className="section-divider">Members</h1>
				</Row>
			</Container>
			<Footer/>
		</div>
	);
};

export default Team;
