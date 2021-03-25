import React,{useState,useEffect} from 'react';
import './styling/StrainFinderResults.css'


function StrainFinderResults({setSearching, searchUrl}) {
    const [searchData, setSearchData] = useState([])

	// useEffect(() => {
		fetch(searchUrl).then(res => res.json()).then(resJson => setSearchData(resJson)).catch(err => console.log(err))
	// }, [searchUrl])
    

    function toggle() {
        setSearching(false);
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