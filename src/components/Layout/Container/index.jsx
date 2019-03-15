import React from 'react'
import classes from './container.module.styl'

export const Container = ({ isSmall, children, className, ...props }) => (
  <div
    className={`${ className ? `${ className } ` : '' } ${ classes.container } ${
      isSmall ? classes.small : ''
    }`}
    {...props}
  >
    <div className={classes.inner}>{children}</div>
  </div>
)
