import React from 'react'
import Helmet from 'react-helmet'
import ThemeContext from 'context/ThemeContext'
import { StaticQuery, graphql } from 'gatsby'

import './base.styl'
import './data-tooltip.styl'
import './highlight.styl'
import './theme.styl'

export const BaseLayout = ({ children, ...props }) => (
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
          <div {...props}>
            <Helmet
              bodyAttributes={{
                class: `theme-${ theme.dark ? 'dark' : 'light' }`,
              }}
            >
              <script
                key={`mcjs`}
                id="mcjs"
                dangerouslySetInnerHTML={{
                  __html: `!function(c,h,i,m,p){m=c.createElement(h),p=c.getElementsByTagName(h)[0],m.async=1,m.src=i,p.parentNode.insertBefore(m,p)}(document,"script","https://chimpstatic.com/mcjs-connected/js/users/f2095912777fe1bab6fae1135/eb2821cf50be2e86a1ad76691.js");`
                }}
              />
            </Helmet>
            {children}
          </div>
        )}
      </ThemeContext.Consumer>
    )}
  />
)
