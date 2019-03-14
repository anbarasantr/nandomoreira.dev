import React from 'react'
import Project from '../Project'
import module from './projects.module.styl'

const ProjectList = ({ projects }) => (
  <section className={module.Projects}>
    <div className={module.Projects__inner}>
      {projects.map((project, i) => (
        <Project project={project.node.frontmatter} mod={i % 2} key={i} />
      ))}
    </div>
  </section>
)

export default ProjectList
