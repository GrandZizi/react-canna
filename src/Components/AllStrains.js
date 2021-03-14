import React from 'react';
import { Link } from "react-router-dom";
import './styling/AllStrains.css'

function AllStrains({strainData}) {

    const strainDataKeys = Object.keys(strainData)


    return (
			<div className='all-strains-container'>
				{strainDataKeys.map((strain,index) => (
					<h1 key={index} className='strain-container'>
						<Link to={`/AllStrains/${strain}`}className='strain-link'>
							{strain}
						</Link>
					</h1>
				))}
			</div>
		);
}

export default AllStrains;