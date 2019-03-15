import React from 'react'
import Link from 'gatsby-link'
import Icon from '../Icons/Icon'
import kebabCase from 'lodash/kebabCase'
import module from './postTags.module.styl'

const PostTags = ({ tags, showLinks = true, ...props }) => {
  return (
    <aside className={`PostTags ${module.list}`} {...props}>
      <span>
        <Icon id="tags" fill="#25ced1" />
      </span>
      <nav itemProp="keywords">
        {tags.map((tag, index) => {
          if (showLinks) {
            return (
              <Link
                key={index}
                className={module.tag}
                to={`/tag/${kebabCase(tag)}`}
              >
                #{tag}
              </Link>
            )
          }
          return (
            <span key={index} className={module.tag}>
              #{tag}
            </span>
          )
        })}
      </nav>
    </aside>
  )
}

export default PostTags
