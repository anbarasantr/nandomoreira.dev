import React from 'react'
import Brand from '../Brand'
import Nav from '../Nav'
import module from './header.module.styl'

class Header extends React.Component {
  render() {
    return (
      <header className={`${module.Header}`}>
        <div className={module.Header__inner}>
          <Brand />
          <Nav />
        </div>
      </header>
    )
  }
}

export default Header
