import React from 'react'
import moment from 'moment'
import 'moment/locale/pt-br'

import { Icon } from 'Components/Common'
import classes from './card.module.styl'

export const GithubCard = ({ repo }) => (
  <a
    className={classes.repo}
    href={repo.url}
    target="_blank"
    rel="noopener noreferrer"
  >
    <div className={classes.card}>
      <h4 className={classes.name}>{repo.name}</h4>
      <p className={classes.description}>{repo.description}</p>
      <div className={classes.footer}>
        <ul>
          <li>
            <Icon id="fork" size="20" /> <span>{repo.forkCount}</span>
          </li>
          <li>
            <Icon id="star-full" size="20" />{' '}
            <span>{repo.stargazers.totalCount}</span>
          </li>
        </ul>
        <p>
          <Icon id="calendar" size="20" />{' '}
          <span>{moment(repo.createdAt).format('MMM/YYYY')}</span>
        </p>
      </div>
      {/* <p>homepageUrl: {repo.homepageUrl}</p>
      <p>pushedAt: {repo.pushedAt}</p>
      <p>updatedAt: {repo.updatedAt}</p> */}
    </div>
  </a>
)
