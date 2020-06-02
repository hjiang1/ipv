import React from "react"
import styled from "styled-components"
import { connect } from "react-redux"

import LandingScreen from "./landing"
import Covid1 from "./covid1"
import Dates from "./dates"
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

    .validate-message {
      color: red;
      font-weight: bold;
    }
  }

  .title {
    font-size: 1.5rem;
    line-height: 1.5;
    font-weight: bold;
  }

  .actions {
    width: fit-content;
    align-self: flex-end;

    /* margin to make button-press easier on mobile */
    @media only screen and (max-width: 600px) {
      margin-bottom: 2rem;
    }
  }
`

const getScreen = (screen, props) => {
  switch (screen) {
    case "landing":
      return <LandingScreen {...props} />

    case "covid1":
      return <Covid1 {...props} />

    case "dates":
      return <Dates {...props} />

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

const mapStateToProps = ({ app: { showOverlay } }) => {
  return { showOverlay }
}

export default connect(mapStateToProps)(Screen)
