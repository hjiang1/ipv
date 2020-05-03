import React, { Fragment, useEffect } from "react"
import styled from "styled-components"
import { connect } from "react-redux"

const Container = styled.div`
  .resources {
    border: 1px solid lightgrey;
    border-radius: 5px;
    margin-top: 2rem;
    box-shadow: 5px 5px lightgray;

    @media only screen and (max-width: 600px) {
      padding: 1rem;
    }

    @media only screen and (min-width: 600px) {
      padding: 2rem;
    }

    .resource {
      margin: 1rem 0;

      .resource-name {
        font-weight: bold;
      }
    }
  }

  .wide-link {
    @media only screen and (max-width: 359px) {
      display: none;
    }
  }

  .narrow-link {
    @media only screen and (min-width: 360px) {
      display: none;
    }
  }
`

function ThankYou(props) {
  const { participate, complete, completed } = props

  useEffect(() => {
    if (!completed) {
      complete()
    }
  }, [complete, completed])

  return (
    <Fragment>
      <Container>
        <p className="title thank-you-title">
          Thank you for completing the IPV questionnaire.
        </p>
        {participate === "Yes" && (
          <p> A researcher will be in touch with you soon.</p>
        )}
        <p className="close-message">
          You may now close this window. This page will automatically hide
          itself after 5 minutes of inactivity to protect your privacy.
        </p>
        <div className="resources">
          <p>
            If you are a victim of IPV, you can use the resources below to seek
            help.
          </p>
          <div className="resource">
            <div className="resource-name">
              National Coalition Against Domestic Violence (NCADV)
            </div>
            <a
              className="wide-link"
              href="https://ncadv.org/"
              target="_blank"
              rel="noopener noreferrer"
            >
              https://ncadv.org/
            </a>
            <a
              className="narrow-link"
              href="https://ncadv.org/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Website
            </a>
          </div>
          <div className="resource">
            <div className="resource-name">
              The National Domestic Violence Hotline
            </div>
            <a
              className="wide-link"
              href="https://www.thehotline.org/help/"
              target="_blank"
              rel="noopener noreferrer"
            >
              https://www.thehotline.org/help/
            </a>
            <a
              className="narrow-link"
              href="https://www.thehotline.org/help/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Website
            </a>
          </div>
          <div className="resource">
            <div className="resource-name">
              The National Dating Abuse Hotline
            </div>
            <a
              className="wide-link"
              href="http://www.loveisrespect.org/"
              target="_blank"
              rel="noopener noreferrer"
            >
              http://www.loveisrespect.org/
            </a>
            <a
              className="narrow-link"
              href="http://www.loveisrespect.org/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Website
            </a>
          </div>
        </div>
      </Container>
    </Fragment>
  )
}

const mapStateToProps = ({
  app: {
    participateResponses: { participate },
    completed,
  },
}) => {
  return { participate, completed }
}

const mapDispatchToProps = dispatch => {
  return {
    complete: () => dispatch({ type: `COMPLETE` }),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(ThankYou)
