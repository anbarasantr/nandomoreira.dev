import React from 'react'
import { Container, ContainerInner } from './styled'
import './container.styl'

export default ({ children, ...props }) => (
  <Container {...props}>
    <ContainerInner>{children}</ContainerInner>
  </Container>
)
