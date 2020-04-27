import React, { Fragment, useEffect, useState } from "react"

import Button from "../components/Button"
import BinaryQuestion from "../components/BinaryQuestion"
import RadioQuestion from "../components/RadioQuestion"

function Questionnaire(props) {
  const { responses, setResponse, setQualify, setScreen } = props
  const {
    age,
    sex,
    diagnosis,
    steroids,
    methamphetamine,
    psych,
    impairment,
    bipolar,
    left,
    unsafe,
    implants,
    claustro,
    pregnant,
  } = responses
  const setResponseID = question => value => setResponse(question, value)

  const [showPregnant, setShowPregnant] = useState(false)
  const [isCompleted, setIsCompleted] = useState(false)
  const [participantQualifies, setParticipantQualifies] = useState(false)
  const [validate, setValidate] = useState(false)

  useEffect(() => {
    if (sex === "Female") {
      setShowPregnant(true)
    } else {
      setShowPregnant(false)
    }
  }, [sex])

  useEffect(() => {
    if (age === "Yes" && implants === "No" && claustro === "No") {
      setParticipantQualifies(true)
    }
  }, [age, implants, claustro])

  useEffect(() => {
    if (
      age !== undefined &&
      sex !== undefined &&
      diagnosis !== undefined &&
      steroids !== undefined &&
      methamphetamine !== undefined &&
      psych !== undefined &&
      impairment !== undefined &&
      bipolar !== undefined &&
      left !== undefined &&
      unsafe !== undefined &&
      implants !== undefined &&
      claustro !== undefined &&
      (!showPregnant || pregnant !== undefined)
    ) {
      setIsCompleted(true)
    } else if (isCompleted) {
      setIsCompleted(false)
    }
  }, [
    age,
    sex,
    diagnosis,
    steroids,
    methamphetamine,
    psych,
    impairment,
    bipolar,
    left,
    unsafe,
    implants,
    claustro,
    showPregnant,
    pregnant,
    isCompleted,
  ])

  const onSubmit = event => {
    event.preventDefault()

    if (isCompleted) {
      console.log("Questionnaire Results: ", responses)

      if (participantQualifies) {
        // Send survey info

        setQualify(true)
        setScreen("participate")
      } else {
        setScreen("thankYou")
      }
    } else if (!validate) {
      setValidate(true)
      window.scrollTo(0, 0)
    } else {
      window.scrollTo(0, 0)
    }
  }

  const onBack = () => {
    setScreen("landing")
  }

  return (
    <Fragment>
      <p className="title questionnaire-title">IPV Questionnaire</p>
      <form className="form questionnaire-form" onSubmit={onSubmit}>
        {validate && !isCompleted && (
          <p className="validate-message">
            Please correct the items highlighted in red.
          </p>
        )}
        <BinaryQuestion
          number={1}
          prompt="Are you between the ages of 18 and 45?"
          id="age"
          value={age}
          setValue={setResponseID("age")}
          validate={validate}
        />
        <RadioQuestion
          number={2}
          prompt="What is your biological sex?"
          id="sex"
          value={sex}
          setValue={setResponseID("sex")}
          options={["Male", "Female"]}
          validate={validate}
        />
        <BinaryQuestion
          number={3}
          prompt="Do you have a medical diagnosis of any neurological disorder (epilepsy, Parkinson’s Disease, brain tumor, etc.)?"
          id="diag"
          value={diagnosis}
          setValue={setResponseID("diagnosis")}
          validate={validate}
        />
        <BinaryQuestion
          number={4}
          prompt="Have you used steroids or barbiturates?"
          id="ste"
          value={steroids}
          setValue={setResponseID("steroids")}
          validate={validate}
        />
        <BinaryQuestion
          number={5}
          prompt="Have you used methamphetamines?"
          id="met"
          value={methamphetamine}
          setValue={setResponseID("methamphetamine")}
          validate={validate}
        />
        <BinaryQuestion
          number={6}
          prompt="Have you used psychoactive drugs?"
          id="psych"
          value={psych}
          setValue={setResponseID("psych")}
          validate={validate}
        />
        <BinaryQuestion
          number={7}
          prompt="Do you have hearing, vision, or upper body motor impairments?"
          id="impair"
          value={impairment}
          setValue={setResponseID("impairment")}
          validate={validate}
        />
        <BinaryQuestion
          number={8}
          prompt="Have you been diagnosed with Bipolar Disorder or Schizophrenia?"
          id="bipolar"
          value={bipolar}
          setValue={setResponseID("bipolar")}
          validate={validate}
        />
        <BinaryQuestion
          number={9}
          prompt="Are you left-handed?"
          id="left"
          value={left}
          setValue={setResponseID("left")}
          validate={validate}
        />
        <BinaryQuestion
          number={10}
          prompt="Are you currently in a intimate relationship (boyfriend, girlfriend, spouse) in which you don’t feel safe?"
          id="unsafe"
          value={unsafe}
          setValue={setResponseID("unsafe")}
          validate={validate}
        />
        <BinaryQuestion
          number={11}
          prompt="Do you have any electrically, magnetically, or mechanically activated implants such as cardiac pacemakers (a device inserted in the chest to regulate the heartbeat) or any ferromagnetic implants (aneurysm clips, surgical clips, prostheses, metal fragment, etc.)?"
          id="implants"
          value={implants}
          setValue={setResponseID("implants")}
          validate={validate}
        />
        <BinaryQuestion
          number={12}
          prompt="Are you Claustrophobic (afraid of being in small spaces)?"
          id="claustro"
          value={claustro}
          setValue={setResponseID("claustro")}
          validate={validate}
        />
        {showPregnant && (
          <BinaryQuestion
            number={13}
            prompt="Are you currently pregnant?"
            id="pregnant"
            value={pregnant}
            setValue={setResponseID("pregnant")}
            validate={validate}
          />
        )}
        <hr className="rule" />
        <div className="actions">
          <Button type="button" onClick={onBack} secondary>
            Back
          </Button>
          <Button type="submit">Submit</Button>
        </div>
      </form>
    </Fragment>
  )
}

export default Questionnaire
