import React from 'react'

import Header from '../Header'
import Footer from '../Footer'

import './base.styl'
import module from './layout.module.styl'

export default ({ children, ...props }) => {
  return (
    <div className={module.Default} {...props}>
      <Header />
      <main className={module.Default__main} role="main" aria-label="Conteúdo principal">
        {children}
      </main>
      <Footer />
    </div>
  )
}
