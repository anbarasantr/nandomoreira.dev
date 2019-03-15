import React from 'react'
import ReactInstagramFeed from 'react-instagram-feed'
import { Wrapper } from '../Wrapper'

export const List = ({ options }) => (
  <ReactInstagramFeed
    className="InstagramFeed__photos"
    accessToken={options.accessToken}
    count={options.total}
    type="user"
    param="self"
    resolution="thumbnail"
    wrapper={Wrapper}
    linkTarget="_blank"
    showButton={false}
    hasLink
    forceNext={Date.now()}
  />
)
