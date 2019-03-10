import React from 'react'
import PropTypes from 'prop-types'
import module from './pageheader.module.styl'

const defaultProps = {
  title: 'Hello World!',
}

const PageHeader = ({ children, title }) => (
  <header className={module.PageHeader}>
    <h1 className={module.PageHeader__title}>{title}</h1>
    <div className={module.PageHeader__description}>{children}</div>
  </header>
)

const propTypes = {
  title: PropTypes.string,
}

PageHeader.propTypes = propTypes
PageHeader.defaultProps = defaultProps

export default PageHeader
