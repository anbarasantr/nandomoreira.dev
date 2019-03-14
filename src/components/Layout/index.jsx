import React, { Fragment } from 'react'
import { graphql } from 'gatsby'
import { StaticQuery } from 'gatsby'
import Header from '../Header'
import Footer from '../Footer'
import WhatsApp from '../WhatsApp'
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
            author {
              phone
            }
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
        <WhatsApp
          phone={data.site.siteMetadata.author.phone}
          text="Olá Fernando! Eu vi o seu site, e gostaria de conversar."
        />
        <ScrollToTop scrollStepInPx="50" delayInMs="16.66" />
      </Fragment>
    )}
  />
)
