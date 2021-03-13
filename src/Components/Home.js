import React,{useState} from 'react';
import Recommended from './Recommended';
import Search from './Search';

function Home({ strainData }) {

	return (
		<div>
			<Search />
			<Recommended strainData={strainData} />
		</div>
	);
}

export default Home;
