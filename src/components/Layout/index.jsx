import React from 'react'
import Header from '../Header'
import Footer from '../Footer'
import ScrollToTop from '../ScrollToTop'
import './base.styl'
import module from './layout.module.styl'

export default ({ children, ...props }) => (
  <div className={module.Default} {...props}>
    <Header />
    <main
      role="main"
      aria-label="Conteúdo principal"
      className={module.Default__main}
    >
      {children}
    </main>
    <Footer />
    <ScrollToTop scrollStepInPx="50" delayInMs="16.66" />
  </div>
)
