import React, { Fragment } from "react"

import Button from "../components/Button"

function LandingScreen(props) {
  const { updateCurrentScreen } = props

  return (
    <Fragment>
      <p className="title landing-title">IPV Questionnaire</p>
      <p>
        This questionnaire is part of study to learn about the relationships
        between behavior, brain structure and chemistry, and brain function
        associated with Intimate Partner Violence (IPV) using a non-invasive
        imaging method called magnetic resonance spectroscopy (MRS).
      </p>
      <p>
        If you are interested in taking part in this study, click "Proceed" to
        answer a few questions about your health and medical history to find out
        if you qualify for the study. Some of the questions may make you feel
        uncomfortable. You can stop at any time. Your answers to this survey
        will be recorded but contact information will only be collected if you
        qualify for the study and want to schedule an in person visit.
      </p>
      <hr />
      <p>
        If you need to hide this questionnaire for any reason, click the "X"
        button at the top right of the screen. To protect your privacy, this
        page will automatically hide itself after 5 minutes of inactivity.
      </p>
      <p>
        Refreshing or closing this page will reset the questionnaire and delete
        any locally stored data.
      </p>
      <div className="actions">
        <Button onClick={() => updateCurrentScreen("questionnaire")}>
          Proceed to Questionnaire
        </Button>
      </div>
    </Fragment>
  )
}

export default LandingScreen
