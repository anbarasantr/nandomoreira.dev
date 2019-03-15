import React from 'react'
import Link from 'gatsby-link'
import { Icon, SocialIcons, Image } from 'Components/Common'
import classes from './authorbox.module.styl'

export const AuthorBox = ({ author, socialIcons }) => (
  <aside className={classes.AuthorBox}>
    <div className={classes.AuthorBox__inner}>
      <Link to="/sobre" className={classes.AuthorBox__image}>
        <Image
          node={author.avatar}
          title={`Foto do autor ${author.name}`}
          alt={`Foto do autor ${author.name}`}
        />
      </Link>
      <div className={classes.AuthorBox__body}>
        <h3 className={classes.AuthorBox__title}>
          <Link to="/sobre">{author.name}</Link>
        </h3>
        <p className={classes.AuthorBox__text}>
          {author.bio}{' '}
          <Link to="/sobre" className={classes.AuthorBox__linkabout}>
            <span>leia mais </span>
            <Icon id="arrow-right" fill="#50c290" />
          </Link>
        </p>
        <SocialIcons icons={socialIcons} style={{ marginLeft: '-.625rem' }} />
      </div>
    </div>
  </aside>
)
