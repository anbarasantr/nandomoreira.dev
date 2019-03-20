import React from 'react'
import { Container } from 'components/Layout'
import classes from './pageheader.module.styl'

export const PageHeader = ({ smallTitle, title, isSmall = false, children, ...props }) => (
  <header className={`pageHeader ${ classes.pageHeader }`} { ...props }>
    <Container isSmall={isSmall}>
      {smallTitle && (
        <h4
          className={classes.smalltitle}
          dangerouslySetInnerHTML={{ __html: smallTitle }}
        />
      )}
      {title && (
        <h1
          className={classes.title}
          dangerouslySetInnerHTML={{ __html: title }}
        />
      )}
      {children && (
        <div className={classes.description}>{children}</div>
      )}
    </Container>
  </header>
)
