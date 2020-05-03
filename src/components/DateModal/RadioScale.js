import React from "react"
import styled from "styled-components"

const Container = styled.div`
  display: flex;

  div:first-of-type {
    .label {
      border-top-left-radius: 5px;
      border-bottom-left-radius: 5px;
    }
  }

  div:last-of-type {
    .label {
      border-top-right-radius: 5px;
      border-bottom-right-radius: 5px;
    }
  }

  .radio-container {
    display: flex;
    flex-direction: column;
    align-items: center;
    flex-grow: 1;

    .radio {
      display: none;
    }

    .label {
      display: flex;
      justify-content: center;
      align-items: center;
      height: 4rem;
      border: 1px solid black;
      cursor: pointer;
      width: 100%;

      :hover {
        box-shadow: 0 0 0 1px var(--primary-color) inset;
        color: var(--primary-color);
        border-color: var(--primary-color);
        font-weight: bold;
      }

      &.selected {
        background-color: var(--primary-color);
        font-weight: bold;
        color: white;
      }
    }
  }
`

const RadioScale = props => {
  const { name, scale, selected, onChange } = props

  const radioList = Array(scale[1] - scale[0] + 1)
    .fill()
    .map((_, idx) => scale[0] + idx)

  return (
    <Container>
      {radioList.map((radio, i) => (
        <div className="radio-container" key={i}>
          <input
            className="radio"
            type="radio"
            id={`${name}-${radio}`}
            name={`name`}
            onChange={() => onChange(i)}
          />
          <label
            className={`label ${i === selected ? "selected" : ""}`}
            htmlFor={`${name}-${radio}`}
            name={name}
          >
            {radio}
          </label>
        </div>
      ))}
    </Container>
  )
}

export default RadioScale
