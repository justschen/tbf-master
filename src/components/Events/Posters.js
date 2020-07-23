import React from 'react';
import { Link } from '@reach/router';

import '../../css/Posters.css';
import PosterHeader from '../../img/PosterPic.png';
import Header from '../A-WebElements/Header';
import Footer from '../A-WebElements/Footer';

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Poster1 from '../../img/poster1.png';
import Poster2 from '../../img/poster2.png';
import Poster3 from '../../img/poster3.png';
import Poster4 from '../../img/poster4.png';
import Poster5 from '../../img/poster5.png';
import Poster6 from '../../img/poster6.png';


const Posters = () => {
	return (
		<div className="posters">
			<Header name="Speaker Posters" image={PosterHeader} />
			
	
			
			<Container fluid className="poster-content">
				<Row classname="top-row">
			
					<Col>
						<p>
						“The Berkeley Forum has hosted over 170 events since its inaugural event in the Spring of 2013, following the organization’s inception the previous semester in 2012. For every event, the Communications Committee creates a poster that encapsulates the essence of the event’s themes that the speaker(s) are asked to sign and are later gifted to our guests. While these are only a fraction of the total posters the Forum has created and gifted, they all serve as an archive of past events to highlight not only the variety of speakers we have hosted but also the diversity of thought that we have brought to Berkeley.” 
						</p>
					</Col>

				</Row>
				<Row className="middle-row1">
					<Col>
						<h3>
						Spring 2020
						</h3>
					</Col>
					
				</Row>
				<div className="bottom-part">

				
				<Row className="middle-row2">
					<Col>
						<img src={Poster1} alt="Picture of stuff" className="posterImg"/>
					</Col>
					<Col>
					<img src={Poster2} alt="Picture of stuff" className="posterImg"/>
					</Col>
				
				</Row>
				<Row className="middle-row3">
					<Col>
					<img src={Poster3} alt="Picture of stuff" className="posterImg"/>
					</Col>
					<Col>
					<img src={Poster4} alt="Picture of stuff" className="posterImg"/>
            		
					</Col>
				
				</Row>

				<Row className="last-row">
					<Col>
					<img src={Poster5} alt="Picture of stuff" className="posterImg"/>
					</Col>
					<Col>
					<img src={Poster6} alt="Picture of stuff" className="posterImg"/>
					</Col>
				
				</Row>
				</div>
			</Container>
			<Footer />
		</div>
	);
};

export default Posters;
