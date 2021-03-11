import React from 'react';
import {Link} from "react-router-dom";
import './styling/Nav.css';

function Nav() {
    return (
			<nav className='navbar'>
				<Link className='navbar-option home' to='/'>
					Home
				</Link>
				<Link className='navbar-option all-strains' to='/AllStrains'>
					All Strains
				</Link>
				<Link className='navbar-option strain-finder' to='/StrainFinder'>
					Find a Strain For You
				</Link>
			</nav>
		);
}

export default Nav;