import React from 'react'
import whatsAppUrl from 'whatsapp-url'
import Icon from '../Icons/Icon'
import module from './whatsapp.module.styl'

const WhatsApp = ({ phone, text }) => (
  <span className={module.whatsapp}>
    <a
      href={whatsAppUrl({
        phone,
        text,
      })}
      className={module.link}
      target="_blank"
      rel="noopener noreferrer"
    >
      <span className={module.message}>
        <span>Olá! Seja bem-vindo. </span>
        Vamos bater um papo?
      </span>
      <Icon className={module.icon} id="whatsapp" />
    </a>
  </span>
)

export default WhatsApp
