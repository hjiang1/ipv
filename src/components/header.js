import PropTypes from "prop-types"
import React from "react"
import styled from "styled-components"

import bwhLogo from "../images/bwh-logo.png"
import pizzaLogo from "../images/pizza-logo.png"

const HeaderContainer = styled.header`
  background: var(--primary-color);
  margin-bottom: 1.45rem;

  .header-banner {
    margin: 0 auto;
    max-width: 960px;
    padding: 0 1.0875rem;
  }

  .header-logo {
    height: 3.5rem;
    margin: 1rem 0;
  }
`

const getLogo = logo => {
  switch (logo) {
    case "bwh":
      return <img className="header-logo" src={bwhLogo} alt="BWH Logo" />

    case "pizza":
    default:
      return <img className="header-logo" src={pizzaLogo} alt="Pizza Logo" />
  }
}

const Header = ({ logo }) => (
  <HeaderContainer>
    <div className="header-banner">{getLogo(logo)}</div>
  </HeaderContainer>
)

Header.propTypes = {
  logo: PropTypes.string,
}

Header.defaultProps = {
  logo: ``,
}

export default Header
