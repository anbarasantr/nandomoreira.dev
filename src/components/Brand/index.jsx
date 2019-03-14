import React from 'react'
import Link from 'gatsby-link'
import module from './brand.module.styl'

export default () => (
  <h1 className={module.brand}>
    <Link className={module.link} to="/">
      <span>nando</span>moreira
    </Link>
  </h1>
)
