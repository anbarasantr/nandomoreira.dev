import React from 'react'
import { Container } from 'Components/Common'
import classes from './pageheader.module.styl'

export const PageHeader = ({ smallTitle, title, children }) => (
  <header className={classes.PageHeader}>
    <Container>
      {smallTitle && (
        <h4
          className={classes.PageHeader__smalltitle}
          dangerouslySetInnerHTML={{ __html: smallTitle }}
        />
      )}
      {title && (
        <h1
          className={classes.PageHeader__title}
          dangerouslySetInnerHTML={{ __html: title }}
        />
      )}
      {children && (
        <div className={classes.PageHeader__description}>{children}</div>
      )}
    </Container>
  </header>
)
