import React from 'react'
import { Link } from 'gatsby'
import styled from "styled-components"

const Container = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  top: 0;
  postition: fixed;
`
const Nav = styled.div`
padding: .75em 1em;
text-decoration: none;
color: black;
list-style-type: none;
`

    // margin: '0 auto',
    // maxWidth: 960,
    // padding: '1.45rem 1.0875rem'
    

const Header = () => (
    <Container>
        <Link to="/"><Nav>Daniel</Nav></Link>
        <Link to="/about/"><Nav>About</Nav></Link>
        <Link to="/services/"><Nav>Services</Nav></Link>
        <Link to="/contact"><Nav>Contact</Nav></Link>
   </Container>
)

export default Header
