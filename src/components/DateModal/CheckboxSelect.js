import React from "react"
import styled from "styled-components"

const Container = styled.div`
  display: flex;
  flex-direction: column;
  margin: 0 1rem;

  .checkbox-option {
    display: flex;
    align-items: center;

    .checkbox {
      display: none;
    }

    .label {
      margin: 0.5rem 0;
      padding: 0.5rem 1rem;
      border-radius: 5px;
      border: 1px solid black;
      width: 100%;
      cursor: pointer;

      :hover {
        color: var(--primary-color);
        border-color: var(--primary-color);
        box-shadow: 0 0 0 1px var(--primary-color) inset;
        font-weight: bold;
      }

      &.selected {
        background-color: var(--primary-color);
        color: white;
        font-weight: bold;
      }

      &.error {
        border-color: red;
      }
    }
  }
`

const CheckboxSelect = props => {
  const { name, options, selected, onChange } = props

  return (
    <Container>
      {options.map((option, i) => (
        <div className="checkbox-option" key={i}>
          <input
            className="checkbox"
            type="checkbox"
            id={option.id}
            name={`name`}
            onChange={() => onChange(option.id)}
          />
          <label
            className={`label ${selected[option.id] ? "selected" : ""}`}
            htmlFor={option.id}
            name={name}
          >
            {option.text}
          </label>
        </div>
      ))}
    </Container>
  )
}

export default CheckboxSelect
