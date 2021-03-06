import React from 'react'
import classes from './postSingle.module.styl'

export const Content = ({ html, children }) => (
  <div className={`postSingle__content card ${ classes.content }`}>
    {html && (
      <article
        className={classes.content__body}
        itemProp="articleBody"
        dangerouslySetInnerHTML={{ __html: html }}
      />
    )}
    {children}
  </div>
)
