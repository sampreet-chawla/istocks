import React from 'react';

const About = (props) => {
	return (
		<main>
			<h1>About page</h1>
			<p>
				This site provides the price details of the most active stocks for the
				day.
			</p>
			<p>
				The Navigation bar helps move across the following secions of the site
			</p>
			<ul>
				<li>Home Page - THe Landing page for the site.</li>
				<li>
					Stocks page - Provides the dashboard of most active stocks and their
					price changes for the day. The company name link to the individual
					stock page.
				</li>
				<li>About page - listing the site details.</li>
			</ul>
		</main>
	);
};

export default About;
