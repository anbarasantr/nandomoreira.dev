import React from 'react'
import Link from 'gatsby-link'
import PropTypes from 'prop-types'
import Image from '../Image'
import Icon from '../Icons'
import SocialIcons from '../SocialIcons'
import module from './authorbox.module.styl'

const defaultProps = {
  author: {},
  socialIcons: {},
}

const AuthorBox = ({ author, socialIcons }) => (
  <aside className={module.AuthorBox}>
    <div className={module.AuthorBox__inner}>
      <Link to="/sobre" className={module.AuthorBox__image}>
        <Image
          node={author.avatar}
          title={`Foto do autor ${author.name}`}
          alt={`Foto do autor ${author.name}`}
        />
      </Link>
      <div className={module.AuthorBox__body}>
        <h3 className={module.AuthorBox__title}>
          <Link to="/sobre">{author.name}</Link>
        </h3>
        <p className={module.AuthorBox__text}>
          {author.bio}{' '}
          <Link to="/sobre" className={module.AuthorBox__linkabout}>
            <span>leia mais </span>
            <Icon id="icon-arrow-right" fill="#50c290" />
          </Link>
        </p>
        <SocialIcons icons={socialIcons} style={{ marginLeft: '-.625rem' }} />
      </div>
    </div>
  </aside>
)

const propTypes = {
  author: PropTypes.object,
  socialIcons: PropTypes.object,
}

AuthorBox.propTypes = propTypes
AuthorBox.defaultProps = defaultProps

export default AuthorBox
