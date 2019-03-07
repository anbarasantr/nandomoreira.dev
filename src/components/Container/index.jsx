import React from 'react'

import module from './container.module.styl'

export default ({ children, ...props }) => (
  <div className={module.Container} {...props}>
    <div className={module.Container__inner}>
      {children}
    </div>
  </div>
)
