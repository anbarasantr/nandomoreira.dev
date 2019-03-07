import React, { Component } from 'react'
// import PropTypes from 'prop-types'

import Brand from '../Brand'
import Nav from '../Nav'

import module from './header.module.styl'

class Header extends Component {
  render() {
    return (
      <header className={module.Header}>
        <div className={module.Header__inner}>
          <Brand />
          <Nav />
        </div>
      </header>
    )
  }
}

Header.defaultProps = {
  type: 'short'
}

export default Header
