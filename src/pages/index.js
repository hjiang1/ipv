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
      border: 1px solid white;
      background-color: lightgray;
      padding: 0.5rem 1rem;
      font-weight: bold;
      transition-property: color, background-color, border;
      transition-duration: 0.2s;
      transition-timing-function: ease;

      @media (hover: hover) { 
        :hover {
          color: maroon;
          border: 1px solid maroon;
          cursor: pointer;
        }
      }
      
      :focus {
        outline: 0;
      }
    }

    .hide-button {
      border-radius: 5px;
      border: 1px solid white;
      position: fixed;
      right: 4vw;
      top: calc((5.5rem - 3.25rem)/2);
      font-size: 2.25rem;
      height: 3.25rem;
      background-color: maroon;
      color: white;

      @media (hover: hover) { 
        :hover {
          background-color: white;
          border: 1px solid maroon;
          color: maroon;
        }
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

  // Change title on switch tab and show overlay on tab back
  useEffect(() => {
    document.addEventListener("visibilitychange", function() {
      if (document.hidden){
        document.title = altTitle
      } else {
        // Changing tabs unmounts current tab so state has to be changed when user returns
        setShowOverlay(true)
      }
    })
  })

  return (
    <Fragment>
      <SEO title={showOverlay ? altTitle : title} />
      <IdleTimer timeout={5 * 60 * 1000} onIdle={onIdle} />
      <Container>
        <Header logo={showOverlay ? 'pizza' : 'bwh'} />
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
