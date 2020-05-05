import React from "react"
import styled from "styled-components"
import classNames from "classnames"
import { FaCheckCircle } from "react-icons/fa"

const Container = styled.td`
  display: flex;
  flex-direction: column;
  min-height: 5rem;
  font-weight: bold;
  padding: 0.2rem;
  flex: 1;
  border-left: 1px solid gray;
  cursor: pointer;
  width: 10rem;
  max-width: calc(100% / 7);
  justify-content: space-between;
  transition: box-shadow 0.2s ease;

  .date {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 1.5rem;
    width: 1rem;
    margin-left: 0.5rem;

    @media only screen and (max-width: 800px) {
      margin: 0 calc((100% - 1rem) / 2);
    }

    &.today {
      font-size: 1.2rem;
      color: var(--primary-color);
      border-bottom: 3px solid var(--primary-color);
    }
  }

  &.outside {
    background-color: lightgray;
  }

  &.disabled {
    color: darkgray;
    background: repeating-linear-gradient(
      45deg,
      rgba(0, 0, 0, 0.05),
      rgba(0, 0, 0, 0.05) 4.5px,
      rgba(0, 0, 0, 0.1) 4.5px,
      rgba(0, 0, 0, 0.1) 9px
    );
    cursor: default;
  }

  &.selected {
    background-color: rgba(128, 0, 0, 0.1);

    &.outside {
      background-color: rgba(128, 0, 0, 0.4);
    }
  }

  .selected-icon-container {
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 0.5rem;
    width: 100%;
    height: 100%;
    margin-top: -1.5rem;

    @media only screen and (max-width: 1000px) {
      align-items: flex-end;
    }
  }

  :hover :not(.disabled) {
    box-shadow: 0 0 0 2px var(--primary-color) inset;
  }

  @media only screen and (max-width: 1000px) {
    width: 4rem;
  }

  @media only screen and (max-width: 800px) {
    width: 3rem;
  }

  @media only screen and (max-width: 600px) {
    width: 2rem;
  }

  @media only screen and (max-width: 400px) {
    width: 1rem;
  }
`

const CalendarDay = props => {
  const { isOutside, isDisabled, selected, date, isToday, onClick } = props

  return (
    <Container
      className={classNames("calendar-day", {
        outside: isOutside,
        disabled: isDisabled,
        selected,
      })}
      onClick={() => {
        if (!isDisabled) {
          onClick(date)
        }
      }}
    >
      <div className={classNames("date", { today: isToday })}>
        {date.getDate()}
      </div>
      {selected && (
        <div className="selected-icon-container">
          <FaCheckCircle className="selected-icon" color="green" size="2rem" />
        </div>
      )}
    </Container>
  )
}

export default CalendarDay
