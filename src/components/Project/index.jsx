import React, { Component } from 'react'
import { Link } from 'gatsby'

import Image from '../Image'

import module from './project.module.styl'

class Project extends Component {
  render() {
    const { project } = this.props
    return (
      <article className={module.Project}>
        <Link to={project.path} className={module.Project__inner}>
          <div className={module.Project__content}>
            <header className={module.Project__header}>
              <h1>{project.title}</h1>
            </header>
            <p>{project.description}</p>
            <p><small>{project.date}</small></p>
            <ul className={module.Project__tags}>
              <li>Tags: </li>
              {project.tags.map((tag, index) => {
                return (<li key={index} className={module.Project__tag}>{tag}</li>)
              })}
            </ul>
          </div>
          <div className={module.Project__image}>
            <Image node={project.image} />
          </div>
        </Link>
      </article>
    )
  }
}

Project.defaultProps = {
  type: 'short'
}

export default Project
