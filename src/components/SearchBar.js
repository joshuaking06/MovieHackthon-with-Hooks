import React from 'react'

const SearchBar = ({ searchText, handleChange, possibleResults, getMovie }) => {
	return (
		<div>
			<input autoComplete="off" id="search-bar" value={searchText} onChange={handleChange} />
			{possibleResults && (
				<div className="search-result-list">
					{possibleResults.map(
						(possibleResult, index) =>
							index < 5 && (
								<div
									className="search-result"
									onClick={getMovie}
									key={index}
									id={possibleResult.id}
								>
									<span>{possibleResult.title}</span>
									<img
										src={
											possibleResult.poster_path ? (
												`http://image.tmdb.org/t/p/w185/${possibleResult.poster_path}`
											) : (
												''
											)
										}
									/>
								</div>
							)
					)}
				</div>
			)}
		</div>
	)
}

export default SearchBar
