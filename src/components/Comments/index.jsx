import React from 'react'
import { DiscussionEmbed } from 'disqus-react'

import module from './comments.module.styl'

const Comments = ({ shortname, config }) => (
  <aside className={module.comments}>
    <div className={module.inner}>
      <DiscussionEmbed shortname={shortname} config={config} />
    </div>
  </aside>
)

export default Comments
