import React from 'react'
import { Project } from 'components/Projects'
import classes from './projects.module.styl'

export const ProjectList = ({ projects }) => (
  <section className={classes.Projects}>
    <div className={classes.Projects__inner}>
      {projects.map((project, i) => (
        <Project project={project.node.frontmatter} mod={i % 2} key={i} />
      ))}
    </div>
  </section>
)
