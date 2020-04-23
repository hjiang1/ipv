import PropTypes from "prop-types"
import React from "react"
import styled from "styled-components"

const HeaderContainer = styled.header`
  background: maroon;
  margin-bottom: 1.45rem;

  .header-banner {
    margin: 0 auto;
    max-width: 960px;
    padding: 1.45rem 1.0875rem;
  }

  .header-title {
    color: white;
    margin: 0;
    cursor: default;
  }
`

const Header = ({ siteTitle }) => (
  <HeaderContainer>
    <div className="header-banner">
      <h1 className="header-title">
        {siteTitle}
      </h1>
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
