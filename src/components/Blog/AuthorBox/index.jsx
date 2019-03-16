import React from 'react'
import Link from 'gatsby-link'
import { Icon, Image, DonateButton } from 'Components/Common'
import classes from './authorbox.module.styl'

export const AuthorBox = ({ author, donateLink }) => (
  <aside className={classes.authorbox}>
    <div className={`card ${ classes.card }`}>
      <Link to="/sobre" className={classes.image}>
        <Image
          node={author.avatar}
          title={`Foto do autor ${ author.name }`}
          alt={`Foto do autor ${ author.name }`}
        />
      </Link>
      <div className={classes.body}>
        <h3 className={classes.title}>{author.name}</h3>
        <p className={classes.text}>
          {author.bio} <Link to="/sobre" className={classes.linkabout}>
            <span>leia mais sobre o author</span>
            <Icon id="arrow-right" fill="#50c290" />
          </Link>
        </p>
        <span className={classes.donatebutton}>
          <DonateButton link={donateLink} text="Doe $5 para continuar o blog" />
        </span>
      </div>
    </div>
  </aside>
)
