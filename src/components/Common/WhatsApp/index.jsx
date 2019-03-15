import React from 'react'
import whatsAppUrl from 'whatsapp-url'
import { Icon } from 'Components/Common'
import classes from './whatsapp.module.styl'

export const WhatsApp = ({ phone, text }) => (
  <span className={classes.whatsapp}>
    <a
      href={whatsAppUrl({
        phone,
        text,
      })}
      className={classes.link}
      target="_blank"
      rel="noopener noreferrer"
    >
      <span className={classes.message}>
        <span>Olá! Seja bem-vindo. </span>
        Vamos bater um papo?
      </span>
      <Icon className={classes.icon} id="whatsapp" />
    </a>
  </span>
)
