import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
	return (
		<div className='navbar-container' >
		<div className='movie-logo' >
			MOVIE
		</div>
		<div className='home-link' >
			<Link to='/'>Home</Link>
		</div>
		</div>
	)
}

export default Navbar