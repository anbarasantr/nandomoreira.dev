import React from 'react'
import { Icon } from 'components/Common'
import classes from './donate.module.styl'

export const DonateButton = ({ link, text = 'Doe $5' }) => (
  <a
    href={link}
    className={`donate-link ${ classes.link }`}
    target="_blank"
    role="button"
  >
    <Icon id="coffee" />
    <span>{text}</span>
  </a>
)
