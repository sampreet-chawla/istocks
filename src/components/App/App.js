import React, { useState } from 'react';

import Nav from '../Nav/Nav';
import Home from '../Home/Home';
import Dashboard from '../Dashboard/Dashboard';
import Stock from '../Stock/Stock';
import About from '../About/About';

import {
	BrowserRouter as Router,
	Route,
	Switch,
	Redirect,
} from 'react-router-dom';

export const App = (props) => {
	const [selectedStock, setSelectedStock] = useState({});

	const handleSelectedStockClick = (stock) => {
		setSelectedStock(stock);
	};

	return (
		<Router>
			<Nav />
			<Switch>
				<Route path='/' exact component={Home} />
				<Route path='/stocks' component={Dashboard} />
				<Route
					path='/stocks'
					render={(routerProps) => <Dashboard {...routerProps} />}
				/>
				<Route
					path='/stock/:symbol'
					render={(routerProps) => (
						<Stock
							// {...routerProps} // Can get the whole object if we need history, location, etc.
							match={routerProps.match} // For passing only specific data
							handleSelectedStockClick={handleSelectedStockClick}
							selectedStock={selectedStock}
						/>
					)}
				/>
				<Route path='/about' component={About} />
				<Redirect to='/stocks' />
			</Switch>
		</Router>
	);
};
