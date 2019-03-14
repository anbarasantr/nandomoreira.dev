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
      distanceFromTop: 0,
      lastDistanceFromTop: 0,
      scrollingUp: true,
      scrollingDown: false,
      classes: {
        fixed: ` isFixed`,
        up: ` toUp`,
        down: ` toDown`,
      },
    }
  }

  onScrolling = () => {
    // this.setState({ fixed: false })
    this.setState({ distanceFromTop: window.scrollY })

    if (this.state.distanceFromTop > this.state.lastDistanceFromTop) {
      this.setState({ scrollingDown: true })
      this.setState({ scrollingUp: false })
    } else {
      this.setState({ scrollingUp: true })
      this.setState({ scrollingDown: false })
    }
  }

  listenScrollEvent = event => {
    this.onScrolling()

    this.setState({ fixed: false })
    if (this.state.distanceFromTop > 50) {
      this.setState({ fixed: true })
    }

    this.setState({ lastDistanceFromTop: this.state.distanceFromTop })
  }

  componentDidMount() {
    window.addEventListener('scroll', this.listenScrollEvent)
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', this.listenScrollEvent)
  }

  render() {
    const { fixed, scrollingUp, scrollingDown, classes } = this.state
    return (
      <header
        className={`Header ${module.Header} ${fixed ? `${classes.fixed}` : ''}${
          scrollingUp ? `${classes.up}` : ''
        }${scrollingDown ? `${classes.down}` : ''}`}
      >
        <div className={module.Inner}>
          <Brand />
          <Nav navLinks={this.props.navLinks} />
        </div>
      </header>
    )
  }
}

export default Header
