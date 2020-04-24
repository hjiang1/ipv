import React, {Fragment, useEffect, useState} from "react"
import styled from "styled-components"
import classNames from "classnames"

const Container = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 2rem;

  .prompt-container {
    display: flex;
    margin: 0 0 1rem 0;
    align-items: flex-start;

    .question-number {
      background-color: maroon;
      width: 1.5rem;
      height: 1.5rem;
      display: flex;
      align-items: center;
      justify-content: center;
      color: white;
      font-weight: bold;
      margin: 0 1rem 0 0;
      flex-shrink: 0;
      cursor: default;
    }

    .prompt {
      margin: 0;
    }
  }

  .validation {
    color: red;
    margin-left: 2.5rem;
  }

  .radio {
    display: none;
  }

  .label {
    margin: 0.2rem 2.5rem;
    padding: 0.2rem 0.5rem;
    border-radius: 5px;
    border: 1px solid darkgray;
    width: 10rem;
    transition-property: color, background-color, border;
    transition-duration: 0.2s;
    transition-timing-function: ease;

    @media (hover: hover) { 
      :hover {
        border-color: maroon;
        color: maroon;
        cursor: pointer;
        font-weight: bold;
      }
    }

    &.selected
    {
      background-color: maroon;
      border-color: maroon;
      color: white;
      font-weight: bold;
    }

    &.error {
      border-color: red;
    }
}
`

function BinaryQuestion(props) {
  const [isInvalid, setIsInvalid] = useState(false)
  const {prompt, id, number, value, setValue, options, validate} = props

  useEffect(() => {
    if (validate) {
      if (value === undefined) {
        setIsInvalid(true)
      } else {
        setIsInvalid(false)
      }
    }
  }, [validate, value])
  
  return (
    <Container>
      <div className="prompt-container">
        {number && <div className="question-number">{number}</div>}
        <p className="prompt">{prompt}</p>
      </div>
      {isInvalid && <p className="validation">Please select an option.</p>}
      {options.map((option, i) => <Fragment key={i}>
        <input className="radio" type="radio" name={`q-${id}`} id={`q-${id}-${option}`} checked={value === option} onChange={() => setValue(option)} />
        <label className={classNames('label', {selected: value === option, error: isInvalid})} onTouchStart={() => setValue(option)} htmlFor={`q-${id}-${option}`}>{option}</label>
      </Fragment>)}
    </Container>
  )
}

export default BinaryQuestion
