import React from 'react'
import Link from 'gatsby-link'
import styles from './styles'

export default () => (
  <h1 style={styles.brand}>
    <Link style={styles.brand__link} to="/">
      <span style={styles.brand__span}>nando</span>moreira
    </Link>
  </h1>
)
