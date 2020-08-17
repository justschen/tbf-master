import React from 'react';
import { Link } from '@reach/router';

import '../../css/OurCommittees.scss';
import CommitteeHeader from '../../img/ourcommittees.png';
import Header from '../A-WebElements/Header';
import Footer from '../A-WebElements/Footer';

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';

const OurCommittees = () => {
	return (
		<div className="committees">
			<Header name="Our Committees" image={CommitteeHeader} />
            
			<Footer />
		</div>
	);
};

export default OurCommittees;
