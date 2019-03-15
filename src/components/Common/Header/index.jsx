import React from 'react'
import { Brand, Nav } from 'Components/Common'
import classes from './header.module.styl'
import './header.styl'

export class Header extends React.Component {
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
      <header className={`header ${classes.header}`}>
        <div className={classes.inner}>
          <Brand />
          <Nav navLinks={this.props.navLinks} />
        </div>
      </header>
    )
  }
}
