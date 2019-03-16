import React from 'react'
import kebabCase from 'lodash.kebabcase'
import moment from 'moment'
import 'moment/locale/pt-br'
import { Icon } from 'Components/Common'
import classes from './card.module.styl'
import './card.styl'

export const GithubCard = ({ repo }) => (
  <a
    className={classes.repo}
    href={repo.url}
    target="_blank"
    rel="noopener noreferrer"
  >
    <article className={`card ${ classes.card }`}>
      <header className={classes.header}>
        <h4 className={classes.name}>
          {repo.name}
        </h4>
        <span
          className={`label-${ kebabCase(repo.primaryLanguage.name) } ${ classes.label }`}
          style={{ backgroundColor: `${ repo.primaryLanguage.color }` }}
        >{repo.primaryLanguage.name}</span>
      </header>
      <p className={classes.description}>{repo.description}</p>
      <footer className={classes.footer}>
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
      </footer>
    </article>
  </a>
)
