import React, { Component } from 'react'
import { Icon } from 'Components/Common'
import { Container, Brand, Nav } from 'Components/Layout'
import ThemeContext from 'context/ThemeContext'
import classes from './header.module.styl'

export class Header extends Component {
  render () {
    return (
      <ThemeContext.Consumer>
        {theme => (
          <header className={`header ${ classes.header }`}>
            <Container>
              <div className={classes.inner}>
                <Brand />
                <Nav navLinks={this.props.navLinks} />
                <nav className={classes.navRight}>
                  <button
                    role="button"
                    className={`dark-switcher ${ classes.darkSwitcher } ${ classes.navRight__button }`}
                    onClick={theme.toggleDark}>
                    {theme.dark ? (
                      <Icon id="moon-f" />
                    ) : (
                      <Icon id="moon" />
                    )}
                  </button>
                  <a
                    href={this.props.donateLink}
                    className={`donate-link ${ classes.donateLink } ${ classes.navRight__button }`}
                    target="_blank"
                    role="button"
                  >
                    <Icon id="coffee" />
                    <span>Doe $5</span>
                  </a>
                </nav>
              </div>
            </Container>
          </header>
        )}
      </ThemeContext.Consumer>
    )
  }
}
