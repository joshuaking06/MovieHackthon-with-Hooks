import React from 'react'

const RecommendedMovies = ({ movies, getId }) => {

  return(
    <div className="related-box columns is-multiline">
      <h1 className="title is2">Suggestions</h1>
      {movies.map((movie,index) =>
        index < 6 &&
            <img
              key={index}
              className="column is-5 related"
              onClick={() => getId(movie.id)} src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`}/>)}
    </div>
  )
}

export default RecommendedMovies
