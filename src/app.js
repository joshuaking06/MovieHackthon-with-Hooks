import React, { useState, useEffect } from 'react'
import ReactDOM from 'react-dom'

import axios from 'axios'
import 'bulma'
import './style.scss'

const apiKey = '&apikey=6116c432'
const baseUrl = 'https://www.omdbapi.com/'

import DisplayTime from './components/DisplayTime'
import DisplayMoviesWatched from './components/DisplayMoviesWatched'
import MovieCard from './components/MovieCard'
import SearchBar from './components/SearchBar.js'
import RecommendedMovies from './components/RecommendedMovies.js'

const [ searchText, setSearchText ] = useState('')
const [ moviesWatched, setMoviesWatched ] = useState([])
const [ possibleResults, setPossibleResults ] = useState([])
const [ relatedMovies, setRelatedMovies ] = useState([])

const App = (props) => {
	const [ searchText, setSearchText ] = useState('')
	const [ moviesWatched, setMoviesWatched ] = useState([])
	const [ possibleResults, setPossibleResults ] = useState([])
	const [ relatedMovies, setRelatedMovies ] = useState([])

	const handleChange = (e) => {
		this.setState({ searchText: e.target.value }, () => getSearchResults())
	}

	const getSearchResults = () => {
		if (searchText.length > 1) {
			axios
				.get(
					`https://api.themoviedb.org/3/search/movie?api_key=adfdea606b119c5d76189ff434738475&language=en-US&query=${searchText}&page=1&include_adult=false`
				)
				.then((res) => {
					this.setState({ possibleResults: res.data.results })
				})
				.catch((err) => console.log(err))
		}
	}

	const getMovie = (e) => {
		this.setState({ searchText: '', possibleResults: [] })
		axios
			.get(
				`https://api.themoviedb.org/3/movie/${e.currentTarget
					.id}?api_key=adfdea606b119c5d76189ff434738475&language=en-US`
			)
			.then((res) => {
				console.log(res)
				this.setState({
					moviesWatched: [ res.data, moviesWatched ]
				})
				makeRecommendedRequest(res.data.id)
			})
	}

	const makeRecommendedRequest = (id) => {
		axios
			.get(
				`https://api.themoviedb.org/3/movie/${id}/recommendations?api_key=adfdea606b119c5d76189ff434738475`
			)
			.then((res) => this.setState({ relatedMovies: res.data.results }))
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
								possibleResults={possibleResults}
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
						<RecommendedMovies movies={relatedMovies} getMovie={this.getMovie} />
					)}
				</div>
			</section>
		</main>
	)
}

ReactDOM.render(<App />, document.getElementById('root'))
