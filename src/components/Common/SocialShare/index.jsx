import React from 'react'
import { Twitter, Facebook, Whatsapp, Telegram } from 'react-social-sharing'
import classes from './socialshare.module.styl'

export const SocialShare = ({ link, message }) => (
  <aside className={classes.socialshare}>
    <h4 className={classes.title}>Gostou? Compartilhe!</h4>
    <nav className={classes.items}>
      <Twitter link={link} message={message} solid small />
      <Facebook link={link} message={message} solid small />
      <Whatsapp link={link} message={message} solid small />
      <Telegram link={link} message={message} solid small />
    </nav>
  </aside>
)
