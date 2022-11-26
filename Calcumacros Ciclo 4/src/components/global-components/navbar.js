import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {

  
	return (
		<div className="navbar-area navbar-area-1">
			{/* navbar top start */}
			<nav className="navbar navbar-expand-lg">
			<div className="container nav-container">
				<div className="logo">
				<Link to="/">CALCUMACROS</Link>
				</div>
			</div>
			</nav>
		</div>

        )
}


export default Navbar