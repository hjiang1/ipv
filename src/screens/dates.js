import React from "react"
import ReactDOM from "react-dom"
import styled from "styled-components"
import { connect } from "react-redux"

import Modal from "../components/DateModal"
import Button from "../components/Button"
import SeverityCalendar from "../components/SeverityCalendar"

const Container = styled.div`
  display: flex;
  flex-direction: column;

  .dates-content {
    display: flex;
    flex-direction: column;

    .dates-prompt {
      display: flex;
      flex-direction: column;

      ol {
        margin-bottom: 0.5rem;
      }
    }
  }

  .rule {
    margin: 2rem 0;
  }
`

function Dates(props) {
  const {
    updateCurrentScreen,
    isModalOpen,
    openModal,
    closeModal,
    entries,
  } = props

  return (
    <Container>
      {ReactDOM.createPortal(
        <Modal open={isModalOpen} closeModal={closeModal} title="Add Entry" />,
        document.body
      )}
      <p className="title dates-title">IPV Occurrences</p>
      <div className="dates-content">
        <div className="dates-prompt">
          <p>Since, January 2020, select the dates when you experienced:</p>
          <ol>
            <li>Being punched, slapped, or kicked by an intimate partner.</li>
            <li>Being shaken violently by an intimate partner.</li>
            <li>
              Being choked or have had your breathing stopped by an intimate
              partner.
            </li>
            <li>
              Being hit with an object, or thrown against an object by an
              intimate partner.
            </li>
            <li>
              Being verbally or emotionally assaulted by an intimate partner.
            </li>
          </ol>
          <p>
            Select a date on the calendar below to add an entry. Click on an
            added date in the calendar to edit an entry.
          </p>
        </div>
        <SeverityCalendar
          firstDate={new Date(2020, 0, 1)}
          lastDate={new Date()}
          dateOnClick={date => openModal(date)}
          selected={entries}
        />
      </div>
      <hr className="rule" />
      <div className="actions">
        <Button secondary onClick={() => updateCurrentScreen("landing")}>
          Back
        </Button>
        <Button onClick={() => updateCurrentScreen("covid1")}>Next</Button>
      </div>
    </Container>
  )
}

const mapStateToProps = ({ datesPage: { entries, isModalOpen } }) => {
  return { entries, isModalOpen }
}

const mapDispatchToProps = dispatch => {
  return {
    openModal: date => dispatch({ type: `OPEN_MODAL`, date }),
    closeModal: () => dispatch({ type: `CLOSE_MODAL` }),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Dates)
