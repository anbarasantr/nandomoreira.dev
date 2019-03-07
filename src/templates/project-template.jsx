import React from 'react'
import { graphql } from 'gatsby'
import Link from 'gatsby-link'
import kebabCase from 'lodash/kebabCase'

import SEO from '../components/SEO'
import Image from '../components/Image'
import Layout from '../components/Layout'
import Container from '../components/Container'
import IconTags from '../components/Icons/Tags'
import Comments from '../components/Comments'

export default function Template({ data }) {
  const post = data.markdownRemark
  const { disqusShortname } = data.site.siteMetadata
  const disqusConfig = {
    identifier: `${post.frontmatter.path}/`,
    title: post.frontmatter.title,
  }

  return (
    <Layout>
      <SEO
        title={post.frontmatter.title}
        description={post.frontmatter.description}
        image={post.frontmatter.image.src}
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
          <IconTags />
          {post.frontmatter.tags.map((tag, index) => {
            return (
              <span key={index} className="Project__tag">
                {tag}
              </span>
            )
          })}
        </p>
        <Comments shortname={disqusShortname} config={disqusConfig} />
      </Container>
    </Layout>
  )
}

export const projectQuery = graphql`
  query ProjectPostByPath($path: String!) {
    site {
      siteMetadata {
        disqusShortname
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
