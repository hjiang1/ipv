import React from "react"
import styled from "styled-components"

import HideRender from "../components/HideRender"

const Container = styled.div`
  .thank-you {
    font-size: 40px;
    line-height: 40px;
    font-weight: bold;
  }
  .resources {
    border: 1px solid lightgrey;
    border-radius: 5px;
    padding: 2rem;
    margin-top: 2rem;

    .resource {
      margin: 1rem;

      .resource-name {
        font-weight: bold;
      }
    }
  }
`

function ThankYou(props) {
  const {showOverlay} = props

  return (
    <HideRender hide={showOverlay}>
      <Container>
       <p className="thank-you">Thank you for completing the IPV questionnaire.</p>
        { props.participate === 'Yes' && <p> A researcher will be in touch with you soon.</p>
        }
        <p className="close-message">You may now close this window. This page will automatically hide itself after 5 minutes of inactivity to protect your privacy.</p>
        <div className="resources">
          <p>If you are a victim of IPV, you can use the resources below to seek help.</p>
          <div className="resource">
            <div className="resource-name">National Coalition Against Domestic Violence (NCADV)</div>
            <a href="https://ncadv.org/">https://ncadv.org/</a>
          </div>
          <div className="resource">
            <div className="resource-name">The National Domestic Violence Hotline</div>
            <a href="https://www.thehotline.org/help/">https://www.thehotline.org/help/</a>
          </div>
          <div className="resource">
            <div className="resource-name">The National Dating Abuse Hotline</div>
            <a href="http://www.loveisrespect.org/">http://www.loveisrespect.org/</a>
          </div>
        </div>
      </Container>
    </HideRender>
  )
}

export default ThankYou
