import React, { Fragment } from 'react'
import { graphql } from 'gatsby'
import { StaticQuery } from 'gatsby'
import { Header, Footer, WhatsApp } from 'Components/Common'

import classes from './layout.module.styl'
import './base.styl'
import './data-tooltip.styl'
import './highlight.styl'

export const Layout = ({ children, ...props }) => (
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
        <div className={classes.default} {...props}>
          <Header navLinks={data.site.siteMetadata.navLinks} />
          <main
            role="main"
            aria-label="Conteúdo principal"
            className={classes.main}
          >
            {children}
          </main>
          <Footer />
        </div>
        <WhatsApp
          phone={data.site.siteMetadata.author.phone}
          text="Olá Fernando! Eu vi o seu site, e gostaria de conversar."
        />
      </Fragment>
    )}
  />
)
