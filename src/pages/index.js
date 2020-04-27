import React, { Fragment, useEffect, useState } from "react"
import { useStaticQuery, graphql } from "gatsby"
import styled from "styled-components"
import IdleTimer from "react-idle-timer"
import { FaTimes } from "react-icons/fa"

import GlobalStyle from "../components/GlobalStyle"
import Header from "../components/header"
import HideButton from "../components/HideButton"
import Screen from "../screens"
import Overlay from "../screens/overlay"
import SEO from "../components/seo"
import WIPBanner from "../components/WIPBanner"

import "../components/layout.css"

const Container = styled.div`
  display: flex;
  flex-direction: column;

  .content {
    margin: 0 auto;
    max-width: 960px;
    padding: 0 1.0875rem 1.45rem;
  }
`

function IndexPage() {
  const [currentScreen, setScreen] = useState("landing")
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

  const { title, altTitle } = data.site.siteMetadata

  // Change title on switch tab and show overlay on tab back
  useEffect(() => {
    document.addEventListener("visibilitychange", function () {
      if (document.hidden) {
        document.title = altTitle
      } else {
        // Changing tabs unmounts current tab so state has to be changed when user returns
        setShowOverlay(true)
      }
    })
  })

  return (
    <Fragment>
      <GlobalStyle />
      <SEO title={showOverlay ? altTitle : title} />
      <IdleTimer timeout={5 * 60 * 1000} onIdle={onIdle} />
      <WIPBanner />
      <Container>
        {!showOverlay && <HideButton onClick={() => setShowOverlay(true)} />}
        <Header logo={showOverlay ? "pizza" : "bwh"} />
        <main className="content">
          {showOverlay && <Overlay setShowOverlay={setShowOverlay} />}
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
        <footer></footer>
      </Container>
    </Fragment>
  )
}

export default IndexPage
