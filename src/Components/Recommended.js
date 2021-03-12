import React, { useEffect, useState } from 'react';

function Recommended({ strainData }) {
	const [selectedStrains, setSelectedStrains] = useState();

	function randomStrains() {
		let randomizedStrains = [];
		const strainDataKeys = Object.keys(strainData);
		console.log(strainDataKeys);
		console.log(strainData);

		const temp = [
			'Dog Shit',
			'Cannatonic',
			'Tres Dawg',
			'Thai Haze',
			'Ewok',
			'Charlie Sheen',
			'Nexus OG',
			"Bhang Arjan's Strawberry Haze",
			'Big Wreck',
			'NYC Diesel',
			'Gorilla Cookies',
			'Earthquake',
		];

		if (selectedStrains) {
			for (let i = 0; i < 6; i++) {
				let randomIndex = Math.floor(Math.random() * 1970);
				randomizedStrains.push(strainDataKeys[randomIndex]);
			}
		}
		else{
			for (let i = 0; i < 6; i++) {
				let randomIndex = Math.floor(Math.random() * 12);
				randomizedStrains.push(temp[randomIndex]);
			}
		}
		
		console.log(randomizedStrains);
		return randomizedStrains;
	}

	useEffect(() => {
		const random = randomStrains()
		setSelectedStrains(random);
	}, []);

	return (
		<div>
			<button onClick={() => setSelectedStrains(randomStrains())}>
				Re-roll
			</button>
			<h2>Recommended Strains</h2>
			{selectedStrains?.map((strain) => (
				<h4>{strain}</h4>
			))}
		</div>
	);
}

export default Recommended;
