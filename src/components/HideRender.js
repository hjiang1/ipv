import React from "react"
import styled from "styled-components"

const Container = styled.div`
  border: 1px solid lightgrey;
  border-radius: 5px;
  padding: 3rem;
`

const HideRender = props => {
  const {hide, children} = props

  return hide ? null : <Container>{children}</Container>
}

export default HideRender