import React from 'react'
import Link from 'gatsby-link'
import { Icon, Image, DonateButton } from 'components/Common'
import classes from './authorbox.module.styl'
import './authorbox.styl'

export const AuthorBox = ({ author, donateLink }) => (
  <aside className={`authorbox ${ classes.authorbox }`}>
    <div className={`card ${ classes.card }`}>
      {author.avatar &&
        <Link to="/sobre" className={classes.image}>
          <Image
            node={author.avatar}
            title={`Foto do autor ${ author.name }`}
            alt={`Foto do autor ${ author.name }`}
          />
        </Link>
      }
      <div className={classes.body}>
        <h3 className={classes.title}>{author.name}</h3>
        <p className={classes.text}>
          {author.bio} <Link to="/sobre" className={`linkabout ${ classes.linkabout }`}>
            <span>leia mais sobre o author</span>
            <Icon id="arrow-right" fill="#50c290" />
          </Link>
        </p>
        <p><strong>Se você gosta do meu conteúdo, por favor considere apoiar o que eu faço!</strong></p>
        <span className={classes.donatebutton}>
          <DonateButton link={donateLink} text="Doe $5 para continuar o blog" />
        </span>
      </div>
    </div>
  </aside>
)
