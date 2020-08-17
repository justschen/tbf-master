import React from 'react';
import { Link } from '@reach/router';

import '../../css/Legacy.scss';
import AboutHeader from '../../img/aboutUsJPG.JPG';
import Header from '../A-WebElements/Header';
import Footer from '../A-WebElements/Footer';

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';

const Legacy = () => {
	return (
		<div className="legacy">
			<Header name="" image={AboutHeader} />
			
			<Footer />
		</div>
	);
};

export default Legacy;
