import React from 'react'
import Brand from '../Brand'
import Nav from '../Nav'

import module from './header.module.styl'
import './header.styl'

class Header extends React.Component {
  constructor() {
    super()

    this.state = {
      fixed: false,
    }
  }

  listenScrollEvent = event => {}

  componentDidMount() {
    window.addEventListener('scroll', this.listenScrollEvent)
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', this.listenScrollEvent)
  }

  render() {
    return (
      <header className={`header ${module.header}`}>
        <div className={module.inner}>
          <Brand />
          <Nav navLinks={this.props.navLinks} />
        </div>
      </header>
    )
  }
}

export default Header
