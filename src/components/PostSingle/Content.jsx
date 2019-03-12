import React from 'react'
import module from './postSingle.module.styl'

const PostSingleContent = ({ html, children }) => (
  <div className={module.Content}>
    {html && (
      <article
        className={module.Content__body}
        itemProp="articleBody"
        dangerouslySetInnerHTML={{ __html: html }}
      />
    )}
    {children}
  </div>
)

export default PostSingleContent
