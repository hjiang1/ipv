import React from "react"
import styled from "styled-components"

import LandingScreen from "./landing"
import Questionnaire from "./questionnaire"
import Participate from "./participate"
import ThankYou from "./thankYou"
import Overlay from "./overlay"

const Container = styled.div`
  border: 1px solid lightgrey;
  border-radius: 5px;
  display: flex;
  flex-direction: column;

  @media only screen and (max-width: 600px) {
    padding: 1rem;
  }

  @media only screen and (min-width: 600px) {
    padding: 3rem;
  }

  .rule {
    width: 100%;
  }

  .form {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    margin: 0;
  }

  .title {
    font-size: 1.5rem;
    line-height: 1.5;
    font-weight: bold;
  }

  .actions {
    width: fit-content;
    align-self: flex-end;

    .back-button {
      margin-right: 0.5rem;
      background-color: white;
    }
  }
`

const getScreen = (screen, props) => {
  switch (screen) {
    case "landing":
      return <LandingScreen {...props} />

    case "questionnaire":
      return <Questionnaire {...props} />

    case "participate":
      return <Participate {...props} />

    case "thankYou":
      return <ThankYou {...props} />

    case "overlay":
      return <Overlay {...props} />

    default:
      return <LandingScreen {...props} />
  }
}

function Screen(props) {
  const { currentScreen, showOverlay } = props

  return showOverlay ? null : (
    <Container>{getScreen(currentScreen, props)}</Container>
  )
}

export default Screen
