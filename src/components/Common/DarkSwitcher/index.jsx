import React from 'react'
import ThemeContext from 'context/ThemeContext'
import { Icon } from 'components/Common'
import classes from './switcher.module.styl'

export const DarkSwitcher = () => (
  <ThemeContext.Consumer>
    {theme => (
      <button
        role="button"
        className={`dark-switcher ${ classes.switcher }`}
        onClick={theme.toggleDark}>
        {theme.dark ? (
          <Icon id="sunny" />
        ) : (
          <Icon id="moon-f" />
        )}
      </button>
    )}
  </ThemeContext.Consumer>
)
