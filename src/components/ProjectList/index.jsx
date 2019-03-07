import React, { Component } from 'react'

import Project from '../Project'
import module from './projects.module.styl'

class ProjectList extends Component {
  render() {
    const { projects } = this.props
    return (
      <section className={module.Projects}>
        <div className={module.Projects__inner}>
          {projects.map((project, i) => (
            <Project project={project.node.frontmatter} key={i} />
          ))}
        </div>
      </section>
    )
  }
}

ProjectList.defaultProps = {
  type: 'short'
}

export default ProjectList
