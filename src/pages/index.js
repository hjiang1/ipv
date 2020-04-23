import React, { Fragment, useEffect, useState } from "react"
import { useStaticQuery, graphql } from "gatsby"
import styled from "styled-components"
import IdleTimer from "react-idle-timer"

import Header from "../components/header"
import Screen from "../screens"
import Overlay from "../screens/overlay"
import SEO from "../components/seo"

import "../components/layout.css"

const Container = styled.div`
  .content {
    margin: 0 auto;
    max-width: 960px;
    padding: 0 1.0875rem 1.45rem;

    .button {
      border-radius: 5px;
      border: 1px solid black;
      background-color: rgba(128, 0, 0, 0.15);
      padding: 0.3rem 0.9rem;
      margin-top: 1rem;
      font-weight: bold;

      &.hide-button {
        border-radius: 5px;
        border-width: 2px;
        position: fixed;
        right: 4vw;
        top: 0;
        font-size: 60px;
        height: 60px;
        color: maroon;
        background-color: white;
      }

      :hover {
        background-color: maroon;
        color: white;
        cursor: pointer;
      }
      
      :focus {
        outline: 0;
      }
    }

    .validate-message {
      color: red;
      font-weight: bold;
    }
  }
`

function IndexPage() {
  const [currentScreen, setScreen] = useState('landing')
  const [showOverlay, setShowOverlay] = useState(false)
  const [qualify, setQualify] = useState(false)
  const [participate, setParticipate] = useState()

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [currentScreen])

  const onIdle = () => {
    setShowOverlay(true)
  }

  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
          altTitle
        }
      }
    }
  `)

  const {title, altTitle} = data.site.siteMetadata

  return (
    <Fragment>
      <SEO title={showOverlay ? altTitle : title} />
      <IdleTimer timeout={10 * 1000} onIdle={onIdle} />
      <Container>
        <Header siteTitle={showOverlay ? altTitle : title} />
        <main className="content">
          { showOverlay
            ? <Overlay setShowOverlay={setShowOverlay} />
            : <button className="button hide-button" id="hide" onClick={() => setShowOverlay(true)}>HIDE</button> 
          }
          <Screen
            currentScreen={currentScreen}
            setScreen={setScreen}
            qualify={qualify}
            setQualify={setQualify}
            participate={participate}
            setParticipate={setParticipate}
            showOverlay={showOverlay}
            setShowOverlay={setShowOverlay}
          />
        </main>
        <footer>
        </footer>
      </Container>
    </Fragment>
  )
}

export default IndexPage
