import React from 'react'
import { Link, graphql } from 'gatsby'
import Img from 'gatsby-image'
import styled from "styled-components"

import Layout from '../components/layout'
import Header from '../components/header'




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
// justify-content: space-around;
background-color:rgba(255,255,255, 0.95);
// border-radius: 25%;
@media (min-width: 1080px) {
    padding: 3em; 
}

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


const HeroWrapper = styled.div`

left 0;
margin: 3em 0 0 0;
height: 75vh;
align-items: center;
object-fit: cover;
overflow: visable;

`
const HeroText = styled.div`
text-align: center;
margin: 20vh auto;

`
const HeroHead = styled.h1`
font-size: 9vh;
line-height: 1;
padding: 0;
margin: 0;
`
const HeroSub = styled.h1`
font-size: 5vh;
line-height: 1;
padding: 0;
margin: 0;
`

const StyledImage = styled(Img)`
    margin: 3em 0 0 0;
    position: absolute;
    top: 0px;
    left: 0px;
    width: 100%;
    height: 100%;
    object-fit: cover;
    object-position: center center;
    opacity: 1;
    transition: none 0s ease 0s;
    z-index: -1;
    overflow: visable;
    
    
    -webkit-filter: opacity(60%);filter: opacity(60%);


   
  
    
    
`





export default (props) => (
    <Layout>
   <FlexMain>    
    <HeroWrapper>
        <HeroText>
            <HeroHead>Daniel Balloch</HeroHead>
            <HeroSub>Web Design & Development </HeroSub>
        </HeroText>
    <StyledImage  fluid={props.data.background.childImageSharp.fluid}   style={{position: "absolute"}}/> 
    </HeroWrapper> 
    
    
   
    {/* <Flex>
    <ContentCenter>
        <h1>Daniel Balloch - Web Developer</h1>
        <p>Fast, responsive, secure, SEO and user friendly static websites.</p>
    </ContentCenter>
    
    </Flex> */}
    
    {/* Fast, responsive, secure, SEO and user friendly */}
    
    {/* <Content>
        <h1>Latest project</h1>
        <p>*currently looking for work.*Explain goals and how I met them.</p>
        
    </Content> */}
    
    <Flex>
    <SmallContent>
        <h1>Aim</h1>
        <p>Help businesses and people grow customer connection, profit and reputation using online presence.</p>
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
        <p>Websites designed with all users in mind. Taking advantage of css grid, flexbox, javascript etc to optimize content and navigation.</p>
    </SmallContent>
    <SmallContent>
        <h2>Fast load times</h2>
        <p>optimized images, pre compiled static site, preload other pages etc means faster load time which means retained traffic and higher seo scores.</p>
    </SmallContent>
    <SmallContent>
        <h2>User Experience</h2>
        <p>Site layout which is easiy to navigate and makes sense for customers. Importent content prioritized, customer drawn in, familiar navigation etc etc.</p>
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
    <ContentCenter>
        <h2>With a touch of flash</h2>
        <p>Micro animations, user feedback, page transitions, images and effects...
        the little things that make your site look profesional when used in moderation.</p>
        
    </ContentCenter>
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
    background: file(relativePath: { eq: "bg.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 2016) {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`
