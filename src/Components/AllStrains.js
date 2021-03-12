import React from 'react';
import { Link } from "react-router-dom";

function AllStrains({strainData}) {

    const strainDataKeys = Object.keys(strainData)


    return (
			<div>
				{strainDataKeys.map((strain,index) => (
					<h1 key={index}>
						<Link to={`/AllStrains/${strain}`}>
							{strain}
						</Link>
					</h1>
				))}
			</div>
		);
}

export default AllStrains;