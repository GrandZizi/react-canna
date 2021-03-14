import React, { useEffect, useState } from 'react';
import './styling/Recommended.css'

function Recommended({ strainData }) {
	const [selectedStrains, setSelectedStrains] = useState();

	function randomStrains() {
		let randomizedStrains = [];
		const strainDataKeys = Object.keys(strainData);

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
			'Super Bud',
			'Skunk Haze',
			'Tangerine Haze',
			'Bhang Lemon Haze',
			'Whitewalker OG',
			'Black Magic',
			'Blackberry Rhino',
			'Super Green Crack',
			'Jacked-Up',
			'Ancient OG',
			'Serious 6',
			'Lime Green Skunk',
		];

		if (selectedStrains) {
			for (let i = 0; i < 6; i++) {
				let randomIndex = Math.floor(Math.random() * 1970);
				randomizedStrains.push(strainDataKeys[randomIndex]);
			}
		}
		else{
			for (let i = 0; i < 6; i++) {
				let randomIndex = Math.floor(Math.random() * temp.length);
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
		<div className='recommended-container'>
			
			<h2 className='recommended-title'>Recommended Strains</h2>
			<button onClick={() => setSelectedStrains(randomStrains())}>
				Roll Another One
			</button>
			<div className='random-strains'>
				{selectedStrains?.map((strain) => (
					<h4 className='strain-name'>{strain}</h4>
				))}
			</div>
		</div>
	);
}

export default Recommended;
