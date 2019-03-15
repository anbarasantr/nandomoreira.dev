import React from 'react'
import { GithubCard } from './Card'
import module from './github.module.styl'

export const GithubList = ({ repositories }) => (
  <div className={module.list}>
    {repositories.map(({ node }, i) => (
      <GithubCard key={i} repo={node} />
    ))}
  </div>
)
