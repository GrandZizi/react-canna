import React, { useState } from 'react';

function Search(props) {
	const [display, setDisplay] = useState(false);
	const [searchStr, setSearchStr] = useState('');
	const [searchResults, setSearchResults] = useState();
	const [searchUrl, setSearchUrl] = useState('');
	const key = process.env.REACT_APP_API_KEY;
	const baseUrl = `https://strainapi.evanbusse.com/${key}/strains/search/name/`;

	function handleChange(e) {
		setSearchStr(e.target.value);
	}
	function handleClick(e) {
		e.preventDefault();
		setSearchUrl(`${baseUrl}${searchStr}`);
		console.log(searchStr);
		fetch(`${baseUrl}${searchStr}`)
			.then((res) => res.json())
			.then((resJson) => {
				// setSearchResults(resJson);
				console.log(resJson);
			})
			.catch((err) => console.log(err));
		console.log(searchResults);
	}

	return (
		<div>
			<form onSubmit={handleClick}>
				<input
					type='text'
					placeholder='Enter a Strain Name'
					onChange={handleChange}
				/>
				<input type='submit' />
			</form>
		</div>
	);
}

export default Search;
