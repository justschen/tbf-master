import React from 'react';
import { Link } from '@reach/router';


import '../../css/Header.css'

const Header = () => {
	return (
		<div className="header">
			<h1>The Berkeley Forum</h1>
            <h4>
                <Link to="/about">About Us</Link>
                <Link to="/team">Team Page</Link>
                <Link to="/convoBlocks">Conversations</Link>
                <Link to="/randPaul">With Mr. Rand Paul</Link>
                <Link to="/calendar">Calendar</Link>
                <Link to="/pastEvents">Past Events</Link>
                <Link to="/posters">Speaker Posters</Link>
                <Link to="/contact">Contact</Link>
                <Link to="/decal">Decal</Link> 
                <Link to="/join">Join Us</Link>
            </h4>
			
        
		</div>
	);
};

export default Header;
