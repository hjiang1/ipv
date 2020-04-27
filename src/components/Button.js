import React from "react"
import styled from "styled-components"
import classNames from "classnames"

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
      color: var(--primary-color);
      border: 1px solid var(--primary-color);
      cursor: pointer;
    }
  }

  :focus {
    outline: 0;
  }

  &.secondary {
    background-color: white;
    border-color: white;
  }
`

const Button = props => {
  const { children, className, onClick, secondary } = props

  return (
    <ButtonContainer
      {...props}
      className={classNames("button", className, { secondary: secondary })}
      onClick={onClick}
    >
      {children}
    </ButtonContainer>
  )
}

export default Button
