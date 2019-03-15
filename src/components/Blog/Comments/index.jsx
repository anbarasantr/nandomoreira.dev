import React from 'react'
import { DiscussionEmbed } from 'disqus-react'

import classes from './comments.module.styl'

export const Comments = ({ shortname, config }) => (
  <aside className={classes.comments}>
    <div className={classes.inner}>
      <DiscussionEmbed shortname={shortname} config={config} />
    </div>
  </aside>
)
