import React from 'react';
import { Link } from '@reach/router';

import '../../css/Advisory.scss';
import AdvisoryHeader from '../../img/advisory.png';
import Header from '../A-WebElements/Header';
import Footer from '../A-WebElements/Footer';

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';

const Advisory = () => {
	return (
		<div className="advisory">
			<Header name="Advisory Committee" image={AdvisoryHeader} />
            <p className="introduction">
                Though student-run, the Forum is supported by a committee of distinguished 
                professors, who advise the president and executive committee on long-term 
                matters. Advisors may from time to time suggest guests or future events, 
                review committee work, and assist with the procurement of guest speakers. 
                However, event moderating and committee work are strictly carried out by 
                the student members of the Berkeley Forum.
            </p>
            <Container fluid className="committee-info">
                <Row>
                    <p>
                        <strong>Erwin Chemerinsky</strong> is the Dean of Berkeley Law and Jesse H. Choper Distinguished Professor of Law. 
                        He was previously the Dean at the University of California, Irvine School of Law, and taught at 
                        Duke University as well as other institutions across the United States. Named as the “Most Influential 
                        Law Professor in America” by the National Jurist, he has written eleven books, including prominent 
                        casebooks and treatises about constitutional law, criminal procedure, and federal jurisdiction. 
                        In addition, he regularly argues the appellate case, including in the United States Supreme Court.
                    </p>
                </Row>
                <Row>
                    <p>
                        <strong>Khuyen V. Nguyen</strong> is the Associate Director of the University of California, Berkeley’s Student 
                        Learning Center. Working in the Economics, Writing, and International Student Programs, she is 
                        a firm advocate for innovative pedagogy, the international student body, and student learning. 
                        Nguyen serves as the Undergraduate Education Representative on the Chancellor’s Advisory Committee 
                        on Student Services and Fees.
                    </p>
                </Row>
                <Row>
                    <p>
                        <strong>Ula Taylor</strong> is the Department Chair of the African American & African Diaspora Studies Department. 
                        Her research focuses on African American Women’s History and feminist theory. In 2013, she 
                        received the Distinguished Professor Teaching Award for the University of California, Berkeley, 
                        is the second African American woman in the history of the institution to receive this award.
                    </p>
                </Row>
                <Row>
                    <p>
                        <strong>Michael Watts</strong> is a professor emeritus of geography at the University of California, Berkeley. 
                        His research specializes in the political economy of development, particularly in the energy 
                        and agri-food sectors in Africa. He has provided expert testimony in major legal cases concerning 
                        human and environmental rights in Nigeria and spoken to the US Congress and other policy groups 
                        in Washington DC. Watts has served as Chair of the Trustees of the Social Science Research Council 
                        since 2007 and was the Director of the Institute of International Studies from 1994 through 2004. 
                    </p>
                </Row>
            </Container>
            <div className="bottom-navbar">
                <p>Meet our team</p>
                <p>Our Committees</p>
                <p>Legacy</p>
            </div>
			<Footer />
		</div>
	);
};

export default Advisory;
