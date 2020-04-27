import React from "react"
import styled from "styled-components"
import { FaTimes } from "react-icons/fa"

import ButtonContainer from "../components/Button"

const HideButtonContainer = styled(ButtonContainer)`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0;
  border-radius: 5px;
  border: 1px solid white;
  position: sticky;
  right: 4vw;
  top: calc((5.5rem - 3.25rem) / 2);
  font-size: 2.25rem;
  height: 3.25rem;
  background-color: maroon;
  color: white;
  width: fit-content;
  align-self: flex-end;
  margin-top: 1.25rem;
  margin-bottom: -4.5rem;
  text-decoration: none;

  @media (hover: hover) {
    :hover {
      background-color: white;
      border: 1px solid maroon;
      color: maroon;
    }
  }

  .times-icon {
    margin: -0.3rem;
    @media only screen and (min-width: 601px) {
      margin-right: 0.25rem;
    }
  }

  .hide-text {
    @media only screen and (max-width: 600px) {
      display: none;
    }
  }
`

const HideButton = ({ onClick }) => (
  <HideButtonContainer
    className="button hide-button"
    id="hide"
    onClick={onClick}
  >
    <FaTimes className="times-icon" />
    <div className="hide-text">HIDE</div>
  </HideButtonContainer>
)

export default HideButton
