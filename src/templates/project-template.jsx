import React from 'react'
import { graphql } from 'gatsby'
import Link from 'gatsby-link'
import kebabCase from 'lodash/kebabCase'

import SEO from '../components/SEO'
import Image from '../components/Image'
import Layout from '../components/Layout'
import Container from '../components/Container'
import Comments from '../components/Comments'
import Icon from '../components/Icons'

export default function Template({ data }) {
  const post = data.markdownRemark
  if (!post) return null

  const { disqusShortname, isProduction } = data.site.siteMetadata
  const disqusConfig = {
    identifier: `${post.frontmatter.path}/`,
    title: post.frontmatter.title,
  }

  return (
    <Layout>
      <SEO
        title={post.frontmatter.title}
        description={post.frontmatter.description}
        image={post.frontmatter.image.publicURL}
        pathname={post.frontmatter.path}
        article={true}
      />
      <Container>
        <Image
          node={data.markdownRemark.frontmatter.image}
          alt={data.markdownRemark.frontmatter.title}
        />
        {post.frontmatter.category.map((category, index) => {
          return (
            <Link
              className="category"
              key={index}
              to={`/category/${kebabCase(category)}`}
            >
              {category}
            </Link>
          )
        })}
        <h1>{post.frontmatter.title}</h1>
        <small>{post.frontmatter.date}</small>

        {post.html && (
          <div
            itemProp="articleBody"
            dangerouslySetInnerHTML={{ __html: post.html }}
          />
        )}

        <div className="CenterContainer">
          <a href={post.frontmatter.url}>Visit Site</a>
        </div>

        <p>
          <Icon id="icon-tags" />
          {post.frontmatter.tags.map((tag, index) => {
            return (
              <span key={index} className="Project__tag">
                {tag}
              </span>
            )
          })}
        </p>
        {isProduction && (
          <Comments shortname={disqusShortname} config={disqusConfig} />
        )}
      </Container>
    </Layout>
  )
}

export const projectQuery = graphql`
  query ProjectPostByPath($path: String!) {
    site {
      siteMetadata {
        disqusShortname
        isProduction
      }
    }
    markdownRemark(frontmatter: { path: { eq: $path } }) {
      html
      excerpt(pruneLength: 250)
      frontmatter {
        path
        title
        date(formatString: "LL", locale: "pt-BR")
        tags
        description
        category
        url
        image {
          childImageSharp {
            sizes(maxWidth: 1300, quality: 75) {
              ...GatsbyImageSharpSizes
            }
          }
          publicURL
        }
      }
    }
  }
`
