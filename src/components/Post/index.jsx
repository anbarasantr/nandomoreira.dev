import React from 'react'
import Link from 'gatsby-link'
import module from './post.module.styl'
import Icon from '../Icons'
import PostTags from '../PostTags'

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
          <PostTags tags={tags} showLinks={false} />
          <Icon
            id="icon-arrow-right"
            fill="#435b71"
            className={module.Post__iconRight}
          />
        </div>
      </Link>
    </article>
  )
}
