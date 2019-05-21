import React, { useState, useEffect } from 'react'
import ReactDOM from 'react-dom'

import axios from 'axios'
import 'bulma'
import './style.scss'

import DisplayMoviesWatched from './components/DisplayMoviesWatched'
import SearchBar from './components/SearchBar.js'
import RecommendedMovies from './components/RecommendedMovies.js'

const App = (props) => {
	const [ searchText, setSearchText ] = useState('')
	const [ moviesWatched, setMoviesWatched ] = useState([])
	const [ searchResults, setSearchResults ] = useState([])
	const [ relatedMovies, setRelatedMovies ] = useState([])

	const handleChange = (e) => {
		setSearchText(e.target.value)
	}

	useEffect(
		() => {
			if (searchText.length > 2) getSearchResults()
			if (searchText.length < 3) setSearchResults([])
		},
		[ searchText ]
	)

	const getSearchResults = () => {
		axios
			.get(
				`https://api.themoviedb.org/3/search/movie?api_key=${process.env
					.API_KEY}&language=en-US&query=${searchText}&page=1&include_adult=false`
			)
			.then((res) => {
				setSearchResults(res.data.results)
			})
			.catch((err) => console.log(err))
	}

	const getMovie = (e) => {
		setSearchText('')
		setSearchResults([])
		axios
			.get(
				`https://api.themoviedb.org/3/movie/${e.currentTarget.id}?api_key=${process.env
					.API_KEY}&language=en-US`
			)
			.then((res) => {
				setMoviesWatched([ ...moviesWatched, res.data ])
				makeRecommendedRequest(res.data.id)
			})
	}

	const makeRecommendedRequest = (id) => {
		axios
			.get(
				`https://api.themoviedb.org/3/movie/${id}/recommendations?api_key=${process.env
					.API_KEY}`
			)
			.then((res) => setRelatedMovies(res.data.results))
	}

	return (
		<main>
			<section className="section">
				<div className="container">
					<div className="columns is-centered">
						<div className="column is-8">
							<SearchBar
								getMovie={getMovie}
								handleChange={handleChange}
								searchText={searchText}
								possibleResults={searchResults}
							/>
						</div>
					</div>
				</div>
			</section>

			<section className="columns section">
				<div className="column is-9 middle-part">
					<DisplayMoviesWatched movies={moviesWatched} />
				</div>

				<div className="column is-3 side-part">
					{relatedMovies.length > 1 && (
						<RecommendedMovies movies={relatedMovies} getMovie={getMovie} />
					)}
				</div>
			</section>
		</main>
	)
}

ReactDOM.render(<App />, document.getElementById('root'))
