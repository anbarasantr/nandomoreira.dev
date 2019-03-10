import React from 'react'
import { graphql } from 'gatsby'
import Link from 'gatsby-link'
import kebabCase from 'lodash/kebabCase'
import Snakke from 'react-snakke'

import SEO from '../components/SEO'
import Layout from '../components/Layout'
import Container from '../components/Container'
import PageHeader from '../components/PageHeader'
// import Image from '../components/Image'
import AuthorBox from '../components/AuthorBox'
import Comments from '../components/Comments'

import module from './post-template.module.styl'

export default function Template({ data, pageContext }) {
  const post = data.markdownRemark
  if (!post) return null

  const {
    isProduction,
    author,
    disqusShortname,
    social,
  } = data.site.siteMetadata
  const { next, prev } = pageContext
  const disqusConfig = {
    identifier: `${post.frontmatter.path}/`.replace(`/blog`, ``),
    title: post.frontmatter.title,
  }

  return (
    <Layout
      className={module.PostSingle}
      itemProp="blogPost"
      itemScope
      itemType="https://schema.org/BlogPosting"
    >
      <SEO
        title={post.frontmatter.title}
        description={post.frontmatter.description}
        image={post.frontmatter.image.publicURL}
        pathname={post.frontmatter.path}
        article={true}
      />
      <Snakke color="#222" height="4px" zIndex="999999" />
      <div
        className={module.PostSingle__header}
        style={{ backgroundImage: `url(${post.frontmatter.image.publicURL})` }}
      >
        <Container>
          <PageHeader title={post.frontmatter.title}>
            <small>{post.frontmatter.date}</small>
            <p>{post.frontmatter.description}</p>
          </PageHeader>
        </Container>
      </div>
      <Container>
        <meta itemProp="mainEntityOfPage" content={post.frontmatter.path} />
        <div className={module.PostSingle__content}>
          {/* <Image
            className="ContentWide Bottom-S"
            node={post.frontmatter.image}
            alt={post.frontmatter.title}
          /> */}

          {post.html && (
            <div
              itemProp="articleBody"
              dangerouslySetInnerHTML={{ __html: post.html }}
            />
          )}

          <div className="BlogNavigate">
            <div className="Previous">
              {prev && <Link to={prev.frontmatter.path}>← Previous</Link>}
            </div>
            <div className="Next">
              {next && <Link to={next.frontmatter.path}>Next → </Link>}
            </div>
          </div>
          <hr />
          <div className="tags">
            Tags:{' '}
            {post.frontmatter.tags.map((tag, index) => (
              <Link key={index} className="tag" to={`/tag/${kebabCase(tag)}`}>
                {tag}
              </Link>
            ))}
          </div>
        </div>
        <AuthorBox
          author={Object.assign({}, author, { avatar: data.file })}
          socialIcons={social}
        />
        {isProduction && (
          <Comments shortname={disqusShortname} config={disqusConfig} />
        )}
      </Container>
    </Layout>
  )
}

export const postQuery = graphql`
  query PostByPath($path: String!) {
    site {
      siteMetadata {
        isProduction
        disqusShortname
        author {
          name
          bio
        }
        social {
          github
          twitter
          codepen
          linkedin
          dribbble
          behance
          npm
        }
      }
    }
    file(relativePath: { eq: "sobre/avatar.png" }) {
      childImageSharp {
        fixed(width: 220, height: 220, quality: 75) {
          src
          srcSet
          base64
          width
          height
        }
      }
    }
    markdownRemark(frontmatter: { path: { eq: $path } }) {
      html
      excerpt(pruneLength: 250)
      frontmatter {
        path
        title
        date(formatString: "LL", locale: "pt-BR")
        description
        category
        tags
        image {
          childImageSharp {
            fluid(maxWidth: 1075, quality: 60) {
              src
              srcSet
              base64
              aspectRatio
              sizes
            }
          }
          publicURL
        }
      }
    }
  }
`
