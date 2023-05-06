import { createContext, useContext, useState, useEffect } from "react"
import axios from "axios"

const AppContext = createContext()

const AppProvider = ({ children }) => {

	const [movies, setMovies] = useState([])
	const [search, setSearch] = useState("")
	const [movieId, setMovieId] = useState()
	const [singleMovie, setSingleMovie] = useState([])


	const getMovies = async (search) => {
		let res = await axios.get(`http://www.omdbapi.com/?s=${search}&apikey=4930c8f7`);
		// console.log(res)
		setMovies(res.data.Search)
	}

	useEffect(() => {
		movieDetail(movieId)
	}, [movieId])


	const movieDetail = async(movieId)=>{
		let res = await axios.get(`http://www.omdbapi.com/?i=${movieId}&apikey=4930c8f7`)
		setSingleMovie(res.data)
		console.log(res)
	}

	console.log(singleMovie)




	return <AppContext.Provider value={{ movies,getMovies,search, setSearch, setMovieId, movieDetail, singleMovie}}>
		{children}
	</AppContext.Provider>
}


export const useGlobelContext = () => {
	return useContext(AppContext)
}

export { AppContext, AppProvider }