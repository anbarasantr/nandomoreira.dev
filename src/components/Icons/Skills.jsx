import React from 'react'
// import svg from './skills.svg'

const Skill = ({ id, size = '32', ...props }) => {
  const src = require(`./skills-svg/${id}.svg`)
  return <img src={src} width={size} height={size} alt={id} {...props} />
}

export default Skill
