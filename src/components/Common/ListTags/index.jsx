import React from 'react'
import Link from 'gatsby-link'
import { Icon } from 'Components/Common'
import kebabCase from 'lodash/kebabCase'
import classes from './postTags.module.styl'

export const ListTags = ({ tags, showLinks = true, ...props }) => {
  return (
    <aside className={`PostTags ${classes.list}`} {...props}>
      <span>
        <Icon id="tags" fill="#25ced1" />
      </span>
      <nav itemProp="keywords">
        {tags.map((tag, index) => {
          if (showLinks) {
            return (
              <Link
                key={index}
                className={classes.tag}
                to={`/tag/${kebabCase(tag)}`}
              >
                #{tag}
              </Link>
            )
          }
          return (
            <span key={index} className={classes.tag}>
              #{tag}
            </span>
          )
        })}
      </nav>
    </aside>
  )
}
