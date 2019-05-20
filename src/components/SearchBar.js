import React from 'react'


const SearchBar = ({ searchText, handleChange, possibleResults, getMovie }) => {
  return(
    <div>
      <input
        autoComplete="off"
        id="search-bar"
        // className="column is-8"
        value={searchText}
        onChange={handleChange}
      />
      {possibleResults &&
        <div className="search-result-list">
          {possibleResults.map((possibleResult,index) =>
            index < 5 &&
            <div
              className="search-result"
              onClick={(e) => getMovie(undefined, e)}
              key={index}
              id={possibleResult.imdbID}>
              <span>{possibleResult.Title}</span>
              <img src={possibleResult.Poster}/>
            </div>
          )}
        </div>
      }
    </div>
  )
}



export default SearchBar
