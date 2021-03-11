import React, { useEffect, useState } from 'react';
import Nav from './Components/Nav';
import { Route } from 'react-router-dom';
import Home from './Components/Home';
import AllStrains from './Components/AllStrains';
import StrainFinder from './Components/StrainFinder';

function App(props) {
	const [strainData, setStrainData] = useState([]);
	const key = process.env.REACT_APP_API_KEY;
	const url = `https://strainapi.evanbusse.com/${key}/strains/search/all`;

	useEffect(() => {
		fetch(url)
			.then((res) => res.json())
			.then((resJson) => setStrainData(resJson));
	}, []);

	return (
		<div>
			<Nav />
			<main>
				<Route path='/' exact>
					<Home strainData={strainData} />
				</Route>
				<Route path='/AllStrains' component={AllStrains} />
				<Route path='/StrainFinder' component={StrainFinder} />
			</main>
		</div>
	);
}

export default App;
