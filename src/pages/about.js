import React from 'react'
import { Link, graphql } from 'gatsby'
import Img from 'gatsby-image'
import styled from "styled-components"

import Layout from '../components/layout'
import {FlexMain, Flex, Content2} from '../components/style.js'





const Content = styled.div`
  align-items: center;
  max-width: 900px;
  margin: 0 auto;
  padding: 10px;
  
`



export default (props) => (
    <Layout>
    <FlexMain>
        
    <Flex>
        <Content>
            <h1>Design & Development</h1>
            <p>Being a designer over artist, means keeping the user in mind. The focus is on ease of use, consistency and responsiveness.
                I find this breeds a clean base design and the little bits of flash we add stand out a lot more as a result. </p>
            
            <p>Along with this, all websites are audited and optimized for speed and search engine ranking before I hand them over,
                 so you can rest assured your getting a efficent, accessible and fast site. </p>

                 <h1>Tools I use</h1>
            
            <p>
            <ul>
            <li>html, css, javascript</li>
            <li>JAMstack Focus (JavaScript, reusable APIs, and prebuilt Markup.)
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
                
                <li>Some MEANstack experience, I can work with/create simple backends.
                </li>
                
            </ul>
            </p>
            <p>If your business needs a serious backend service or database which can't be done through apis I probably don't have the expertise to help you
                 (confused? dont worry, I'll let you know and send you in the right direction). </p>
        </Content>
    </Flex>
    
    </FlexMain>
    </Layout>
)

