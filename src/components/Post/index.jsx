import React from 'react'
import Link from 'gatsby-link'

import IconTags from '../Icons/Tags'
import IconArrowRight from '../Icons/ArrowRight'

import module from './post.module.styl'

export default ({ post }) => {
  const tags = post.tags || []
  return (
    <article
      className={module.Post}
      itemProp="blogPost"
      itemScope
      itemType="https://schema.org/BlogPosting"
    >
      <meta itemProp="mainEntityOfPage" content={post.path} />
      <Link className={module.Post__inner} to={post.path}>
        <header className={module.Post__header}>
          <small>
            <time dateTime={post.date} itemProp="datePublished">
              {post.date}
            </time>
            <meta itemProp="dateModified" content={post.date} />
          </small>
          <h1 itemProp="name headline">{post.title}</h1>
        </header>
        <div className={module.Post__content} itemProp="description">
          <p>{post.description}</p>
          <span className={module.Post__category}>{post.category}</span>
        </div>
        <div className={module.Post__footer}>
          <p className={module.Post__tags} itemProp="keywords">
            <IconTags />
            {tags.map((tag, index) => {
              return (
                <span key={index} className={module.Post__tag}>
                  {tag}
                </span>
              )
            })}
          </p>
          <IconArrowRight className={module.Post__iconRight} />
        </div>
      </Link>
    </article>
  )
}
