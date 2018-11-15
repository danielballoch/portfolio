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
  flex-direction: column;
  align-items: center;
  justify-content: center;
  max-width: 1080;
  min-height: 90vh;
`
const Content = styled.div`
  align-items: center;
  max-width: 600px;
  margin: 0 auto 12px auto;
`




export default () => (
 <Layout>
    <FlexMain>
    <Content> 
        <h1>Website Design & Development</h1>
        
        <p>Full blown websites. Eccomerce, blogs, portfolios with all the bells and whistles. <br/> <a href="#"> See portfolio.</a></p>
        <hr/>
    </Content>
    
    <Content>
        <h1>Hosting & deployment</h1>
        
        <p>I can get everything up and running for you or help along the way. Domain name accusition, site hosting etc. <br/> <a href="#"> Learn more.</a></p>
        <hr/>
    </Content>
    <Content>
        <h1>CMS Integration</h1>
        
        <p>Configure a Content Managment System so you can easily make small changes without having to hire someone else or delve into the code. <br/> <a href="#"> Learn more.</a></p>
        <hr/>
    </Content>
  </FlexMain>
  </Layout>
)

