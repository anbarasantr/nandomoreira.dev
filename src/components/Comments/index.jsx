import React from 'react'
import { DiscussionEmbed } from 'disqus-react'

import module from './comments.module.styl'

const Comments = ({ shortname, config }) => (
  <aside className={module.Comments}>
    <div className={module.Comments__inner}>
      <div className={module.Comments__header}>
        <h3>Gostou? Então deixe seu comentário!</h3>
      </div>
      <DiscussionEmbed shortname={shortname} config={config} />
    </div>
  </aside>
)

export default Comments
