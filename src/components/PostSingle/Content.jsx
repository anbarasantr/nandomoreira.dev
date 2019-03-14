import React from 'react'
import module from './postSingle.module.styl'

const PostSingleContent = ({ html, children }) => (
  <div className={module.content}>
    {html && (
      <article
        className={module.content__body}
        itemProp="articleBody"
        dangerouslySetInnerHTML={{ __html: html }}
      />
    )}
    {children}
  </div>
)

export default PostSingleContent
