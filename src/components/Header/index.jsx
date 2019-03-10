import React from 'react'
import Brand from '../Brand'
import Nav from '../Nav'
import module from './header.module.styl'

const Header = ({ navLinks }) => (
  <header className={`Header ${module.Header}`}>
    <div className={module.Header__inner}>
      <Brand />
      <Nav navLinks={navLinks} />
    </div>
  </header>
)

export default Header
