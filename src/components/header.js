import PropTypes from "prop-types"
import React from "react"
import styled from "styled-components"

import logo from "../images/bwh.png"

const HeaderContainer = styled.header`
  background: maroon;
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

const Header = ({ siteTitle }) => (
  <HeaderContainer>
    <div className="header-banner">
      <img className="header-logo" src={logo} alt="Logo" />
    </div>
  </HeaderContainer>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
