import React from 'react'
import { Container, Brand, Nav } from 'Components/Layout'
import { DarkSwitcher, DonateButton } from 'Components/Common'
import classes from './header.module.styl'
import './header.styl'

export const Header = ({ navLinks, donateLink }) => (
  <header className={`header ${ classes.header }`}>
    <Container>
      <div className={classes.inner}>
        <Brand />
        <Nav navLinks={navLinks} />
        <nav className={classes.navRight}>
          <DarkSwitcher />
          <DonateButton link={donateLink} />
        </nav>
      </div>
    </Container>
  </header>
)
