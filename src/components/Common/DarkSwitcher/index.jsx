import React from 'react'
import ThemeContext from 'context/ThemeContext'
import { Icon } from 'Components/Common'
import classes from './switcher.module.styl'

export const DarkSwitcher = () => (
  <ThemeContext.Consumer>
    {theme => (
      <button
        role="button"
        className={`dark-switcher ${ classes.switcher }`}
        onClick={theme.toggleDark}>
        {theme.dark ? (
          <Icon id="moon-f" />
        ) : (
          <Icon id="moon" />
        )}
      </button>
    )}
  </ThemeContext.Consumer>
)
