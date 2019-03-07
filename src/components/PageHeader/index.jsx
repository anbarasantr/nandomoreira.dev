import React, { Component } from 'react'

import module from './pageheader.module.styl'

class PageHeader extends Component {
  render() {
    const { children, title } = this.props
    return (
      <header className={module.PageHeader}>
        <h1 className={module.PageHeader__title}>{title}</h1>
        <div className={module.PageHeader__description}>{children}</div>
      </header>
    )
  }
}

export default PageHeader
