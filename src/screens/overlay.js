import React from "react"
import styled from "styled-components"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"

import Button from "../components/Button"

const Container = styled.div`
  display: flex;
  flex-direction: column;

  .message {
    font-size: 2.5rem;
    line-height: 1.2;
    color: var(--primary-color);
  }

  .pizza-image {
    margin-bottom: 2rem;
  }
`

function Overlay(props) {
  const { updateShowOverlay } = props

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
      <p className="message">DISGUISED PAGE WILL GO HERE</p>
      <Img
        className="pizza-image"
        fluid={pizzaImage.placeholderImage.childImageSharp.fluid}
      />
      <Button onClick={() => updateShowOverlay(false)}>Return to Order</Button>
    </Container>
  )
}

export default Overlay
