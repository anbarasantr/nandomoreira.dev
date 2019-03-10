import React, { Fragment } from 'react'
import { StaticQuery } from 'gatsby'
import Header from '../Header'
import Footer from '../Footer'
// import ScrollToTop from '../ScrollToTop'
import './base.styl'
import module from './layout.module.styl'

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
          {/* <ScrollToTop scrollStepInPx="50" delayInMs="16.66" /> */}
        </div>
      </Fragment>
    )}
  />
)
