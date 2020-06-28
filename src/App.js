import React from 'react';
import { Router } from '@reach/router';

import './css/App.css';

import Landing from './components/Landing';
import About from './components/About';

const App = () => {
	return (
		<div className="App">
			<Router>
				<Landing path="/" />
				<About path="/about" />
			</Router>
		</div>
	);
};

export default App;
