import React, { useEffect, useState } from "react"
import styled from "styled-components"

import BinaryQuestion from "../components/BinaryQuestion"
import RadioQuestion from "../components/RadioQuestion"
import HideRender from "../components/HideRender"

const Container = styled.div`
  .questionnaire-form {
    margin: 0;
  }
`

function Questionnaire(props) {
  const [age, setAge] = useState()
  const [sex, setSex] = useState()
  const [diagnosis, setDiagnosis] = useState()
  const [steroids, setSteroids] = useState()
  const [methamphetamine, setMethanphetamine] = useState()
  const [psych, setPsych] = useState()
  const [impairment, setImpairment] = useState()
  const [bipolar, setBipolar] = useState()
  const [left, setLeft] = useState()
  const [unsafe, setUnsafe] = useState()
  const [implants, setImplants] = useState()
  const [claustro, setClaustro] = useState()
  const [pregnant, setPregnant] = useState()

  const [showPregnant, setShowPregnant] = useState(false)
  const [isCompleted, setIsCompleted] = useState(false)
  const [validate, setValidate] = useState(false)

  const {showOverlay, setQualify, setScreen} = props

  useEffect(()=>{
    if (sex === 'Female') {
      setShowPregnant(true)
    } else {
      setShowPregnant(false)
    }
  }, [sex])

  useEffect(() => {
    if (
      // age !== undefined
      // && sex !== undefined
      // && diagnosis !== undefined
      // && steroids !== undefined
      // && methamphetamine !== undefined
      // && psych !== undefined
      // && impairment !== undefined
      // && bipolar !== undefined
      // && left !== undefined
      // && unsafe !== undefined
      // && implants !== undefined
      // && claustro !== undefined
      // && (!showPregnant || pregnant !== undefined)
      claustro !== undefined
    ) {
      setIsCompleted(true)
    } else if (isCompleted) {
      setIsCompleted(false)
    }
  }, [age, sex, diagnosis, steroids, methamphetamine, psych, impairment, bipolar, left, unsafe, implants, claustro, showPregnant, pregnant, isCompleted])

  const participantQualifies = () => {
    return claustro === 'No'
  }

  const onSubmit = event => {
    event.preventDefault();

    if (isCompleted) {
      console.log("Questionnaire Results: ", {
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
        pregnant
      })
    
      if (participantQualifies()) {
        // Send survey info
  
        setQualify(true)
        setScreen('participate')
      } else {
        setScreen('thankYou')
      }
    } else if (!validate) {
      setValidate(true)
      window.scrollTo(0, 0)
    } else {
      window.scrollTo(0, 0)
    }
    
  }

  return (
    <HideRender hide={showOverlay}>
      <Container>
        <form className="questionnaire-form" onSubmit={onSubmit}>
          {validate && !isCompleted && <p className="validate-message">Please correct the items highlighted in red.</p>}
          <BinaryQuestion number={1} prompt="Are you between the ages of 18 and 45?" id="age" value={age} setValue={setAge} validate={validate} />
          <RadioQuestion number={2} prompt="What is your biological sex?" id="sex" value={sex} setValue={setSex} options={['Male', 'Female', 'Other']} validate={validate} />
          <BinaryQuestion number={3} prompt="Do you have a medical diagnosis of any neurological disorder (epilepsy, Parkinson’s Disease, brain tumor, etc.)?" id="diag" value={diagnosis} setValue={setDiagnosis} validate={validate} />
          <BinaryQuestion number={4} prompt="Have you used steroids or barbiturates?" id="ste" value={steroids} setValue={setSteroids} validate={validate} />
          <BinaryQuestion number={5} prompt="Have you used methamphetamines?" id="met" value={methamphetamine} setValue={setMethanphetamine} validate={validate} />
          <BinaryQuestion number={6} prompt="Have you used psychoactive drugs?" id="psych" value={psych} setValue={setPsych} validate={validate} />
          <BinaryQuestion number={7} prompt="Do you have hearing, vision, or upper body motor impairments?" id="impair" value={impairment} setValue={setImpairment} validate={validate} />
          <BinaryQuestion number={8} prompt="Have you been diagnosed with Bipolar Disorder or Schizophrenia?" id="bipolar" value={bipolar} setValue={setBipolar} validate={validate} />
          <BinaryQuestion number={9} prompt="Are you left-handed?" id="left" value={left} setValue={setLeft} validate={validate} />
          <BinaryQuestion number={10} prompt="Are you currently in a intimate relationship (boyfriend, girlfriend, spouse) in which you don’t feel safe?" id="unsafe" value={unsafe} setValue={setUnsafe} validate={validate} />
          <BinaryQuestion number={11} prompt="Do you have any electrically, magnetically, or mechanically activated implants such as cardiac pacemakers (a device inserted in the chest to regulate the heartbeat) or any ferromagnetic implants (aneurysm clips, surgical clips, prostheses, metal fragment, etc.)?" id="implants" value={implants} setValue={setImplants} validate={validate} />
          <BinaryQuestion number={12} prompt="Are you Claustrophobic (afraid of being in small spaces)?" id="claustro" value={claustro} setValue={setClaustro} validate={validate} />
          {showPregnant && <BinaryQuestion number={13} prompt="Are you currently pregnant?" id="pregnant" value={pregnant} setValue={setPregnant} validate={validate} />}
          <hr />
          <input className="button" type="submit" value="Submit" />
        </form>    
      </Container>
    </HideRender>
  )
}

export default Questionnaire
