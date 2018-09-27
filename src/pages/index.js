import React from 'react'
import { Link, graphql } from 'gatsby'
import Img from 'gatsby-image'
import styled from "styled-components"

import Layout from '../components/layout'
import Header from '../components/header'



const HeroWrapper = styled.div`
height: 80vh;
`

const FlexMain = styled.div`
  margin: 3rem 2rem;
  display: flex;
  flex-wrap: wrap;
`
const Content = styled.div`
  align-items: center;
  min-width: 300px;
  margin: 0 auto 12px auto;
`




export default (props) => (
    <Layout>
    <HeroWrapper>
        <Img  style={{
            left: 0,
            top: 0,
            width: "100%",
            height: "100%",
           objectFit: "cover",
           objectPosition: "50% 20%", /* default value: image is centered*/
        }}
        fluid={props.data.background.childImageSharp.fluid} />
    </HeroWrapper>
        
    <FlexMain>
    <Content>
        <h1>Fast, responsive, secure websites that work everywhere.</h1>
    </Content>
    <Content>
        <h1>My Process</h1>
        <p>content info</p>
    </Content>
    <Content>
        <h1>Heading</h1>
        <p>content info</p>
    </Content>
    <Content>
        <h1>Heading</h1>
        <p>content info</p>
    </Content>
  </FlexMain>
    </Layout>
)



export const pageQuery = graphql`
query {
    background: file(relativePath: { eq: "bg.png" }) {
      childImageSharp {
        fluid(maxWidth: 1461) {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`
