import React from 'react';
import './Nav.css';

import { Link } from 'react-router-dom';

const Nav = (props) => {
	return (
		<nav>
			<Link to='/'>
				<h1>iStocks</h1>
			</Link>
			<Link to='/stocks'>
				<h1>Stocks</h1>
			</Link>
			<Link to='/about'>
				<h1>About</h1>
			</Link>
		</nav>
	);
};

export default Nav;
