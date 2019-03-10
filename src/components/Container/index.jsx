import React from 'react'
import styles from './styles'

export default ({ children, ...props }) => (
  <div style={styles.container} {...props}>
    <div style={styles.container__inner}>{children}</div>
  </div>
)
