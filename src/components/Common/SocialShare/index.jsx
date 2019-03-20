import React from 'react'
import { Twitter, Facebook, Whatsapp, Telegram } from 'react-social-sharing'
import classes from './socialshare.module.styl'

export const SocialShare = ({ link, message }) => (
  <aside className={`socialshare card ${ classes.socialshare }`}>
    <h4 className={classes.title}>Gostou? Compartilhe!</h4>
    <p className={classes.description}>Se você gostou do que leu até aqui? Então deixe seu comentário e compartilhe nas redes sociais, isso irá me motivar a continuar o trabalho! 😃 </p>
    <nav className={classes.items}>
      <Twitter link={link} message={message} data-tooltip="Compartilhe no Twitter" solid small />
      <Facebook link={link} message={message} data-tooltip="Compartilhe no Facebook" solid small />
      <Whatsapp link={link} message={message} data-tooltip="Compartilhe no WhatsApp" solid small />
      <Telegram link={link} message={message} data-tooltip="Compartilhe no Telegram" solid small />
    </nav>
  </aside>
)
