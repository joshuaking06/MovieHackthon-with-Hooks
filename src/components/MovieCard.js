import React from 'react'

const MovieCard = ({ runtime, title, image, year }) => {
  return (
    <div className="card">
        <div className="card-image">
          <figure className="image" style={{ backgroundImage: `url(${image})` }} />
        </div>

        <div className="card-content">
          <div className="content">
            <p><strong>{title}</strong></p>
            <p>Year: {year} <br /> Runtime: {runtime}</p>
          </div>
        </div>

    </div>
  )
}

export default MovieCard
