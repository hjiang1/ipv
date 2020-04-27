import React from "react"
import styled from "styled-components"

export const ButtonContainer = styled.button`
  border-radius: 5px;
  border: 1px solid white;
  background-color: lightgray;
  padding: 0.5rem 1rem;
  font-weight: bold;
  transition-property: color, background-color, border;
  transition-duration: 0.2s;
  transition-timing-function: ease;

  @media (hover: hover) {
    :hover {
      color: maroon;
      border: 1px solid maroon;
      cursor: pointer;
    }
  }

  :focus {
    outline: 0;
  }
`

const Button = ({ children, className, onClick }) => (
  <ButtonContainer className={className} onClick={onClick}>
    {children}
  </ButtonContainer>
)

export default Button
