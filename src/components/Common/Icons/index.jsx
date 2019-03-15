import React from 'react'

export const SVG = ({
  svg,
  id,
  size = '32',
  fill = 'defaultColor',
  ...props
}) => (
  <svg width={size} height={size} fill={fill} {...props}>
    <use xlinkHref={`${svg}#${id}`} />
  </svg>
)
