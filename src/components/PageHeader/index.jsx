import React from 'react'
import PropTypes from 'prop-types'
import Container from '../Container'
import module from './pageheader.module.styl'

const defaultProps = {
  smallTitle: '',
  title: '',
}

const PageHeader = ({ smallTitle, title, children }) => (
  <header className={module.PageHeader}>
    <Container>
      {smallTitle && (
        <h4
          className={module.PageHeader__smalltitle}
          dangerouslySetInnerHTML={{ __html: smallTitle }}
        />
      )}
      {title && (
        <h1
          className={module.PageHeader__title}
          dangerouslySetInnerHTML={{ __html: title }}
        />
      )}
      {children && (
        <div className={module.PageHeader__description}>{children}</div>
      )}
    </Container>
  </header>
)

const propTypes = {
  smallTitle: PropTypes.string,
  title: PropTypes.string,
}

PageHeader.propTypes = propTypes
PageHeader.defaultProps = defaultProps

export default PageHeader
