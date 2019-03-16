import React from 'react'
import Link from 'gatsby-link'
import { SEO, Icon, SocialIcons, DarkSwitcher } from 'Components/Common'
import { BaseLayout } from 'Components/Layout'

import './error404.styl'
import classes from './error404.module.styl'

const title = 'Erro 404'
const description =
  'Infelizmente a página que você está tentando acessar não foi localizada.'

export const Error404 = ({ data }) => (
  <BaseLayout>
    <SEO title={title} description={description} pathname="/404.html" />
    <div className={`error404 ${ classes.error404 }`}>
      <div className={classes.inner}>
        <h1>Oops! Nada por aqui. {title}</h1>
        <p>{description}</p>

        <div className={classes.buttons}>
          <Link to="/" className={`button button--primary ${ classes.button }`}>
            <Icon id="arrow-left" style={{ padding: '5px' }} />
            <span> Página inicial </span>
          </Link>
          <Link
            to="/contato"
            className={`button button--secondary ${ classes.button }`}
          >
            <span> Entre em contato </span>
            <Icon id="arrow-right" style={{ padding: '5px' }} />
          </Link>
        </div>

        <SocialIcons icons={data.site.siteMetadata.social} />
        <DarkSwitcher />
      </div>
    </div>
  </BaseLayout>
)
