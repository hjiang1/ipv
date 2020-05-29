import React, { Fragment, useEffect } from "react"
import { useStaticQuery, graphql } from "gatsby"
import styled from "styled-components"
import IdleTimer from "react-idle-timer"
import { connect } from "react-redux"

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
function IndexPage(props) {
  const {
    currentScreen,
    updateCurrentScreen,
    showOverlay,
    updateShowOverlay,
  } = props

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [currentScreen])

  const onIdle = () => {
    updateShowOverlay(true)
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
        updateShowOverlay(true)
      }
    })
  })

  useEffect(() => {
    // Change title on close to disguise page in history
    window.addEventListener("beforeunload", () => {
      document.title = altTitle
    })
  }, [])

  return (
    <Fragment>
      <GlobalStyle />
      <SEO title={showOverlay ? altTitle : title} />
      <IdleTimer timeout={5 * 60 * 1000} onIdle={onIdle} />
      <WIPBanner />
      <Container>
        {!showOverlay && <HideButton onClick={() => updateShowOverlay(true)} />}
        <Header logo={showOverlay ? "pizza" : "bwh"} />
        <main className="content">
          {showOverlay && <Overlay updateShowOverlay={updateShowOverlay} />}
          <Screen
            currentScreen={currentScreen}
            updateCurrentScreen={updateCurrentScreen}
          />
        </main>
        <footer></footer>
      </Container>
    </Fragment>
  )
}

const mapStateToProps = ({ app: { currentScreen, showOverlay } }) => {
  return { currentScreen, showOverlay }
}

const mapDispatchToProps = dispatch => {
  return {
    updateShowOverlay: value =>
      dispatch({ type: `UPDATE_SHOW_OVERLAY`, value }),
    updateCurrentScreen: value =>
      dispatch({ type: `UPDATE_CURRENT_SCREEN`, value }),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(IndexPage)
