import React from 'react'
import { List } from 'components/Instagram'
import './feed.styl'

export const Feed = ({ options, show }) => (
  <div className="InstagramFeed">
    <h4>
      <span>Siga-me no instagram: </span>
      <a href={`https://instagram.com/${ options.user }`}>@{options.user}</a>
    </h4>
    {show && <List options={options} />}
  </div>
)
