import React, { useState, useEffect } from 'react';
import StrainFinderResults from './StrainFinderResults';
import './styling/StrainFinder.css';
import {Route} from 'react-router-dom'
import Strain from './Strain'

function StrainFinder(props) {
	const [searching, setSearching] = useState(false)
	const [positive, setPositive] = useState([]);
	const [negative, setNegative] = useState([]);
	const [medical, setMedical] = useState([]);
	const [flavors,setFlavors] = useState([]);
	const [type, setType] = useState('race')
	const [input, setInput] = useState()
	const [searchUrl, setSearchUrl] = useState('')
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

	function handleTypeChange(e) {
		setType(e.target.value)
	}

	function handleInputChange(e) {
		setInput(e.target.value)
	}

	function handleSubmit(e){
		e.preventDefault()
		setSearching(true)
		setSearchUrl(`${baseUrl}${type}/${input}`);
	}


	useEffect(() => {
		settingValues()
	}, []);

	return (
		<div>
			<form>
				<select value={type} onChange={handleTypeChange}>
					<option value='race'>Race</option>
					<option value='effect'>Effect</option>
					<option selected value='flavor'>
						Flavor
					</option>
					<option value='name'>Name</option>
				</select>
				<input
					type='text'
					placeholder='Enter a defining value'
					onChange={handleInputChange}
				/>
				<input type='submit' onClick={handleSubmit} />
			</form>
			{!searching && (
				<>
					<h2 className='effect-type'>Effect Types</h2>
					<div className='grid-effects'>
						<div className='effect-container'>
							<h3 className='effect-title'>Positive</h3>
							<div className='grid-effect'>
								{positive.map((effect) => (
									<p className='effect'>{effect}</p>
								))}
							</div>
						</div>
						<div className='effect-container'>
							<h3 className='effect-title'>Negative</h3>
							<div className='grid-effect'>
								{negative.map((effect) => (
									<p className='effect'>{effect}</p>
								))}
							</div>
						</div>
						<div className='effect-container '>
							<h3 className='effect-title'>Medical</h3>
							<div className='grid-effect'>
								{medical.map((effect) => (
									<p className='effect'>{effect}</p>
								))}
							</div>
						</div>
						<div className='effect-container '>
							<h2 className='effect-title'>Flavors</h2>
							<div className='grid-effect'>
								{flavors.map((flavor) => (
									<p className='effect'>{flavor}</p>
								))}
							</div>
						</div>
					</div>
				</>
			)}
			{searching && (
				<StrainFinderResults
					setSearching={setSearching}
					searchUrl={searchUrl}
				/>
			)}
		</div>
	);
}

export default StrainFinder;
