import React from 'react'
import Helmet from 'react-helmet'
import ThemeContext from 'context/ThemeContext'
import { StaticQuery, graphql } from 'gatsby'

import './base.styl'
import './data-tooltip.styl'
import './highlight.styl'
import './theme.styl'

export const BaseLayout = ({ children }) => (
  <StaticQuery
    query={graphql`
      query SiteTitleQuery {
        site {
          siteMetadata {
            title
          }
        }
      }
    `}
    render={data => (
      <ThemeContext.Consumer>
        {theme => (
          <>
            <Helmet
              bodyAttributes={{
                class: `theme-${ theme.dark ? 'dark' : 'light' }`,
              }}
            />
            {children}
          </>
        )}
      </ThemeContext.Consumer>
    )}
  />
)
