import React,{useState} from 'react';


function StrainFinderResults({setSearching, searchUrl}) {
    const [searchData, setSearchData] = useState([])

    fetch(searchUrl).then(res => res.json()).then(resJson => setSearchData(resJson))

    function toggle() {
        setSearching(false)
    }

    return (
			<div>
				<button onClick={toggle}>Back</button>
				{searchData.map((searchItem) => (
					<p>{searchItem.name}</p>
				))}
			</div>
		);
}

export default StrainFinderResults;