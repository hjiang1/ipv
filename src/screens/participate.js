import React, { Fragment, useEffect, useState } from "react"
import styled from "styled-components"
import classNames from "classnames"

import BinaryQuestion from "../components/BinaryQuestion"

const Container = styled.div`
  .consent-form {
    .label {
      margin-left: 0;
    }

    .email-label {
      margin-bottom: 0.5rem;
    }

    .email-input {
      border: 1px solid darkgray;
      border-radius: 5px;
      width: 25rem;
      max-width: 80vw;
      margin-bottom: 2rem;
      padding: 0.3rem 0.9rem;

      &.error {
        border-color: red;
      }
    }

    .validation {
      margin-left: 0;
      margin-top: 0.5rem;
      color: red;
    }

    .form-divider {
      width: 100%;
    }
  }
`

function Participate(props) {
  const [email, setEmail] = useState("")
  const [isCompleted, setIsCompleted] = useState(false)

  const { showOverlay, participate, setParticipate, setScreen } = props
  const [validate, setValidate] = useState(false)

  useEffect(() => {
    if (participate === "No" || email !== "") {
      setIsCompleted(true)
    } else {
      setIsCompleted(false)
    }
  }, [participate, email])

  const onSubmit = event => {
    event.preventDefault()

    if (isCompleted) {
      console.log("Consent: ", {
        participate,
        email,
      })

      // Send consent confirmation
      setScreen("thankYou")
    } else if (!validate) {
      setValidate(true)
    }
  }

  const onBack = () => {
    setScreen("questionnaire")
  }

  return (
    <Fragment>
      <Container>
        <p className="title qualify-title">
          You qualify to participate in the study based on your answers to the
          questionnaire.
        </p>
        <p>
          This study is divided into three parts. The first part includes an
          informed consent interview and a detailed screening. The second part
          of this study is Neurocognitive assessment. The third part is MRI
          scan. Total time will be about 3 hours.
        </p>
        <p>
          During the informed consent interview, you will be given opportunity
          for questions or concerns with the study principal investigator and/
          or study coordinator. A detailed clinical screening will also be given
          and you will be asked to complete screening forms.
        </p>
        <p>
          For the neurocognitive assessment, the participant will first complete
          the computer-assisted test. Once finished, the examiner will set the
          laptop computer aside and administer the other neurocognitive tests.
          You will be allowed short breaks to stretch, use the restroom, or get
          a drink of water, if needed.
        </p>
        <p>
          For the MRI scan part, pictures of the chemicals working in your brain
          will be taken using a Magnetic Resonance Spectroscopy (MRS) scan.
          Before we do this procedure, we will ask you to remove any metal from
          you and your clothing such as jewelry, keys etc. We will give you
          earplugs to wear to protect your hearing during scanning – the MRI
          machine makes loud noises. You will be asked to lie still in the MRI
          scanner with your head positioned comfortably on a pillow for the
          duration of the scan. You will be able to talk to the study staff
          through a two way intercom at all times during the scan. If you are
          feeling uncomfortable, you can tell the study staff. The study staff
          will also ask you how you are doing. Taking part in this research
          study is your choice. You do not have to take part in this study to
          get your usual medical care.
        </p>
        <hr />
        <form className="form consent-form" onSubmit={onSubmit}>
          {validate && !isCompleted && (
            <p className="validate-message">
              Please correct the items highlighted in red.
            </p>
          )}
          <BinaryQuestion
            prompt='Would you like to participte in this study? By choosing "Yes" you consent to the above conditions.'
            id="participate"
            value={participate}
            setValue={setParticipate}
            validate={validate}
          />
          {participate === "Yes" && (
            <Fragment>
              <label className="email-label" htmlFor="email">
                Please provide an email address that a researcher can reach you
                at:
              </label>
              {validate && email === "" && (
                <p className="validation">Please enter an email.</p>
              )}
              <input
                className={classNames("email-input", {
                  error: validate && email === "",
                })}
                type="email"
                id="email"
                name="email"
                value={email}
                onChange={event => setEmail(event.target.value)}
              />
            </Fragment>
          )}
          <hr className="form-divider" />
          <div className="actions">
            <button
              className="button back-button"
              value="Back"
              onClick={onBack}
            >
              Back
            </button>
            <input
              className={classNames("button", { disabled: !isCompleted })}
              type="submit"
              value="Finish"
            />
          </div>
        </form>
      </Container>
    </Fragment>
  )
}

export default Participate
