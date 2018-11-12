import React from 'react'
import { Link } from 'gatsby'
import styled from "styled-components"
import menuIcon from "../images/menuIcon.png"

const Container = styled.div`
  position: fixed;
  z-index: 3;
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
  top: 0;
  width: 100%;
  height: auto;
  background-color:rgba(255,255,255, 0.95);

`


const NavMenu = styled.a`
display: none;
@media (max-width: 505px) {
    line-height: 50px;
    display: flex;
    justify-content: flex-end;
    border-left: solid rgba(0,0,0, 0.1);
    border-bottom: solid rgba(0,0,0, 0.1)  ;
    $background-image: $menuIcon;
    width: 35%;
    height: 50px;
    &:hover {
        background: rgba(0,0,0, 0.1);
    }
    
    &:active {
        background: rgba(0,0,0, 0.1); 
      }
  }
`
const MenuImg = styled.img`
    height: 50px;
    margin: 0 0 0 0;
    
`
const MenuItm = styled.div`
    text-align: center;
    align-self: center;
    align-self: flex-end;
    
	height: 50px;
`
const MenuToggle = styled.input.attrs({
    type: "checkbox"
})`
width: 100%;
/* display: none; */
`

const Logo = styled(Link)`
display: none;
@media (max-width: 505px) {
    border-bottom: solid rgba(0,0,0, 0.1);
    line-height: 50px;
    display: block;
    text-decoration: none;
    color: black;
    list-style-type: none;
    transition: 0.1s;
    text-align: center;
    align-self: start;
    height: 50px;
    width: 65%;
    &:hover {  
        background: rgba(0,0,0, 0.1);
    }
    &:active {
        background: rgba(0,0,0, 0.1); 
      }
}
`

const StyledLink = styled(Link)`

text-decoration: none;
color: black;
list-style-type: none;
transition: 0.1s;
&:hover {
    color:#FF4136;
}
&:active {
    color: red;
    background: radial-gradient(rgba(255,245,255, 0.95), rgba(255,255,255, 0.95)); 
  }
@media (max-width: 505px) {
    
    display: none;
    width: 100%;
    height: 14vh;
    text-align: center;
    border-bottom: rgba(0,0,0, 0.1) 1px solid ;
  }
  ${MenuToggle}:checked{
    display: block;
    }
    ${NavMenu}:hover{
        display: block;
    }
`

const Nav = styled.div`
padding: .75em 2em;
font-family: "Helvetica Neue", Helvetica, "Segoe UI";
`




    

const Header = () => (
    <Container>
        {/* <p>Daniel Balloch</p>
        <p>Web design & development</p> */}
    
        <Logo to="/">Daniel Balloch</Logo>
        <NavMenu onClick={() => console.error('You should NOT see this!')}>
            <MenuItm>Menu</MenuItm>
            <MenuImg src={menuIcon}/>
        </NavMenu>

        
        <StyledLink id="StyledLink" to="/" ><Nav>Work</Nav></StyledLink>
        <StyledLink to="/about/" ><Nav>About</Nav></StyledLink>
        <StyledLink to="/services/"><Nav>Services</Nav></StyledLink>
        <StyledLink to="/contact" ><Nav>Contact</Nav></StyledLink>
        


   </Container>
   
)

export default Header
