import React, { useState } from "react"
import styled from "styled-components"
import classNames from "classnames"
import { FaCaretUp, FaCircle, FaWrench, FaRegTrashAlt } from "react-icons/fa"

const severityColors = [
  "#00ff00",
  "#7cff00",
  "#d4ff00",
  "#fff600",
  "#ff8c00",
  "#ff5700",
  "#ff0000",
]

const Container = styled.div`
  margin: 0.5rem;
  border: 1px solid gray;
  border-radius: 5px;
  /* box-shadow: 3px 3px lightgray; */
  width: 40rem;

  .level1 {
    background-color: #00ff00;
  }

  .level2 {
    background-color: #7cff00;
  }

  .level3 {
    background-color: #d4ff00;
  }

  .level4 {
    background-color: #fff600;
  }

  .level5 {
    background-color: #ff8c00;
    color: white;
  }

  .level6 {
    background-color: #ff5700;
    color: white;
  }

  .level7 {
    background-color: #ff0000;
    color: white;
  }

  .card-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    background-color: lightgray;
    padding: 0.5rem 1rem;
    cursor: pointer;

    .date-range {
      font-weight: bold;
      font-size: 22px;
      display: flex;
      align-items: center;

      .collapse-button {
        margin-right: 0.5rem;
        transition: transform 0.2s ease;

        &.collapsed {
          transform: rotateX(180deg);
        }
      }

      .severity-indicator {
        margin-left: 0.5rem;
      }
    }

    .card-actions {
      display: flex;
    }

    .action {
      border-radius: 5px;
      border: 1px solid black;
      padding: 0.2rem;
      cursor: pointer;

      transition-property: color, background-color;
      transition-duration: 0.2s;
      transition-timing-function: ease;

      &.edit-card {
        margin-right: 0.5rem;
      }

      :hover {
        background-color: maroon;
        color: white;
      }
    }
  }

  .card-content {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    margin: 0;
    transition: height 0.4s ease;
    overflow: hidden;

    height: 11.5rem;

    &.collapsed {
      height: 0;
    }

    .experience-list {
      font-size: 16px;

      ol {
        margin: 1rem 2rem;
      }

      .experience-list-item {
        margin: 0;

        &.disabled {
          color: lightgray;
        }
      }
    }

    .severity {
      border-radius: 5px;
      font-weight: bold;
      padding: 0.5rem 1rem;
    }
  }
`

const getSeverityLevel = level => {
  switch (level) {
    case 1:
      return "1 - No injury"
    case 2:
      return "2 - Light Injury"
    case 3:
      return "3 - Moderate Injury"
    case 4:
      return "4 - Serious Injury"
    case 5:
      return "5 - Emergency Room Visit"
    case 6:
      return "6 - Admitted Emergency Room Inpatient"
    case 7:
      return "7 - Life Threatening Injury"
  }
}

function DateCard({ data }) {
  const { date, experiences, severity } = data

  const [collapsed, setCollapsed] = useState(true)

  return (
    <Container>
      <div className="dates">
        <label className="card-header" onClick={() => setCollapsed(!collapsed)}>
          <div className="date-range">
            <FaCaretUp
              className={classNames("collapse-button", { collapsed })}
            />
            {date}
            <FaCircle
              className="severity-indicator"
              color={severityColors[severity - 1]}
            />
          </div>
          <div className="card-actions">
            <FaWrench className="action edit-card" size="2rem" />
            <FaRegTrashAlt className="action delete-card" size="2rem" />
          </div>
        </label>
        <div className={classNames("card-content", { collapsed })}>
          <div className="experience-list">
            <ol>
              <li
                className={classNames("experience-list-item", {
                  disabled: !experiences[1],
                })}
              >
                being punched, slapped, or kicked by an intimate partner
              </li>
              <li
                className={classNames("experience-list-item", {
                  disabled: !experiences[2],
                })}
              >
                being shaken violently by an intimate partner
              </li>
              <li
                className={classNames("experience-list-item", {
                  disabled: !experiences[3],
                })}
              >
                being chocked or have had your breathing stopped by an intimate
                partner
              </li>
              <li
                className={classNames("experience-list-item", {
                  disabled: !experiences[4],
                })}
              >
                being hit with an object, or thrown against an object by an
                intimate partner
              </li>
              <li
                className={classNames("experience-list-item", {
                  disabled: !experiences[5],
                })}
              >
                being verbally or emotionally assaulted
              </li>
            </ol>
          </div>
          <div className={`severity level${severity}`}>
            {`Severity: ${getSeverityLevel(severity)}`}
          </div>
        </div>
      </div>
    </Container>
  )
}

export default DateCard
