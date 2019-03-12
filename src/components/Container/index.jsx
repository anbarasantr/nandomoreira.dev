import React from 'react'
import container from './container.module.styl'

export default ({ children, className, ...props }) => (
  <div
    className={`${className ? `${className} ` : ''} ${container.Container}`}
    {...props}
  >
    <div className={container.Inner}>{children}</div>
  </div>
)
