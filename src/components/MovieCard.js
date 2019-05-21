import React from 'react'

const MovieCard = ({ runtime, title, image, year }) => {
	return (
		<div className="card">
			<div className="card-image">
				<figure
					className="image"
					style={{ backgroundImage: `url(http://image.tmdb.org/t/p/w185/${image})` }}
				/>
			</div>

			<div className="card-content">
				<div className="content">
					<p>
						<strong>{title}</strong>
					</p>
				</div>
			</div>
		</div>
	)
}

export default MovieCard
