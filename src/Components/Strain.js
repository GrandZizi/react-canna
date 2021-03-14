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
			<h1 className='allstrain-strain-name'>{strain?.name}</h1>
			<h2 className='strain-race'>{`Race : ${strain?.race}`}</h2>
			<p className='strian-desc'>{`Description: ${strain?.desc}`}</p>
			<h2 className='effects-title'>Effects</h2>
			<div className='effects-container'>
				<div className='positive-container'>
					<h3 className='effect-title'>Positive :</h3>
					{strainEffects.positive?.map((effect) => (
						<p className='effect'>{effect}</p>
					))}
				</div>
				<div className='medical-container'>
					<h3 className='effect-title'>Medical :</h3>
					{strainEffects.medical?.map((effect) => (
						<p className='effect'>{effect}</p>
					))}
				</div>
				<div className='negative-container'>
					<h3 className='effect-title'>Negative :</h3>
					{strainEffects.negative?.map((effect) => (
						<p className='effect'>{effect}</p>
					))}
				</div>
			</div>
		</div>
	);
}

export default Strain;
