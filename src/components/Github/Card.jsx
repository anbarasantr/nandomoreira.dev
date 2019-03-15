import React from 'react'
import module from './github.module.styl'
import moment from 'moment'
import 'moment/locale/pt-br'
import Icon from 'Components/Icons/Icon'

export const GithubCard = ({ repo }) => (
  <a
    className={module.repo}
    href={repo.url}
    target="_blank"
    rel="noopener noreferrer"
  >
    <div className={module.card}>
      <h4 className={module.name}>{repo.name}</h4>
      <p className={module.description}>{repo.description}</p>
      <div className={module.footer}>
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
          <span>{moment(repo.createdAt).format('L')}</span>
        </p>
      </div>
      {/* <p>homepageUrl: {repo.homepageUrl}</p>
      <p>pushedAt: {repo.pushedAt}</p>
      <p>updatedAt: {repo.updatedAt}</p> */}
    </div>
  </a>
)
