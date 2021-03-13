import React, { useState } from 'react';

function Search(props) {
    const [display, setDisplay] = useState(false)
    const [searchStr, setSearchStr] = useState('');
    const [searchResults, setSearchResults] = useState()
    const [searchUrl, setSearchUrl] = useState('');
    const key = process.env.REACT_APP_API_KEY
    const baseUrl = `https://strainapi.evanbusse.com/${key}/strains/search/name/`;

function handleChange(e) {
    setSearchStr(e.target.value)
}
function handleClick(e) {
    e.preventDefault()
    setSearchUrl(`${baseUrl}${searchStr}`)

    fetch(searchUrl).then(res => res.json()).then(resJson => console.log(resJson))
    .catch(err => console.log(err))
    console.log(searchResults);
}


    return (
        <div>
            <form>
                <input type='text' placeholder='Enter a Strain Name' onChange={handleChange}/>
                <input type='submit' onClick={handleClick}/>
            </form>
        </div>
    );
}

export default Search;