import React from 'react'
import { Link, graphql } from 'gatsby'
import Img from 'gatsby-image'
import styled from "styled-components"

import Layout from '../components/layout'




const FlexMain = styled.div`
  margin: 3rem 2rem;
  display: flex;
  flex-wrap: wrap;
  heigt: 100%;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`
const Content = styled.div`
  align-items: center;
  min-width: 300px;
  margin: 0 auto 12px auto;
`

const UserWrapper = styled.div`
  display: flex;
  align-items: center;
  margin: 0 auto 12px auto;
  &:last-child {
    margin-bottom: 0;
  }
`

const Avatar = styled.img`
  flex: 0 0 96px;
  width: 96px;
  height: 96px;
  margin: 0;
`

const Description = styled.div`
  flex: 1;
  margin-left: 18px;
  padding: 12px;
`

const Username = styled.h2`
  margin: 0 0 12px 0;
  padding: 0;
`

const Excerpt = styled.p`
  margin: 0;
`


export default (props) => (
    <Layout>
    <FlexMain>
    


    <Content>
        <h1>The Process</h1>
        <p>-ojectives</p>
        <p>-plan and proritize</p>
        <p>-(prototype, document, update) cycle</p>
        <p>-finalise - trust, ongoing support, best way</p>
    </Content>
    <Content>
        <h1>Tools I use - My learning</h1>
        <p>content info</p>
    </Content>
    <Content>
        <h1>company values</h1>
        <p>-sprinkle throughout, show dont tell</p>
    </Content>
    <Content>
        <h1>Skill set</h1>
        <p>what i am, what I'm not</p>
        <Img style={{
           width: "50%",
        }}
        fluid={props.data.profile.childImageSharp.fluid} />
    </Content>
    </FlexMain>
    </Layout>
)

export const pageQuery = graphql`
query {
    profile: file(relativePath: { eq: "danielballoch.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 128) {
            ...GatsbyImageSharpFluid
          }
        }
      }
  }
`