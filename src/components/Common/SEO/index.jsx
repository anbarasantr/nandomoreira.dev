import React from 'react'
import { Helmet } from 'react-helmet'
import { StaticQuery, graphql } from 'gatsby'

import defaultImage from './share.jpg'

export const SEO = ({
  title = null,
  description = null,
  image = null,
  pathname = null,
  article = {}
}) => (
  <StaticQuery
    query={graphql`
      query seoquery {
        site {
          siteMetadata {
            defaultTitle: title
            titleTemplate
            defaultDescription: description
            siteUrl
            twitterUsername
            facebookAppID
            author {
              name
            }
          }
        }
      }
    `}
    render={({
      site: {
        siteMetadata: {
          defaultTitle,
          titleTemplate,
          defaultDescription,
          siteUrl,
          twitterUsername,
          facebookAppID,
          author
        }
      }
    }) => {
      const data = {
        title: title || defaultTitle,
        description: description || defaultDescription,
        image: `${ siteUrl }${ image || defaultImage }`,
        url: `${ siteUrl }${ pathname || '/' }`,
        fbType: article.title ? `article` : `website`,
        card: `summary_large_image`,
        appId: facebookAppID
      }

      return (
        <Helmet title={data.title} titleTemplate={titleTemplate}>
          <meta name="description" content={data.description} />
          <meta name="image" content={data.image} />
          <meta name="robots" content="index,follow,noodp" />
          <meta name="country" content="Brazil" />
          <meta name="revisit-after" content="7 days" />
          <meta property="og:url" content={data.url} />}
          <meta property="og:title" content={data.title} />
          <meta property="og:description" content={data.description} />
          <meta property="og:image" content={data.image} />
          <meta property="og:image:type" content="image/jpeg" />
          <meta property="og:image:width" content="600" />
          <meta property="og:image:height" content="315" />
          <meta property="og:locale" content="pt_BR" />
          <meta property="og:type" content={data.fbType} />
          <meta
            property="og:site_name"
            content={`Site Portfolio e Blog de ${ author.name }`}
          />
          {article.title && (
            <meta property="article:author" content={author.name} />
          )}
          {article.category && (
            <meta
              property="article:section"
              content={article.category.join(',')}
            />
          )}
          {article.tags && (
            <meta property="article:tag" content={article.tags.join(',')} />
          )}
          {article.date && (
            <meta property="article:published_time" content={article.date} />
          )}
          {data.appId && <meta property="fb:app_id" content={data.appId} />}
          <meta name="twitter:card" content={data.card} />
          <meta name="twitter:creator" content={twitterUsername} />
          <meta name="twitter:title" content={data.title} />
          <meta name="twitter:description" content={data.description} />
          <meta name="twitter:image" content={data.image} />
          <link rel="canonical" href={data.url} />
          <link rel="author" href={`${ siteUrl }/humans.txt`} />
          <link rel="index" href={`${ siteUrl }/`} />
          <html lang="pt-br" />
        </Helmet>
      )
    }}
  />
)
