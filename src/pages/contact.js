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
        <h1>Get in touch</h1>
        <p>email: danielpbdesign@gmail.com</p>
        <p>phone: 022 078 0868</p>
    </Content>
    
    <Content>
        <h1>Contact Form</h1>
    </Content>
    
  </FlexMain>
  </Layout>
)