import React from "react"

import HideRender from "../components/HideRender"

function LandingScreen(props) {
  const {showOverlay} = props

  return (
    <HideRender hide={showOverlay}>
      <div className="landing-screen">
        <p>We are doing this study to learn about the relationships between behavior, brain structure and chemistry, and brain function associated with Intimate Partner Violence (IPV) with a non-invasive imaging method called magnetic resonance spectroscopy or MRS.</p>
        <p>If you are interested in taking part in this study, would you be willing to answer questions about your health and medical history to find out if you might qualify for the study? Some of the questions may make you feel uncomfortable. You can stop at any time. Your answers to this survey will be recorded but detailed contact information will only be collected if you qualify for the study and want to schedule an in person visit.</p>
        <hr />
        <p>If you need to hide this questionnaire for any reason, click the "HIDE" button at the top right of the screen. To protect your privacy, this page will automatically hide itself after 5 minutes of inactivity.</p>
        <button className="button" onClick={() => props.setScreen('questionnaire')}>Proceed to Questionnaire</button>
      </div>
    </HideRender>
  )
}

export default LandingScreen
