import React from 'react';
import { Router } from '@reach/router';

import './css/App.css';     

import Landing from './components/Landing';
import About from './components/About/About';
import Team from './components/About/Team';
import ConvoBlocks from './components/Conversations/ConvoBlocks';
import RandPaul from './components/Conversations/RandPaul';
import Calendar from './components/Events/Calendar';
import PastEvents from './components/Events/PastEvents';
import Posters from './components/Events/Posters';
import Contact from './components/Contact';
import Decal from './components/Decal';
import JoinUs from './components/JoinUs';
import Advisory from './components/About/Advisory';
import Lineup from './components/Conversations/Lineup'
import OurCommittees from './components/About/OurCommittees';
import Legacy from './components/About/Legacy';


const App = () => {
	return (
		
		<div className="App">
			<Router>
				<Landing path="/" class/>
				<About path="/about" />
				<Team path="/team" />
				<ConvoBlocks path ="/convoBlocks" />
				<RandPaul path ="/randPaul" />
				<Lineup path ="/lineup" />
				<Calendar path ="/calendar" />
				<PastEvents path ="/pastEvents" />
				<Posters path ="/posters" />
				<Contact path ="/contact" />
				<Decal path ="/decal" />
				<JoinUs path ="/join" />
				<Advisory path="/advisory" />
				<OurCommittees path="/committees" />
				<Legacy path="/legacy" />
			</Router>
		</div>
	);
};

export default App;
