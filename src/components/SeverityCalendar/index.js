import React, { useState } from "react"
import styled from "styled-components"
import classNames from "classnames"
import { FaCaretLeft, FaCaretRight } from "react-icons/fa"

import CalendarDay from "./CalendarDay"
import {
  monthNames,
  dayNames,
  getFirstDayOfMonth,
  getDaysInMonth,
  isDateToday,
  areDatesTheSame,
} from "./functions"

const Container = styled.div`
  display: flex;
  flex-direction: column;
  border-radius: 5px;
  border: 1px solid gray;

  .calendar-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0.5rem 1rem;
    font-weight: bold;
    background-color: var(--primary-color);
    color: white;
    font-size: 22px;

    .calendar-action {
      transition: transform 0.2s ease;
      background: none;
      padding: 0;
      border: none;
      color: white;

      &.disabled {
        color: transparent;
      }

      :focus {
        outline: none;
      }

      :hover :not(.disabled) {
        cursor: pointer;
        transform: scale(1.2);
      }
    }
  }

  .calendar {
    display: flex;
    flex-direction: column;
    margin: 0;
  }

  .calendar-head {
    .calendar-head-row {
      display: flex;
      flex: 1 1 auto;
    }

    .day-name {
      background-color: var(--primary-color);
      padding: 0.5rem;
      text-align: center;
      color: white;
      flex: 1;
    }
  }

  .calendar-row {
    display: flex;
    flex: 1;
    border-top: 1px solid gray;

    td:first-of-type {
      border: none;
    }
  }
`

const SeverityCalendar = props => {
  const { firstDate, lastDate, dateOnClick, selected } = props

  const [month, setMonth] = useState(0)
  const [year, setYear] = useState(new Date().getFullYear())

  const decrementMonth = () => {
    if (month === 0) {
      setMonth(11)
      setYear(year - 1)
    } else {
      setMonth(month - 1)
    }
  }

  const incrementMonth = () => {
    if (month === 11) {
      setMonth(0)
      setYear(year + 1)
    } else {
      setMonth(month + 1)
    }
  }

  // Compile list of calendar days
  const calendarDays = []
  const numCalendarDays =
    getDaysInMonth(month, year) + getFirstDayOfMonth(month, year) > 35 ? 42 : 35

  for (let i = 0; i < numCalendarDays; i++) {
    const today = new Date()
    today.setHours(0, 0, 0, 0)
    let thisDate
    let thisMonth = month
    let thisYear = year
    let isOutside = true
    let isToday = false
    let isDisabled = false

    // If previous month
    if (i < getFirstDayOfMonth(month, year)) {
      thisDate =
        new Date(year, month, 0).getDate() -
        getFirstDayOfMonth(month, year) +
        i +
        1
      thisMonth = month - 1
    }
    // If next month
    else if (
      i >
      getDaysInMonth(month, year) + getFirstDayOfMonth(month, year) - 1
    ) {
      thisDate =
        i - getDaysInMonth(month, year) - getFirstDayOfMonth(month, year) + 1
      thisMonth = month + 1
    }
    // If current month
    else {
      thisDate = i - getFirstDayOfMonth(month, year) + 1
      isOutside = false
    }
    const date = new Date(thisYear, thisMonth, thisDate)

    // Determine universal modifiers
    isToday = isDateToday(date)
    isDisabled =
      (firstDate && date < firstDate) || (lastDate && date > lastDate)
    const isSelected =
      selected &&
      Object.keys(selected).some(entryDate =>
        areDatesTheSame(new Date(entryDate), date)
      )

    // Add day to list
    calendarDays.push(
      <CalendarDay
        key={i}
        isOutside={isOutside}
        isDisabled={isDisabled}
        selected={isSelected}
        date={date}
        isToday={isToday}
        onClick={dateOnClick}
      />
    )
  }

  // Compile calendar rows
  const calendarRows = []
  let cells = []

  calendarDays.forEach((row, i) => {
    if (i % 7 !== 0) {
      cells.push(row) // if index not equal 7 that means not go to next week
    } else {
      if (cells.length !== 0) {
        calendarRows.push(cells)
      } // when reach next week we contain all td in last week to calendarRows
      cells = [] // empty container
      cells.push(row) // in current loop we still push current row to new container
    }
    if (i === calendarDays.length - 1) {
      // when end loop we add remain date
      if (cells.length !== 0) {
        calendarRows.push(cells)
      }
    }
  })

  const disableDecrement = firstDate && month === firstDate.getMonth()
  const disableIncrement = lastDate && month === lastDate.getMonth()

  return (
    <Container>
      <div className="calendar-header">
        <button
          className={classNames("calendar-action", "previousMonth", {
            disabled: disableDecrement,
          })}
          disabled={disableDecrement}
          onClick={decrementMonth}
        >
          <FaCaretLeft size="2rem" />
        </button>
        <div className="calendar-month">{`${monthNames[month]} ${year}`}</div>

        <button
          className={classNames("calendar-action", "nextMonth", {
            disabled: disableIncrement,
          })}
          disabled={disableIncrement}
          onClick={incrementMonth}
        >
          <FaCaretRight size="2rem" />
        </button>
      </div>
      <table className="calendar">
        <thead className="calendar-head">
          <tr className="calendar-head-row">
            {dayNames.map(day => (
              <th key={day.short} className="day-name">
                {day.short}
              </th>
            ))}
          </tr>
        </thead>
        <tbody className="calendar-body">
          {calendarRows.map((days, i) => (
            <tr key={i} className="calendar-row">
              {days}
            </tr>
          ))}
        </tbody>
      </table>
    </Container>
  )
}

export default SeverityCalendar
