import React,{useState} from 'react';
import './styling/StrainFinderResults.css'


function StrainFinderResults({setSearching, searchUrl}) {
    const [searchData, setSearchData] = useState([])

    fetch(searchUrl).then(res => res.json()).then(resJson => setSearchData(resJson))

    function toggle() {
        setSearching(false)
    }

    return (
			<div className='strain-container grid-strainfinder-results'>
				<button onClick={toggle}>Back</button>
				{searchData.map((searchItem) => (
					<p className='strainfinder-result'>{searchItem.name}</p>
				))}
			</div>
		);
}

export default StrainFinderResults;