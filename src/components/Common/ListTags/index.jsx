import React from 'react'
import Link from 'gatsby-link'
import { Icon } from 'Components/Common'
import kebabCase from 'lodash.kebabcase'
import classes from './postTags.module.styl'

export const ListTags = ({ tags, showLinks = true, ...props }) => {
  return (
    <aside className={`listTags ${ classes.list }`} {...props}>
      <span>
        <Icon id="tags" fill="#25ced1" />
      </span>
      <nav itemProp="keywords">
        {tags.map((tag, index) => {
          if (showLinks) {
            return (
              <Link
                key={index}
                className={`listTags__tag ${ classes.tag }`}
                to={`/tag/${ kebabCase(tag) }`}
              >
                #{tag}
              </Link>
            )
          }
          return (
            <span key={index} className={`listTags__tag ${ classes.tag }`}>
              #{tag}
            </span>
          )
        })}
      </nav>
    </aside>
  )
}
