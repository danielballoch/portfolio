import React from 'react'
import { Link } from 'gatsby'
import styled from "styled-components"

const Container = styled.div`
  position: fixed;
  z-index: 3;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  top: 0;
  width: 100%;
  background-color: white;
`
const Nav = styled.div`
padding: .75em 1em;
`
const StyledLink = styled(Link)`
text-decoration: none;
color: black;
list-style-type: none;
&:hover {
    color:#FF4136;
}
&:active {
    color: red;
  }
`
const activeClassName = 'nav-item-active'




    

const Header = () => (
    <Container>
        <StyledLink to="/" ><Nav>Work</Nav></StyledLink>
        <StyledLink to="/about/" ><Nav>About</Nav></StyledLink>
        <StyledLink to="/services/"><Nav>Services</Nav></StyledLink>
        <StyledLink to="/contact" ><Nav>Contact</Nav></StyledLink>
   </Container>
)

export default Header
