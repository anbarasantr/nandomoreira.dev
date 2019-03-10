import React from 'react'
import Link from 'gatsby-link'
import PropTypes from 'prop-types'
import Image from '../Image'
import Icon from '../Icons'
import SocialIcons from '../SocialIcons'
import styles from './styles'

const defaultProps = {
  author: {},
  socialIcons: {},
}

const AuthorBox = ({ author, socialIcons }) => (
  <aside style={styles.authorbox}>
    <div style={styles.authorbox__inner} className="card">
      <Image
        node={author.avatar}
        style={styles.authorbox__image}
        title={`Foto do autor ${author.name}`}
        alt={`Foto do autor ${author.name}`}
      />
      <div style={styles.authorbox__body}>
        <h3 style={styles.authorbox__title}>
          <Link to="/sobre">{author.name}</Link>
        </h3>
        <p style={styles.authorbox__text}>
          {author.bio}{' '}
          <Link to="/sobre" style={{ display: 'flex', alignItems: 'center' }}>
            leia mais{' '}
            <Icon
              id="icon-arrow-right"
              fill="#50c290"
              style={{ padding: '5px', top: '2px', position: 'relative' }}
            />
          </Link>
        </p>
        <SocialIcons icons={socialIcons} />
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
