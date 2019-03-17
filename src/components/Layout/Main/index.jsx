import React from 'react'
import { StaticQuery, graphql } from 'gatsby'
import { WhatsApp } from 'components/Common'
import { BaseLayout, Header, Footer } from 'components/Layout'

import classes from './main.module.styl'

export const Main = ({ children, ...props }) => (
  <StaticQuery
    query={graphql`
      query LayoutQuery {
        site {
          siteMetadata {
            author {
              phone
            }
            social {
              paypal
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
      <BaseLayout {...props}>
        <Header
          navLinks={data.site.siteMetadata.navLinks}
          donateLink={data.site.siteMetadata.social.paypal}
        />
        <main
          role="main"
          aria-label="Conteúdo principal"
          id="mainContent"
          className={classes.main}
        >
          {children}
        </main>
        <Footer />
        <WhatsApp
          phone={data.site.siteMetadata.author.phone}
          text="Olá Fernando! Eu vi o seu site, e gostaria de conversar."
        />
      </BaseLayout>
    )}
  />
)
