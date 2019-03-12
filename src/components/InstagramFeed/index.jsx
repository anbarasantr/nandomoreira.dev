import React, { Fragment } from 'react'
import ReactInstagramFeed from 'react-instagram-feed'

import './feed.styl'

const Wrapper = ({ children }) => <Fragment>{children}</Fragment>

const InstagramFeed = ({ options, show }) => {
  const { accessToken, total, user } = options
  const forceNext = Date.now()

  return (
    <div className="InstagramFeed">
      <h4>
        <span>Siga-me no instagram: </span>
        <a href={`https://instagram.com/${user}`}>@{user}</a>
      </h4>
      {show && (
        <ReactInstagramFeed
          className="InstagramFeed__photos"
          accessToken={accessToken}
          count={total}
          type="user"
          param="self"
          resolution="thumbnail"
          wrapper={Wrapper}
          linkTarget="_blank"
          showButton={false}
          hasLink
          forceNext={forceNext}
        />
      )}
    </div>
  )
}

export default InstagramFeed
