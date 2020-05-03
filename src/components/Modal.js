import React, { useEffect } from "react"
import styled from "styled-components"
import classNames from "classnames"

let scrollY

const Container = styled.div`
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;

  display: flex;
  justify-content: center;
  align-items: center;

  background-color: rgba(0, 0, 0, 0.8);
  opacity: 0;
  pointer-events: none;
  touch-action: none;
  transition: opacity 0.2s ease;

  &.open {
    opacity: 1;
    pointer-events: initial;
    touch-action: initial;
  }

  .modal {
    display: flex;
    flex-direction: column;

    background-color: white;
    border: 1px solid black;
    border-radius: 5px;
    margin: 2rem;
    max-width: 900px;
    max-height: 90%;

    @media only screen and (max-width: 1400px) {
      margin-top: 5.5rem;
      max-height: 80%;
    }
  }
`

const Modal = props => {
  const { open, children } = props

  useEffect(() => {
    if (open) {
      scrollY = window.scrollY

      document.getElementById(
        "___gatsby"
      ).style.marginTop = `-${window.scrollY}px`
      document.body.style.overflow = "hidden"
      document.body.style.position = "fixed"
      document.body.style.width = "100%"

    } else {
      document.getElementById("___gatsby").style.removeProperty("margin-top")
      document.body.style.removeProperty("overflow")
      document.body.style.removeProperty("position")
      document.body.style.removeProperty("width")

      window.scrollTo(0, scrollY)
    }

    return () => {
      document.getElementById("___gatsby").style.removeProperty("margin-top")
      document.body.style.removeProperty("overflow")
      document.body.style.removeProperty("position")
      document.body.style.removeProperty("width")
    }
  }, [open])

  return (
    <Container className={classNames({ open })}>
      <div className="modal">{children}</div>
    </Container>
  )
}

export default Modal
