import React from "react"
import LandingScreen from "./landing"
import Questionnaire from "./questionnaire"
import Participate from "./participate"
import ThankYou from "./thankYou"
import Overlay from "./overlay"

function Screen(props) {
  const {currentScreen} = props

  switch(currentScreen) {
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

export default Screen
