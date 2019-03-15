import React from 'react'

const Icon = ({ svg, id, size = '32', fill = 'defaultColor', ...props }) => (
  <svg width={size} height={size} fill={fill} {...props}>
    <use xlinkHref={`${svg}#${id}`} />
  </svg>
)

export default Icon
