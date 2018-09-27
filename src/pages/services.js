import React from 'react'
import { Link, graphql } from 'gatsby'
import styled from "styled-components"
import Layout from '../components/layout'

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




export default () => (
 <Layout>
    <FlexMain>
    <Content>
        <h1>Static website creation</h1>
        <p>Full blown websites. Eccomerce, blogs, portfolios with all the bells and whistles.</p>
    </Content>
    
    <Content>
        <h1>Hosting and deployment</h1>
        <p>I can get everything up and running for you. Domain name accusition, site hosting etc. </p>
    </Content>
    <Content>
        <h1>CMS Integration</h1>
        <p>Configure everything with a Content Managment System so you can easily make small changes without having to hire someone else or delve into the code</p>
    </Content>
  </FlexMain>
  </Layout>
)

