import React from 'react'
import { Link, graphql } from 'gatsby'
import Img from 'gatsby-image'
import styled from "styled-components"

import Layout from '../components/layout'
import Header from '../components/header'



const HeroWrapper = styled.div`
// height: 80vh;
`

const FlexMain = styled.div`
max-width: 1080px;
display: flex;
flex-direction: column;
margin:auto;
`
const Flex = styled.div`
margin: 3rem 1rem;
display: flex;
flex-wrap: wrap;
`

const Content = styled.div`
  align-items: center;
  max-width: 900px;
  margin: 0 auto;
  padding: 10px;
`
const SmallContent = styled.div`
  align-items: center;
  max-width: 300px;
  margin: auto;
  padding: 10px;
`
const ContentCenter = styled.div`
  align-items: center;
  max-width: 900px;
  margin: 0 auto 12px auto;
 text-align: center;
 padding: 10px;
`




export default (props) => (
    <Layout>
        
    <HeroWrapper>
        {/* <Img  
        fluid={props.data.background.childImageSharp.fluid} /> */}
        <Flex>
            <ContentCenter>
                <h1>Daniel Balloch</h1>
                <h4>Creating custom websites that work everywhere.</h4>
            </ContentCenter>
        </Flex>
        
    </HeroWrapper> 
   <FlexMain>
   
    <Flex>
    <Content>
    {/* Fast, responsive, secure, SEO and user friendly */}
    </Content>
    {/* <Content>
        <h1>Latest project</h1>
        <p>*currently looking for work.*Explain goals and how I met them.</p>
        
    </Content> */}
    
    
    <SmallContent>
        <h1>Aim</h1>
        <p>Help businesses and people grow customer connection, profit and reputation using online precence.</p>
    </SmallContent>
    <SmallContent>
        <h1>How</h1>
        <p>Tried and true design methods mixed with cutting edge web stack and hosting technologys.</p>
    </SmallContent>
    </Flex>


    {/* <Flex>
     <ContentCenter>
        <h1>Product example</h1>
        <p>*show website</p>
        <p>If I've implemented a content managment system with your product you can change or add any piece of content.
            This means images, text, icons, videos etc.</p>
        <h2>How to update</h2>
        <p>Update by... your site should instantly build and go live, easy.</p>
            <p>*this is how it looks</p>
        <h2>Limitations</h2>
        <p>For this to work I need to know the data you want control over as this will change my code and process.
            Web effects cannot be added to components currently through a CMS so if you want to redesign how something looks completly give me a call.</p>
            <hr/>
            <p>Eliminate wasted time and money for me and you.</p>
        <p>Some devs offer updates and/or managment, but this is often tedious, time consuming, inefficient etc and I care about both your time and mine.
        My tech eliminates most of the need to rehire me (or another dev) and puts you in control,
         although if you can't be bothered and have a list of things to change I will
             </p>
    </ContentCenter>
    </Flex> */}

    <Flex>
    <ContentCenter>
        <h2>All The Bells And Whistles</h2>
        {/* <p>*grid explaining seo, website load time, responsive design, </p>
        <p>stats or blog to show this?</p> */}
    </ContentCenter>
    </Flex>

    <Flex>
    <SmallContent>
        <h2>Responsive Design</h2>
        <p>Websites designed with all users in mind. Taking advantage of css grid, flexbox, javascript etc to optimize SmallContent and navigation.</p>
    </SmallContent>
    <SmallContent>
        <h2>Fast load times</h2>
        <p>optimized images, pre compiled static site, preload other pages etc = faster load time which means retained traffic and higher seo scores</p>
    </SmallContent>
    <SmallContent>
        <h2>User Experience</h2>
        <p>Site layout which is easiy to navigate and makes sense for customers. Importent SmallContent prioritized, customer drawn in, familiar navigation etc etc.</p>
    </SmallContent>
    <SmallContent>
        <h2>High Security</h2>
        <p>With server-side processes abstracted into microservice APIs, surface areas for attacks are reduced.
        You can also leverage the domain expertise of specialist third-party services.</p>
    </SmallContent>
    <SmallContent>
        <h2>SEO</h2>
        <p>search engine optimization implemented - load time optimization as well as keywords in metadata, footer etc to increase google site ranking.</p>
    </SmallContent>
    <SmallContent>
        <h2>Easy Editing</h2>
        <p>CMS integration with instant builds to eliminate wasted time and money. If implemented with your product you can change or add any piece of content to an existing layout.</p>
    </SmallContent>

    

    
  </Flex>

    <Flex>
  <SmallContent>
        <h1>Sounds good?</h1>
        <p>See <Link to="/contact">contact page</Link> for my details.</p>
        
    </SmallContent>
  </Flex>

  </FlexMain>
    </Layout>
)



export const pageQuery = graphql`
query {
    background: file(relativePath: { eq: "bg.png" }) {
      childImageSharp {
        fluid(maxWidth: 1920) {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`
