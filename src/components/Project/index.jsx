import React from 'react'
import { Link } from 'gatsby'
import Image from '../Image'
import Icon from '../Icons'
import module from './project.module.styl'
import './project.styl'

const Project = ({ project }) => (
  <article className={`Project ${module.Project}`}>
    <Link to={project.path} className={`${module.Project__inner}`}>
      <div className={module.Project__content}>
        <div>
          <header className={module.Project__header}>
            <h1>{project.title}</h1>
          </header>
          <p className={module.Project__description}>{project.description}</p>
          <div className={`Project__view ${module.Project__view}`}>
            <span>Ver projeto </span>
            <Icon id="icon-arrow-right" />
          </div>
        </div>
      </div>
      <div className={module.Project__image}>
        <Image node={project.image} />
      </div>
    </Link>
  </article>
)

export default Project
