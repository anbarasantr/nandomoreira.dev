import React from 'react'
import container from './container.module.styl'

export default ({ isSmall, children, className, ...props }) => (
  <div
    className={`${className ? `${className} ` : ''} ${container.Container} ${
      isSmall ? container.Small : ''
    }`}
    {...props}
  >
    <div className={container.Inner}>{children}</div>
  </div>
)
