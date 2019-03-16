import React from 'react'
import classes from './skills.module.styl'
import { Skill } from 'Components/Common'
import { Container } from 'Components/Layout'

const shuffleSkills = arr =>
  arr
    .map(a => [Math.random(), a])
    .sort((a, b) => a[0] - b[0])
    .map(a => a[1])

export const Skills = ({ skills, size = 'default' }) => {
  if (!skills) return null

  let skillsClass = `skills ${ classes.skills }`
  let svgSize

  switch (size) {
  case 'small':
    skillsClass += ` ${ classes.small }`
    svgSize = `32`
    break

  case 'large':
    skillsClass += ` ${ classes.large }`
    svgSize = `80`
    break

  default:
    skillsClass += ` ${ classes.default }`
    svgSize = `50`
    break
  }

  return (
    <aside className={skillsClass}>
      <h4>Minhas habilidades</h4>
      <div className={`skills__list ${ classes.list }`}>
        {shuffleSkills(skills).map((skill, i) => (
          <div className={`skill__item ${ classes.item }`} key={i} data-tooltip={skill}>
            <div className={`skill__card card ${ classes.inner }`}>
              <Skill id={skill} size={svgSize} />
            </div>
          </div>
        ))}
      </div>
    </aside>
  )
}
