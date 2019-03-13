import React from 'react'
import Link from 'gatsby-link'
import Icon from '../Icons'
import kebabCase from 'lodash/kebabCase'
import module from './postTags.module.styl'

const PostTags = ({ tags, showLinks = true, ...props }) => {
  return (
    <aside className={`PostTags ${module.Tags}`} {...props}>
      <span>
        <Icon id="icon-tags" fill="#435b71" />
      </span>
      <nav itemProp="keywords">
        {tags.map((tag, index) => {
          if (showLinks) {
            return (
              <Link
                key={index}
                className={module.Tags__tag}
                to={`/tag/${kebabCase(tag)}`}
              >
                #{tag}
              </Link>
            )
          }
          return (
            <span key={index} className={module.Tags__tag}>
              #{tag}
            </span>
          )
        })}
      </nav>
    </aside>
  )
}

export default PostTags
