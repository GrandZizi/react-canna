import React, { useState, useEffect } from 'react';
import { Link, Route } from 'react-router-dom';

function StrainFinder(props) {
	const [positive, setPositive] = useState([]);
	const [negative, setNegative] = useState([]);
	const [medical, setMedical] = useState([]);
	const [flavors,setFlavors] = useState([])
	const key = process.env.REACT_APP_API_KEY;
	const baseUrl = `https://strainapi.evanbusse.com/${key}/strains/search/`;

	function settingValues() {
		fetch(`https://strainapi.evanbusse.com/${key}/searchdata/effects`)
			.then((res) => res.json())
			.then((resJson) => {
				resJson.forEach((element) => {
					if (element.type === 'positive') {
						positive.push(element.effect);
					} else if (element.type === 'negative') {
						negative.push(element.effect);
					} else {
						medical.push(element.effect);
					}
				});
			});

		fetch(`https://strainapi.evanbusse.com/${key}/searchdata/flavors`)
			.then((res) => res.json())
			.then((resJson) => setFlavors(resJson));
	}


	useEffect(() => {
		settingValues()
	}, []);

	return (
		<div>
			<Link to='/StrainFinder'>
			<form>
				<select>
					<option value='race'>Race</option>
					<option value='effect'>Effect</option>
					<option selected value='flavor'>
						Flavor
					</option>
					<option value='name'>Name</option>
				</select>
				<input type='text' placeholder='Enter a defining value' />
				<input type='submit' />
			</form>
			</Link>
			<Route></Route>
			<Route path='/StrainFinder' exact>
			<h2>Effect Types</h2>
			<div>
				<h3>Positive</h3>
				{positive.map((effect) => (
					<p>{effect}</p>
				))}
			</div>
			<div>
				<h3>Negative</h3>
				{negative.map((effect) => (
					<p>{effect}</p>
				))}
			</div>
			<div>
				<h3>Medical</h3>
				{medical.map((effect) => (
					<p>{effect}</p>
				))}
			</div>
			<h2>Flavors</h2>
			{flavors.map(flavor => <p>{flavor}</p>)}
			</Route>
		</div>
	);
}

export default StrainFinder;
