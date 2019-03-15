import React from 'react'
import Icons from './index'
import svg from './icons.svg'

export default ({ id, size = '32', fill = 'defaultColor', ...props }) => (
  <Icons svg={svg} id={`icon-${id}`} size={size} fill={fill} {...props} />
)
