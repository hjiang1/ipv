import React, {useState} from "react"
import styled from "styled-components"
import { FaWrench, FaRegTimesCircle } from 'react-icons/fa';

const Container = styled.div`
  background-color: red;
  border: 2px solid black;

  .content {
    min-height: 3rem;
    margin: 0.5rem auto;
    max-width: 960px;
    padding: 0 1.0875rem;
    height: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    font-size: 0.8rem;
    line-height: 1.5;
  }

  .message {
    display: flex;
    align-items: center;

    .wrench-icon {
      margin-right: 1rem;
      min-height: 1.5rem;
      min-width: 1.5rem;
    }
  }

  .close-icon {
    height: auto;
    min-height: 1.5rem;
    min-width: 1.5rem;
    margin-left: 1rem;
    color: black;
    background-color: white;
    border-radius: 50%;
    box-shadow: 0px 0px 0px 1px black inset;

    transition-property: background-color, color, box-shadow;
    transition-duration: 0.2s;
    transition-timing-function: ease;

    :hover {
      color: white;
      background-color: black;
      box-shadow: 0px 0px 0px 1px white inset;
    }
  }
`

const WIPBanner = () => {
  const [open, setOpen] = useState(true)

  if (open) {
    return (
      <Container>
        <div className="content">
          <div className="message">
            <FaWrench className="wrench-icon" size="2rem" />
            <div>
              <div>This site is currently a work in progress.</div>
              <div>Please contact Sam Jiang at <a href="mailto:hjiang4@partners.org" target="_blank">hjiang4@partners.org</a> to provide feedback on the design of this site.</div>
            </div>
          </div>
          <FaRegTimesCircle className="close-icon" size="2rem" onClick={() => setOpen(false)} />
        </div>

      </Container>
    )
  } else {
    return null;
  }
}

export default WIPBanner
