import React from 'react'
import svg from './icons.svg'

export default ({ id, size = '32', fill = 'defaultColor', ...props }) => (
  <svg width={size} height={size} fill={fill} {...props}>
    <use xlinkHref={`${svg}#${id}`} />
  </svg>
)
