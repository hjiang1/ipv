import React from "react"
import styled from "styled-components"
import classNames from "classnames"
import { FaTimes, FaTrashAlt, FaCaretLeft, FaCaretRight } from "react-icons/fa"

import { connect } from "react-redux"

import Modal from "../Modal"
import Button from "../Button"
import RadioScale from "./RadioScale"
import CheckboxSelect from "./CheckboxSelect"
import {
  dayNames,
  areDatesTheSame,
  isDateToday,
} from "../SeverityCalendar/functions"

const Container = styled.div`
  display: flex;
  flex-direction: column;
  overflow: hidden;

  .modal-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 4rem;
    background-color: var(--primary-color);

    padding: 1rem 2rem;
    @media only screen and (max-width: 600px) {
      padding: 1rem 1rem;
    }

    .modal-title {
      font-size: 22px;
      font-weight: bold;
      color: white;
    }

    .close-button {
      background: none;
      border: none;
      display: flex;
      justify-content: center;
      align-items: center;
      cursor: pointer;
      padding: 0;
      color: white;

      :focus {
        outline: none;
      }
    }
  }

  .modal-content {
    display: flex;
    flex-direction: column;
    overflow-y: scroll;

    .modal-content-title-container {
      min-height: min-content;

      display: flex;
      justify-content: space-between;
      align-items: center;
      padding: 0 2rem;
      min-height: 3.5rem;
      border-bottom: 2px solid lightgray;

      @media only screen and (max-width: 600px) {
        padding: 0 1rem;
      }

      .modal-content-title {
        display: flex;
        font-size: 22px;
        font-weight: bold;

        .title-day {
          margin-right: 0.5rem;

          @media only screen and (max-width: 600px) {
            display: none;
          }
        }
      }

      .page-date-button {
        background: none;
        border: none;
        display: flex;
        align-items: center;
        cursor: pointer;
        transition: transform 0.2s ease;
        padding: 0;

        &.hidden {
          visibility: hidden;
        }

        :focus {
          outline: none;
        }

        :hover {
          transform: scale(1.2);
        }
      }
    }

    .content {
      min-height: min-content;

      margin: 0 2rem;

      @media only screen and (max-width: 600px) {
        margin: 0 1rem;
      }

      .prompt {
        margin: 2rem 0 1rem;
      }
    }

    .actions {
      min-height: min-content;

      margin: 0 2rem 2rem;
      display: flex;
      justify-content: space-between;

      .delete-button {
        display: flex;
        align-items: center;
        justify-content: center;

        .button-text {
          margin-left: 0.5rem;

          @media only screen and (max-width: 600px) {
            display: none;
          }
        }

        &.hidden {
          visibility: hidden;
        }

        @media only screen and (max-width: 400px) {
          height: 3rem;
          width: 3rem;
          align-self: flex-end;
        }
      }

      .save-cancel-container {
        display: flex;

        @media only screen and (max-width: 400px) {
          flex-direction: column;
        }
      }
    }

    .rule {
      min-height: 1px;
      margin: 1rem 2rem;

      @media only screen and (max-width: 600px) {
        margin: 1rem 1rem;
      }
    }
  }
`

const DateModal = props => {
  const {
    closeModal,
    date,
    enterEntry,
    deleteEntry,
    isDateInEntries,
    modalData,
    updateModalData,
    experiences,
    changeModalDate,
  } = props

  const closeAndResetScroll = () => {
    closeModal()
    setTimeout(() => {
      document.getElementsByClassName("modal-content")[0].scrollTop = 0
    }, 250)
  }

  const actionWithClose = func => () => {
    func()
    closeAndResetScroll()
  }

  const updateExperiences = id => {
    const newModalData = JSON.parse(JSON.stringify(modalData))
    newModalData.experiences[id] = !newModalData.experiences[id]

    updateModalData(newModalData)
  }
  const updateSeverity = value => {
    const newModalData = JSON.parse(JSON.stringify(modalData))
    newModalData.severity = value

    updateModalData(newModalData)
  }

  const changeDateBy = amount => {
    const newDate = new Date(date)
    newDate.setDate(newDate.getDate() + amount)

    changeModalDate(newDate)
  }

  const displayDay = date ? `${dayNames[date.getDay()].long} ` : ""
  const displayDate = date
    ? `${date.getMonth() + 1}/${date.getDate()}/${date.getFullYear()}`
    : ""

  return (
    <Modal {...props}>
      <Container>
        <div className="modal-header">
          <div className="modal-title">
            {isDateInEntries ? "Edit Entry" : "Add Entry"}
          </div>
          <button className="close-button" onClick={closeAndResetScroll}>
            <FaTimes size="1.5rem" />
          </button>
        </div>
        <div className="modal-content">
          <div className="modal-content-title-container">
            <button
              className={classNames("page-date-button", {
                hidden: date && areDatesTheSame(date, new Date(2020, 0, 1)),
              })}
              onClick={() => changeDateBy(-1)}
            >
              <FaCaretLeft size="1.5rem" />
            </button>
            <div className="modal-content-title">
              <div className="title-day">{displayDay}</div>
              <div className="title-date">{displayDate}</div>
            </div>
            <button
              className={classNames("page-date-button", {
                hidden: date && isDateToday(date),
              })}
              onClick={() => changeDateBy(1)}
            >
              <FaCaretRight size="1.5rem" />
            </button>
          </div>
          <div className="content">
            <p className="prompt">{`Please select which events you experienced on ${displayDay} ${displayDate}.`}</p>
            <CheckboxSelect
              name="experiences"
              options={[
                {
                  text:
                    "Being punched, slapped, or kicked by an intimate partner",
                  id: "punched",
                },
                {
                  text: "Being shaken violently by an intimate partner",
                  id: "shaken",
                },
                {
                  text:
                    "Being choked or have had your breathing stopped by an intimate partner",
                  id: "choked",
                },
                {
                  text:
                    "Being hit with an object, or thrown against an object by an intimate partner",
                  id: "thrown",
                },
                {
                  text: "Being verbally or emotionally assaulted",
                  id: "verbal",
                },
              ]}
              selected={experiences}
              onChange={updateExperiences}
            />
            <p className="prompt">
              Please select on a scale of 0-7, with 0 being the least severe and
              7 being the most severe.
            </p>
            <RadioScale
              scale={[0, 7]}
              name="severity"
              selected={modalData.severity}
              onChange={updateSeverity}
            />
          </div>
          <hr className="rule" />
          <div className="actions">
            <Button
              className={classNames("delete-button", {
                hidden: !isDateInEntries,
              })}
              onClick={actionWithClose(deleteEntry)}
            >
              <FaTrashAlt className="delete-icon" size="1.5rem" />
              <div className="button-text">Delete Entry</div>
            </Button>
            <div className="save-cancel-container">
              <Button onClick={closeModal} secondary>
                Cancel
              </Button>
              <Button onClick={actionWithClose(enterEntry)}>
                {isDateInEntries ? "Save" : "Add"}
              </Button>
            </div>
          </div>
        </div>
      </Container>
    </Modal>
  )
}

const mapStateToProps = ({ datesPage: { entries, modalData } }) => {
  return {
    date: modalData.date,
    isDateInEntries: modalData.date in entries,
    modalData,
    experiences: modalData.experiences,
  }
}

const mapDispatchToProps = dispatch => {
  return {
    enterEntry: () => dispatch({ type: `ENTER_ENTRY` }),
    deleteEntry: () => dispatch({ type: `DELETE_ENTRY` }),
    closeModal: () => dispatch({ type: `CLOSE_MODAL` }),
    updateModalData: data => dispatch({ type: `UPDATE_MODAL_DATA`, data }),
    changeModalDate: date => dispatch({ type: `CHANGE_MODAL_DATE`, date }),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(DateModal)
