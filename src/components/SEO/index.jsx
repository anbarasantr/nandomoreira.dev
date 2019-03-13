import React from 'react'
import { Helmet } from 'react-helmet'
import PropTypes from 'prop-types'
import { StaticQuery, graphql } from 'gatsby'

const MetaTags = ({
  title = null,
  description = null,
  image = null,
  pathname = null,
  article = false,
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
            defaultImage: image
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
          defaultImage,
          twitterUsername,
          facebookAppID,
          author,
        },
      },
    }) => {
      const data = {
        title: title || defaultTitle,
        description: description || defaultDescription,
        image: `${siteUrl}${image || defaultImage}`,
        url: `${siteUrl}${pathname || '/'}`,
        fbType: article ? `article` : `website`,
        card: `summary_large_image`,
        appId: facebookAppID,
      }

      return (
        <Helmet title={data.title} titleTemplate={titleTemplate}>
          <title>{data.title}</title>
          <meta name="description" content={data.description} />
          <meta name="image" content={data.image} />
          <meta name="robots" content="index,follow,noodp" />
          <meta name="country" content="Brazil" />
          <meta name="revisit-after" content="7 days" />
          <meta property="og:locale" content="pt_BR" />
          <meta property="og:url" content={data.url} />}
          <meta property="og:title" content={data.title} />
          <meta property="og:description" content={data.description} />
          <meta property="og:image" content={data.image} />
          <meta property="og:type" content={data.fbType} />
          {article && <meta property="article:author" content={author.name} />}
          {/* <meta property="article:section" content="Tutoriais" /> */}
          {/* <meta property="article:tag" content="Facebook, tags, og, open graph" /> */}
          {/* <meta property="article:published_time" content="date_time" /> */}
          {data.appId && <meta property="fb:app_id" content={data.appId} />}
          <meta name="twitter:card" content={data.card} />
          <meta name="twitter:creator" content={twitterUsername} />
          <meta name="twitter:title" content={data.title} />
          <meta name="twitter:description" content={data.description} />
          <meta name="twitter:image" content={data.image} />
          <link rel="canonical" href={data.url} />
          <link rel="author" href={`${siteUrl}/humans.txt`} />
          <link rel="index" href={`${siteUrl}/`} />
          <html lang="pt-br" />
        </Helmet>
      )
    }}
  />
)

MetaTags.propTypes = {
  title: PropTypes.string,
  description: PropTypes.string,
  image: PropTypes.string,
  pathname: PropTypes.string,
  article: PropTypes.bool,
}

export default MetaTags
