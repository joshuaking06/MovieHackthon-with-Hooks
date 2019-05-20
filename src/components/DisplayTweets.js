import React from 'react'

const DisplayTweets = () => {

  return(
    <div className="columns">
      <div className="column is-3">
        <div className="card">
          <div className="card-content">
            <div className="media">
              <div className="media-left">
                <figure className="image is-48x48">
                  <img src=""/>
                </figure>
              </div>
              <div className="media-content">
                <p className="title is-4">name</p>
                <p className="subtitle is-6">@screen_name</p>
              </div>
            </div>

            <div className="content">
              <a>text</a>.
              <br/>
              <time>created_at</time>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default DisplayTweets
