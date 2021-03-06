import React, { useState } from 'react';
//import stockData from './stock-data.js';
import { Link } from 'react-router-dom';
import './Dashboard.css';

const Dashboard = (props) => {
	const [mostActiveStockList, setMostActiveStockList] = useState([]);

	//////////////////////////////////////////////////////
	// GETTING MOST ACTIVE STOCK list FROM financialmodellingprep

	React.useEffect(() => {
		const url = `https://financialmodelingprep.com/api/v3/stock/actives?apikey=0b72bf5737a447cd78dfcc5dde40986a`;
		const makeApiCall = async () => {
			const res = await fetch(url);
			const stockList = await res.json();
			console.log(
				' Received Most Active Stock List: ',
				stockList.mostActiveStock
			);
			setMostActiveStockList(stockList.mostActiveStock);
		};

		makeApiCall();
	}, []);

	let stockList = mostActiveStockList.map((stock) => {
		const styleColor = stock.changes < 0 ? 'red' : 'green';
		return (
			<div className='stock' key={stock.ticker}>
				<p>
					<Link to={'/stock/' + stock.ticker}>
						{stock.companyName} ({stock.ticker})
					</Link>
					, {stock.price},
					<span style={{ color: styleColor }}>
						{stock.changes}({stock.changesPercentage})
					</span>
				</p>
			</div>
		);
	});

	return (
		<div>
			<h1>Most Active Stocks</h1>
			<div className='stock-header'>
				<p>Company Name, Price, Change</p>
			</div>
			<div>
				<hr />
			</div>
			{stockList}
		</div>
	);

	//////////////////////////////////////////////////////
	// GETTING MOST ACTIVE STOCK list FROM stack-data.js

	// let stockList = stockData.map((stock) => {
	// 	return (
	// 		<div className='stock' key={stock.symbol}>
	// 			<p>
	// 				<Link to={'/stock/' + stock.symbol}>
	// 					{stock.name} ({stock.symbol})
	// 				</Link>
	// 				: {stock.lastPrice} {stock.change}
	// 			</p>
	// 		</div>
	// 	);
	// });

	//return (
	// <>
	// 	<h1>Most Active Stocks</h1>
	// 	<p>
	// 		<span>Company Name</span>
	// 		<span>Price</span>
	// 		<span>Changes</span>
	// 	</p>
	//     <hr/>
	// 	{stockListJSX}
	// </div>
	//);
};

export default Dashboard;
