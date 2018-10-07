import React from 'react'
import { Link, graphql } from 'gatsby'
import Img from 'gatsby-image'
import styled from "styled-components"

import Layout from '../components/layout'




const FlexMain = styled.div`
max-width: 900px;
display: flex;
flex-direction: column;
margin:auto;
`
const Flex = styled.div`
margin: 2rem 1rem;
display: flex;
flex-wrap: wrap;
`

const Content = styled.div`
  align-items: center;
  max-width: 900px;
  margin: 0 auto 12px auto;
  padding: 10px;
`


export default (props) => (
    <Layout>
    <FlexMain>
        
    <Flex>
        <Content>
            <h1>Design & Development</h1>
            <p>Being a designer over artist, means keeping the user in mind. The focus is on simplicity, consistency and responsiveness.</p>
            <p>Using the best tech for the job. Right now for most cases that means static sites paired with APIs and if needed CMS.
                If not, I'll be straight up and try make a reccomendation.</p>
        </Content>
    </Flex>

    <Flex>
        <Content>
            <h1>Tools I use - My learning</h1>
            <p>An interest in tech and business lead me to picking up my former web development learning from highschool.</p>
            <p>
            This meant brushing up html, css, java and my design principles.
            I then discovered the backend, learnt and used the MEANstack, before realiseing JAMstack would be the way to go for most clients needs. </p>
            <p>In Short:
            <ul>
            <li>html, css, java</li>
            <li>JAMstack Focus
                    <ul>
                        <li>Static Site Generators (gatsby, Next -may learn Hugo & Jekyll etc)</li>
                        <li>APIs (forms, eccomerce, blog etc)</li>
                        <li>CMS Integration (Netlify, headlessCMS etc)</li>
                    </ul>
                </li>
                <li>Hosting
                    <ul>
                        <li>Hosting in CDN (Firebase, AWS S3, Cloudfront, Netlify)</li>
                    </ul>
                </li>
                <li>primarily self taught, online documentation, books, guides etc.</li>
                
                <li>Some MEANstack experience</li>
                
            </ul>
            </p>
            
            
        </Content>
    </Flex>

     {/* <Flex>
        <Content>
            <h1>Who Am I?</h1>
            
        </Content>
    </Flex> */}

    {/* <Img style={{width: "80px",}}fluid={props.data.profile.childImageSharp.fluid} /> */}
    {/* Working with me/testomonials */}
    {/* company values-sprinkle throughout, show dont tell */}
    
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