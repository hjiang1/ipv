import React from "react"
import styled from "styled-components"

import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"

const Container = styled.div`
  .message{
    font-size: 2.5rem;
    line-height: 1.2;
    color: maroon;
  }

  .pizza-image {
    margin-bottom: 2rem;
  }
`

function Overlay(props) {
  const {setShowOverlay} = props
  
  const pizzaImage = useStaticQuery(graphql`
    query {
      placeholderImage: file(relativePath: { eq: "pizza-chair.png" }) {
        childImageSharp {
          fluid(maxWidth: 300) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)

  return (
    <Container>
      <p className="message">NOTHING TO SEE HERE, MOVE ALONG</p>
      <Img className="pizza-image" fluid={pizzaImage.placeholderImage.childImageSharp.fluid} />
      <button className="button" onClick={() => setShowOverlay(false)}>Return to Questionnaire</button>
    </Container>
  )
}

export default Overlay
