import React from 'react';

const Stock = (props) => {
	React.useEffect(() => {
		const symbol =
			props.match.params.symbol === null ? 'AAPL' : props.match.params.symbol;
		//console.log(' Stock symbol: ', symbol);
		const url = `https://financialmodelingprep.com/api/v3/profile/${symbol}?apikey=0b72bf5737a447cd78dfcc5dde40986a`;
		const makeApiCall = async () => {
			const res = await fetch(url);
			const selectedStock = await res.json();
			//console.log(' Received Stock details: ', selectedStock[0]);
			props.handleSelectedStockClick(selectedStock[0]);
		};

		makeApiCall();
	}, []);

	//console.log('Stock SelectedStock: ', props.selectedStock);

	// Sample Data
	// [
	// 	{
	// 		symbol: 'AAPL',
	// 		price: 114.09,
	// 		beta: 1.3297,
	// 		volAvg: 171475534,
	// 		mktCap: 1951224170000,
	// 		lastDiv: 0.75,
	// 		range: '53.1525-137.98',
	// 		changes: -0.87,
	// 		companyName: 'Apple Inc',
	// 		exchange: 'Nasdaq Global Select',
	// 		exchangeShortName: 'NASDAQ',
	// 		industry: 'Consumer Electronics',
	// 		website: 'https://www.apple.com/',
	// 		description:
	// 			"Apple, Inc. engages in the design, manufacture, and sale of smartphones, personal computers, tablets, wearables and accessories, and other variety of related services. The company is headquartered in Cupertino, California and currently employs 137,000 full-time employees. The company is considered one of the Big Four technology companies, alongside Amazon, Google, and Microsoft. The firm's hardware products include the iPhone smartphone, the iPad tablet computer, the Mac personal computer, the iPod portable media player, the Apple Watch smartwatch, the Apple TV digital media player, the AirPods wireless earbuds and the HomePod smart speaker. Apple's software includes the macOS, iOS, iPadOS, watchOS, and tvOS operating systems, the iTunes media player, the Safari web browser, the Shazam acoustic fingerprint utility, and the iLife and iWork creativity and productivity suites, as well as professional applications like Final Cut Pro, Logic Pro, and Xcode. Its online services include the iTunes Store, the iOS App Store, Mac App Store, Apple Music, Apple TV+, iMessage, and iCloud. Other services include Apple Store, Genius Bar, AppleCare, Apple Pay, Apple Pay Cash, and Apple Card.",
	// 		ceo: 'Mr. Timothy Cook',
	// 		sector: 'Technology',
	// 		country: 'US',
	// 		fullTimeEmployees: '137000',
	// 		phone: '14089961010',
	// 		address: '1 Apple Park Way',
	// 		city: 'Cupertino',
	// 		state: 'CALIFORNIA',
	// 		zip: '95014',
	// 		dcfDiff: 89.92,
	// 		dcf: 297.11,
	// 		image: 'https://financialmodelingprep.com/image-stock/AAPL.jpg',
	// 		ipoDate: '1980-12-12',
	// 	},
	// ];

	const stock = props.selectedStock;

	return (
		<div>
			<h1>
				<a href={stock.website} target='_blank'>
					{stock.companyName} ({stock.symbol})
				</a>
			</h1>
			<h3>
				Price: {stock.price}, Changes: {stock.changes}
			</h3>
			<h3>
				Dcf: {stock.dcf}, dcfDiff: {stock.dcfDiff}
			</h3>
			<h4>
				Industry: {stock.industry}, Sector: {stock.sector}
			</h4>
			<p>
				Exchange - {stock.exchange} ({stock.exchangeShortName})
			</p>
			<p>IPO Date: {stock.ipoDate}</p>
			<p>
				Beta: {stock.beta}, Vol Avg.: {stock.volAvg}, Market Capital:{' '}
				{stock.mktCap}, Last Div: {stock.lastDiv}, Range: {stock.range}
			</p>
			<img src={stock.image} alt={stock.companyName} width='250px' />
			<p>
				Address:
				{stock.address}, {stock.city}, {stock.state} - {stock.zip},{' '}
				{stock.country}, Ph - {stock.phone}, website: {stock.website}
			</p>
			<p>{stock.description}</p>
			<p>CEO: {stock.ceo}</p>
			<p>Full-time Employees: {stock.fullTimeEmployees}</p>
		</div>
	);
};

export default Stock;
