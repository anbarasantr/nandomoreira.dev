import React from 'react'
import { Container } from 'Components/Layout'
import classes from './pageheader.module.styl'

export const PageHeader = ({ smallTitle, title, children }) => (
  <header className={`pageHeader ${ classes.pageHeader }`}>
    <Container>
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
