import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import './main.css'
import axios from 'axios'
import { useGlobelContext } from '../../context'

const Main = () => {

	const { movies, search, setSearch, getMovies, setMovieId } = useGlobelContext()


useEffect(() => {
	getMovies(search);
}, [search])

	return (
		<div className='main-outer-div' >

		<div className='search-bar' >
			<input
			type='text'
			placeholder='Search...'
			onChange={(e)=>{setSearch(e.target.value)}}
			 />
		</div>

		<div className='movie-outer-div' >
		 {movies?.map((item)=>{
			return <div key={item.imdbID} className='movie-div' >
				<Link to='/details'><img src={item.Poster} onClick={() => {
					setMovieId(item.imdbID)
				}} /></Link>
        <p>{item.Title}</p>
			</div>
		})}
		</div>
		</div>
	)
}

export default Main