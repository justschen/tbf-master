import React from 'react';
import { Router } from '@reach/router';

import './css/App.css';

import Landing from './components/Landing';
import About from './components/About/About';
import Team from './components/About/Team';

import Calendar from './components/Events/Calendar';
import PastEvents from './components/Events/PastEvents';
import Posters from './components/Events/Posters';
import Contact from './components/Contact';
import Decal from './components/Decal';
import JoinUs from './components/JoinUs';
import Advisory from './components/About/Advisory';

import OurCommittees from './components/About/OurCommittees';
import Legacy from './components/About/Legacy';

import ConvoBlocks from './components/Conversations/ConvoBlocks';
import Cancellation from './components/Conversations/Cancellation';
import CardsAgainst from './components/Conversations/CardsAgainst';
import ChiefDiversity from './components/Conversations/ChiefDiversity';
import CoHost from './components/Conversations/CoHost';
import CRISPR from './components/Conversations/CRISPR';
import Crowdfund from './components/Conversations/Crowdfund';
import Discourse from './components/Conversations/Discourse';
import Fall2019 from './components/Conversations/Fall2019';
import VSauce from './components/Conversations/HeyVSauce';
import Homeland from './components/Conversations/Homeland';
import Lineup from './components/Conversations/Lineup';
import Politico from './components/Conversations/Politico';
import Press from './components/Conversations/Press';
import RandPaul from './components/Conversations/RandPaul';
import Spring2019 from './components/Conversations/Spring2019';

export const ScrollToTop = ({ children, location }) => {
	React.useEffect(() => window.scrollTo(0, 0), [location.pathname]);
	return children;
};

const App = () => {
	return (
		<div className="App">
			<Router primary={false}>
				<ScrollToTop path="/">
					<Landing path="/" class />
					<About path="/about" />
					<Team path="/team" />

					<ConvoBlocks path="/conversations" />
					<Cancellation path="/statement-marianne-williamson" />
					<CardsAgainst path="/statement-cards-against-humanity" />
					<ChiefDiversity path="/ellen-pao-at-the-berkeley-forum" />
					<CoHost path="/ana-kasparian-at-the-berkeley-forum" />
					<CRISPR path="/feng-zhang-at-the-berkeley-forum" />
					<Crowdfund path="/2019-crowdfunding-update" />
					<Discourse path="/discourse-at-berkeley-decal" />
					<Fall2019 path="/fall-2019-lineup" />
					<VSauce path="/hey-vsauce-michael-here" />
					<Homeland path="/jeh-johnson-at-the-berkeley-forum" />
					<Lineup path="/spring-2020-lineup" />
					<Politico path="/jim-vandehei-at-the-berkeley-forum" />
					<Press path="/josh-earnest-at-the-berkeley-forum" />
					<RandPaul path="/rand-paul-at-the-berkeley-forum" />
					<Spring2019 path="/spring-2019-lineup" />

					<Calendar path="/events" />
					<PastEvents path="/past-events" />
					<Posters path="/posters" />
					<Contact path="/contact" />
					<Decal path="/decal" />
					<OurCommittees path="/committees" />
					<Legacy path="/legacy" />
					<JoinUs path="/join" />
					<Advisory path="/advisory" />
				</ScrollToTop>
			</Router>
		</div>
	);
};

export default App;
