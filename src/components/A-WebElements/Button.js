import React from 'react';
import { Link } from '@reach/router';

import '../../css/Button.css'



const Button = (props) => {
    
	return (
		<div className="tbf-button">
			<button>{props.text}</button>
		</div>
	);
};

export default Button;
