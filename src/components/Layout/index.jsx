import React, { Fragment } from 'react'
import { graphql } from 'gatsby'
import { StaticQuery } from 'gatsby'
import Header from '../Header'
import Footer from '../Footer'
import ScrollToTop from '../ScrollToTop'
import module from './layout.module.styl'

import './base.styl'
import './highlight.styl'

export default ({ children, ...props }) => (
  <StaticQuery
    query={graphql`
      query LayoutQuery {
        site {
          siteMetadata {
            navLinks {
              name
              path
            }
          }
        }
      }
    `}
    render={data => (
      <Fragment>
        <div className={module.Default} {...props}>
          <Header navLinks={data.site.siteMetadata.navLinks} />
          <main
            role="main"
            aria-label="Conteúdo principal"
            className={module.Default__main}
          >
            {children}
          </main>
          <Footer />
        </div>
        <ScrollToTop scrollStepInPx="50" delayInMs="16.66" />
      </Fragment>
    )}
  />
)
