import React from 'react'
import { DiscussionEmbed } from 'disqus-react'

import classes from './comments.module.styl'

export const Comments = ({ shortname, config }) => (
  <aside className={`comments ${ classes.comments }`}>
    <div className={`${ classes.card }`}>
      <DiscussionEmbed shortname={shortname} config={config} />
    </div>
  </aside>
)
