import React from 'react'

import MovieCard from './MovieCard'

const DisplayMoviesWatched = ({ movies }) => {
  if (movies.length === 0) return null
  return(
    <div className="columns is-multiline">
        {movies.map((movie,index) =>
          <div className="column is-3" key={index}>
            <MovieCard
              title={movie.Title}
              image={movie.Poster}
              year={movie.Year}
              runtime={movie.Runtime} />
          </div>
        )}
    </div>

  )
}


export default DisplayMoviesWatched
