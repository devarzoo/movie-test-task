import React, { useEffect } from 'react'
import './detail.css'
import { useGlobelContext } from '../../context'
import { GoStar } from 'react-icons/go'
import { RxDotFilled } from 'react-icons/rx'


const Detail = () => {

	const { movieDetail, singleMovie } = useGlobelContext()


	

	console.log(singleMovie)
	


	return (
		<div className='outer-div' >
		<div className='img-div' >
		<img src={singleMovie.Poster} />
		</div>

		<div className='detail-div' >

			<div className='rating-div' >
					<p className='star-icon' ><GoStar /></p>
				 <h3>{singleMovie.imdbRating}</h3>
				 <h4>|</h4>
			 		<p>{singleMovie.imdbVotes}</p>
			</div>
			<p className='movie-title' >{singleMovie.Title}</p>
			<div className='release-div' >
					<p>{singleMovie.Runtime}</p>
				<span>
				<RxDotFilled />
				{singleMovie.Genre}
				</span>
				<span>
					<RxDotFilled />
						{singleMovie.Year}
				</span>
			</div>
			<p>{singleMovie.Plot}</p>
			</div>


		</div>
	)
}

export default Detail