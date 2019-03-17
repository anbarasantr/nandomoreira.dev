import React from 'react'
import Link from 'gatsby-link'
import { Icon, Image } from 'components/Common'
import classes from './project.module.styl'
import './project.styl'

export const Project = ({ project, mod }) => (
  <article
    className={`project ${ classes.project } ${
      mod === 0 ? classes.left : classes.right
    }`}
  >
    <div className={classes.inner}>
      <div className={classes.content}>
        <Link to={project.path} className="card">
          <header className={classes.header}>
            <h1>{project.title}</h1>
          </header>
          <p className={classes.description}>{project.description}</p>
          <div className={`Project__view ${ classes.view }`}>
            <span>Ver projeto </span>
            <Icon id="arrow-right" />
          </div>
        </Link>
      </div>
      <Link to={project.path} className={classes.image}>
        <Image node={project.image} />
      </Link>
    </div>
  </article>
)
