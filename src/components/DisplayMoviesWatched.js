import React from 'react'

import MovieCard from './MovieCard'

const DisplayMoviesWatched = ({ movies }) => {
	if (movies.length === 0) return null
	return (
		<div className="columns is-multiline">
			{movies.map((movie, index) => (
				<div className="column is-3" key={index}>
					<MovieCard title={movie.title} image={movie.poster_path} />
				</div>
			))}
		</div>
	)
}

export default DisplayMoviesWatched
