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
//   flex-wrap: wrap;
flex-direction: column;
`
const Content = styled.div`
  align-items: center;
  max-width: 900px;
  margin: 0 auto 12px auto;
`




export default (props) => (
    <Layout>
        
    <HeroWrapper>
        <Img  style={{
            left: 0,
            top: 0,
            width: "100%",
            height: "80vh",
            zIndex: "-1",
           objectFit: "cover",
           objectPosition: "50% 20%", /* default value: image is centered*/
           position: "absolute"
        }}
        fluid={props.data.background.childImageSharp.fluid} />
        <FlexMain>
            <Content style={{
                top: "25%",
                alignSelf: "center",
               position: "absolute",
               textAlign: "center"
            }}>
                <h1>Daniel Balloch</h1>
                <h4>Creating custom websites that work everywhere.</h4>
            </Content>
        </FlexMain>
        
        
    </HeroWrapper>
        
    <FlexMain>
    <Content>
    {/* Fast, responsive, secure, SEO and user friendly */}
    </Content>
    {/* <Content>
        <h1>Latest project</h1>
        <p>*currently looking for work.*Explain goals and how I met them.</p>
        
    </Content> */}
    
    <Content>
        <h1>Design & Development</h1>
        <p>I consider myself a designer over artist, meaning I keep the user in mind. The focus is on simplicity, consistency and responsiveness.</p>
        <p>I do my research and try pick the best tech for the job. Right now for most clients that means static sites paired with APIs and if needed CMS.</p>
    </Content>
    <Content>
        <h1>Aim</h1>
        <p>Help businesses and people grow customer connection, profit and reputation using online precence.</p>
        <h1>How</h1>
        <p>Tried and true design methods mixed with cutting edge web stack and hosting technologys.</p>
       
   
    </Content>

     <Content>
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
    </Content>
    
    
    <Content>
        <h2>My Tech</h2>
        <p>*grid explaining seo, website load time, responsive design, </p>
        <p>stats or blog to show this?</p>
    </Content>
    <Content>
        <h2>Fast load times</h2>
        <p>optimized images, pre compiled static site, preload other pages etc = faster load time which means retained traffic and higher seo scores</p>
    </Content>
    <Content>
        <h2>Hosting that scales</h2>
        <p>cloud based hosting platforms which serve static files, user interaction done through apis on seperate server.</p>
    </Content>
    <Content>
        <h2>Search Engine Optimization</h2>
        <p>seo implementation - load time optimization as well as keywords in metadata, footer etc to increase google site ranking.</p>
    </Content>
    <Content>
        <h2>Responsive Design</h2>
        <p>Websites designed with all users in mind. Taking advantage of css grid, flexbox, javascript etc to optimize content and navigation.</p>
    </Content>
    <Content>
        <h2>User Experience</h2>
        <p>Site layout which is easiy to navigate and makes sense for customers. Importent content prioritized, customer drawn in, familiar navigation etc etc.</p>
    </Content>
    <Content>
        <h2>High Security</h2>
        <p>With server-side processes abstracted into microservice APIs, surface areas for attacks are reduced.
        You can also leverage the domain expertise of specialist third-party services.</p>
    </Content>

    <Content>
        <h1>Sound good?</h1>
        <p>See <a href="/contact">contact page</a> for my details.</p>
    </Content>

    
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
