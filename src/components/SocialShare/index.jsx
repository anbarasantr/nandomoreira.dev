import React from 'react'
import { Twitter, Facebook, Whatsapp, Telegram } from 'react-social-sharing'
import module from './socialshare.module.styl'

const SocialShare = ({ link, message }) => (
  <aside className={module.socialshare}>
    <h4 className={module.title}>Gostou? Compartilhe!</h4>
    <nav className={module.items}>
      <Twitter link={link} message={message} solid small />
      <Facebook link={link} message={message} solid small />
      <Whatsapp link={link} message={message} solid small />
      <Telegram link={link} message={message} solid small />
    </nav>
  </aside>
)

export default SocialShare
