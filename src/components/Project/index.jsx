import React from 'react'
import { Link } from 'gatsby'
import Image from '../Image'
import Icon from '../Icons/Icon'
import module from './project.module.styl'
import './project.styl'

const Project = ({ project, mod }) => (
  <article
    className={`Project ${module.project} ${
      mod === 0 ? module.left : module.right
    }`}
  >
    <Link to={project.path} className={`${module.inner}`}>
      <div className={module.content}>
        <div>
          <header className={module.header}>
            <h1>{project.title}</h1>
          </header>
          <p className={module.description}>{project.description}</p>
          <div className={`Project__view ${module.view}`}>
            <span>Ver projeto </span>
            <Icon id="arrow-right" />
          </div>
        </div>
      </div>
      <div className={module.image}>
        <Image node={project.image} />
      </div>
    </Link>
  </article>
)

export default Project
