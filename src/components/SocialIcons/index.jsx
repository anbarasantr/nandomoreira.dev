import React from 'react'
import PropTypes from 'prop-types'
import module from './socialIcons.module.styl'
import Icon from '../Icons'

const defaultProps = {
  icons: {},
}

const SocialIcons = ({ icons }) => (
  <ul className={`SocialIcons ${module.Social}`}>
    {Object.keys(icons).map((item, i) => {
      const link = icons[item]
      if (!link) return null
      return (
        <li className={`SocialIcons__item ${module.Social__item}`} key={i}>
          <a
            className={`SocialIcons__link ${module.Social__link}`}
            href={link}
            target="_blank"
            rel="noopener noreferrer"
          >
            <Icon id={`icon-${item}`} style={{ padding: '4px' }} />
          </a>
        </li>
      )
    })}
  </ul>
)

const propTypes = {
  icons: PropTypes.object,
}

SocialIcons.propTypes = propTypes
SocialIcons.defaultProps = defaultProps

export default SocialIcons
