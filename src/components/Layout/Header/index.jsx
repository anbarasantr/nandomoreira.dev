import React, { Component } from 'react'
import { Container, Brand, Nav } from 'Components/Layout'
import { DarkSwitcher, DonateButton } from 'Components/Common'
import classes from './header.module.styl'

export class Header extends Component {
  render () {
    return (
      <header className={`header ${ classes.header }`}>
        <Container>
          <div className={classes.inner}>
            <Brand />
            <Nav navLinks={this.props.navLinks} />
            <nav className={classes.navRight}>
              <DarkSwitcher />
              <DonateButton link={this.props.donateLink} />
            </nav>
          </div>
        </Container>
      </header>
    )
  }
}
