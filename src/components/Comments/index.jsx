import React from 'react'
import { DiscussionEmbed } from 'disqus-react'

import module from './comments.module.styl'

const Comments = ({ shortname, config }) => {
  return (
    <aside className={module.Comments}>
      <div className={module.Comments__inner}>
        <h3>Gostou? Então deixe seu comentário!</h3>
        <DiscussionEmbed shortname={shortname} config={config} />
      </div>
    </aside>
  )
}

export default Comments
