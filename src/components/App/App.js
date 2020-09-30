import React, { useState } from 'react';

//import stockData as '../stock-data.js';
import Nav from '../Nav/Nav';
import Home from '../Home/Home';
import Dashboard from '../Dashboard/Dashboard';
import Stock from '../Stock/Stock';
import About from '../About/About';

import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

export const App = (props) => {
	//console.log("App stockData - ", stocks);

	const [selectedStock, setSelectedStock] = useState({});

	const handleSelectedStockClick = (stock) => {
		setSelectedStock(stock);
	};

	const handleMostActiveStockClick = () => {};

	return (
		<Router>
			<Nav />
			<Switch>
				<Route path='/' exact component={Home} />
				<Route path='/stocks' component={Dashboard} />
				<Route
					path='/stocks'
					render={(routerprops) => <Dashboard {...routerprops} h />}
				/>
				<Route
					path='/stock/:symbol'
					render={(routerprops) => (
						<Stock
							{...routerprops}
							handleSelectedStockClick={handleSelectedStockClick}
							selectedStock={selectedStock}
						/>
					)}
				/>
				<Route path='/about' component={About} />
			</Switch>
		</Router>
	);
};
