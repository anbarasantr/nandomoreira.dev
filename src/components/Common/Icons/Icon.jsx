import React from 'react'
import { SVG } from './index'
import svg from './icons.svg'

export const Icon = ({ id, size = '32', fill = 'defaultColor', ...props }) => (
  <SVG svg={svg} id={`icon-${id}`} size={size} fill={fill} {...props} />
)
