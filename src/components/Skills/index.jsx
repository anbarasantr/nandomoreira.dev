import React from 'react'
import skills from 'data/skills'
import module from './skills.module.styl'
import Skill from '../Icons/Skills'

export default ({ size = 'default' }) => {
  let skillsClass = `${module.skills}`
  let svgSize

  switch (size) {
    case 'small':
      skillsClass += ` ${module.small}`
      svgSize = `32`
      break

    case 'large':
      skillsClass += ` ${module.large}`
      svgSize = `80`
      break

    default:
      skillsClass += ` ${module.default}`
      svgSize = `50`
      break
  }

  return (
    <aside className={skillsClass}>
      <h4>Minhas habilidades</h4>
      <div className={module.list}>
        {skills.map((skill, i) => (
          <div className={module.item} key={i} data-tooltip={skill}>
            <div className={module.inner}>
              <Skill id={skill} size={svgSize} />
            </div>
          </div>
        ))}
      </div>
    </aside>
  )
}
