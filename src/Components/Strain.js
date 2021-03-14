import React, { useState, useEffect } from 'react';
import './styling/Strain.css'

function Strain({match}) {
	const [strain, setStrain] = useState();
    const [strainEffects,setStrainEffects] = useState({})
	const key = process.env.REACT_APP_API_KEY;
	const strainUrl = `https://strainapi.evanbusse.com/${key}/strains/search/name/${match.params.strainNAME}`;
    const effectsUrl = `http://strainapi.evanbusse.com/${key}/strains/data/effects/`;



    useEffect(() => {
        fetch(strainUrl).then(res => res.json()).then(resJson => {
            fetch(`${effectsUrl}${resJson[0].id}`)
							.then((res) => res.json())
							.then((resJson) => setStrainEffects(resJson));
            setStrain(resJson[0])
        })
    }, [])



	return (
		<div className='allstrian-strain-container'>
			<h1 className='strain-name'>{strain?.name}</h1>
			<h2>{`Race: ${strain?.race}`}</h2>
			<p>{`Description: ${strain?.desc}`}</p>
			<h2>Effects</h2>
			<h3>Positive:</h3>
			{strainEffects.positive?.map((effect) => (
				<p>{effect}</p>
			))}
			<h3>Medical:</h3>
			{strainEffects.medical?.map((effect) => (
				<p>{effect}</p>
			))}
			<h3>Negative:</h3>
			{strainEffects.negative?.map((effect) => (
				<p>{effect}</p>
			))}
		</div>
	);
}

export default Strain;
