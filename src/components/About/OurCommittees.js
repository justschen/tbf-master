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
			<Container fluid className="committee-content">
				<Row>
					<p>
						<strong>The Programming and Events Committees, </strong>
						respectively, play an essential role in the planning and
						organization of all Forum events for the following semester. Members
						of each committee work together to come up with ideas for new events
						and prospective speakers, invite guests, reserve venues, handle
						speaker travel and accommodations, and take care of other event
						logistics. After a semester of inviting speakers in Programming, one
						hosts the speakers they invited the following semester as an “Event
						Manager” in the Events Committee.
					</p>
				</Row>
				<Row>
					<p>
						<strong>The Communications Committee</strong> serves as the
						marketing and public relations wing of the Berkeley Forum. The
						marketing team focuses on promoting the Berkeley Forum’s events
						through a variety of social and traditional media and partnerships
						with other organizations. Moreover, we use a variety of platforms;
						these include, but are not limited to, social media, our mailing
						list, class, and campus organization outreach, sharing our events
						with relevant departments and faculty, and sometimes even posting
						posters around campus. Members of the public relations team will
						work together to manage the organization’s brand and graphic
						standards, share the Forum’s work with the world and keep in contact
						with the general public and members of the press.
					</p>
				</Row>
				<Row>
					<p>
						<strong>The Finance Committee</strong> is responsible for sourcing,
						budgeting, and planning all financial inflows and outflows of the
						Forum. Finance members have various responsibilities including
						conducting all crowdfunding outreach campaigns, negotiating with
						business and corporate partners, projecting event financials,
						drafting event grants, and planning future Forum expenditures. The
						committee has two concentrations: Internal Finance and External
						Finance. Internal Finance is primarily responsible for managing
						relations with on-campus departments and past donors along with
						ensuring the funding from the student union. External Finance works
						to create small business sponsorships and campus organization
						partnerships while minimizing speaker auxiliary costs. Focused on
						pursuing independent initiatives with regards to the motto of ‘many
						teams, one Forum,’ Finance members strive to maintain financial
						security and transparency within and for the organization.
					</p>
				</Row>
				<Row>
					<p>
						<strong>The Moderating Committee</strong> moderates all Forum
						events. The Committee is responsible for providing the necessary
						platform for the audience to ask questions and interact with the
						speakers and panelists. All you need for Moderating is a passion for
						learning these skills, commitment to the committee and to its work,
						and some base level of comfort with speaking on stage and hosting a
						conversation.
					</p>
				</Row>
				<Row>
					<p>
						<strong>The Systems and Technology Committee</strong> attends to all
						of the Forum's technical needs. During Forum events, the committee
						is responsible for setting up equipment and monitoring audio and
						video. The Systems and Technology Committee is made up of three
						subcommittees: Data Analysis, Multimedia, and Software. These
						subcommittees work on multiple projects throughout the semester such
						as managing and maintaining the Forum’s website, producing YouTube
						videos and podcast episodes, and analyzing the organization's data
						to improve efficiency.
					</p>
				</Row>
				<Row className="bottom-navbar">
					<Link to="/team">
						{/* <p className="link-text">Meet Our Team</p> */}
						Meet Our Team
					</Link>
					<Link to="/advisory">Advisory Committee</Link>
					<Link to="/legacy">Legacy</Link>
				</Row>
			</Container>
			<Footer />
		</div>
	);
};

export default OurCommittees;
