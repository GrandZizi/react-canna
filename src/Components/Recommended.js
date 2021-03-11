import React, { useEffect, useState } from 'react';

function Recommended({ strainData }) {
	const [selectedStrains, setSelectedStrains] = useState([]);

	useEffect(() => {
		randomStrains();
		setSelectedStrains([]);
	}, [selectedStrains]);

	function randomStrains() {
		let randomizedStrains = [];
		const strainDataKeys = Object.keys(strainData);

		for (let i = 0; i < 6; i++) {
			let randomIndex = Math.floor(Math.random() * 1970);
			randomizedStrains.push(strainDataKeys[randomIndex]);
		}
	}
	randomStrains();

	return (
		<div>
			<button onClick={randomStrains}>Re-roll</button>
			<h2>Recommended Strains</h2>
			{selectedStrains.map((strain) => (
				<h4>{strain}</h4>
			))}
		</div>
	);
}

export default Recommended;
