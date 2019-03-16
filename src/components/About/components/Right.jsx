import React from 'react'

export const Right = ({ children, classes }) => (
  <div className={`about__right ${ classes.right }`}>
    <div className={`card ${ classes.inner }`}>{children}</div>
  </div>
)
