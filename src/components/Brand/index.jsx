import React from 'react'
import Link from 'gatsby-link'
import module from './brand.module.styl'

export default () => (
  <h1 className={module.brand}>
    <Link className={module.brand__link} to="/">
      <span className={module.brand__span}>nando</span>moreira
    </Link>
  </h1>
)
