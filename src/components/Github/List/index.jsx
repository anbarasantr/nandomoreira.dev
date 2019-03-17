import React from 'react'
import { GithubCard } from 'components/Github'
import classes from './list.module.styl'

export const GithubList = ({ repositories }) => (
  <div className={classes.list}>
    {repositories.map(({ node }, i) => (
      <GithubCard key={i} repo={node} />
    ))}
  </div>
)
