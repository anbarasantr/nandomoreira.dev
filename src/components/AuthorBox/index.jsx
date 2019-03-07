import React from 'react'

import Image from '../Image'
import SocialIcons from '../SocialIcons'

import module from './authorbox.module.styl'

export default ({ author }) => {
  return (
    <aside className={module.AuthorBox}>
      <div className={module.AuthorBox__inner}>
        <Image
          node={author.avatar}
          className={module.AuthorBox__image}
          title={`Foto do autor ${author.name}`}
          alt={`Foto do autor ${author.name}`}
        />
        <div className={module.AuthorBox__body}>
          <h3>{author.name}</h3>
          <p>{author.bio}</p>
          <SocialIcons />
        </div>
      </div>
    </aside>
  )
}
