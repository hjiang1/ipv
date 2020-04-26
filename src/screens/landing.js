import React from "react"
import styled from "styled-components"

import HideRender from "../components/HideRender"

const Container = styled.div`
  display: flex;
  flex-direction: column;

  .landing-title {
    font-size: 1.5rem;
    line-height: 1.5;
    font-weight: bold;
  }

  .button {
    width: fit-content;
    align-self: flex-end;
  }
`

function LandingScreen(props) {
  const { showOverlay } = props

  return (
    <HideRender hide={showOverlay}>
      <Container>
        <p className="landing-title">IPV Questionnaire</p>
        <p>
          This questionnaire is part of study to learn about the relationships
          between behavior, brain structure and chemistry, and brain function
          associated with Intimate Partner Violence (IPV) using a non-invasive
          imaging method called magnetic resonance spectroscopy (MRS).
        </p>
        <p>
          If you are interested in taking part in this study, click "Proceed" to
          answer a few questions about your health and medical history to find
          out if you qualify for the study. Some of the questions may make you
          feel uncomfortable. You can stop at any time. Your answers to this
          survey will be recorded but contact information will only be collected
          if you qualify for the study and want to schedule an in person visit.
        </p>
        <hr />
        <p>
          If you need to hide this questionnaire for any reason, click the "X"
          button at the top right of the screen. To protect your privacy, this
          page will automatically hide itself after 5 minutes of inactivity.
        </p>
        <button
          className="button"
          onClick={() => props.setScreen("questionnaire")}
        >
          Proceed to Questionnaire
        </button>
      </Container>
    </HideRender>
  )
}

export default LandingScreen
