import React from 'react'
import { Link } from 'gatsby'
import styled from "styled-components"

const Container = styled.div`
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    justify-content: center;
    background-color: #FF4136;
    margin: 0;
    width:100%;
`
const Item = styled.div`
    margin:  auto;
    padding: 1.45rem 1.0875rem;
    color: white;
`


    
    

const Footer = () => (
    <Container>
        {/* <Item>social icons</Item>
        <Item>Privacy Policy</Item>
        <Item>Sitemap</Item> */}
        <Item>Daniel Balloch  © 2018</Item>
        
   </Container>
)

export default Footer