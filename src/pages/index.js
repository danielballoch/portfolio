import React from 'react'
import { Link, graphql } from 'gatsby'


import Layout from '../components/layout'
import {FlexMain, Flex, FlexParallax, SmallContent, ContentCenter, HeroWrapper, HeroText, HeroHead, HeroSub, StyledImage, FlexMain2} from '../components/style.js';
import Fade from 'react-reveal';

export default (props) => (
    
    <Layout >
   <FlexMain >    
    <HeroWrapper>
        <HeroText>
            <HeroHead>Daniel Balloch</HeroHead>
            <HeroSub>Web Design & Development </HeroSub>
        </HeroText>
    <StyledImage  fluid={props.data.background.childImageSharp.fluid}   style={{position: "absolute"}} alt="Daniel Balloch hero image"/> 
    </HeroWrapper> 
    
    
   
    
    <Flex>
    <SmallContent>
        <h1>Aim</h1>
        <p>Help businesses and people grow customer connection, profit and reputation using online presence.</p>
    </SmallContent>
    <SmallContent>
        <h1>How</h1>
        <p>Tried and true design methods mixed with cutting edge web stack and hosting technologies.</p>
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

</FlexMain>
    <FlexParallax>
    <ContentCenter>
    <Fade bottom>
        <h2>All The Bells And Whistles</h2>
        {/* <p>*grid explaining seo, website load time, responsive design, </p>
        <p>stats or blog to show this?</p> */}
        </Fade>
    </ContentCenter>
    </FlexParallax>
<FlexMain>

    <Flex>
    <SmallContent>
        <h2>Responsive Design</h2>
        <p>Websites designed with all users and devices in mind. Taking advantage of css grid, flexbox, javascript etc to optimize content and navigation.</p>
    </SmallContent>
    <SmallContent>
        <h2>Fast load times</h2>
        <p>Optimized images, pre compiled static site, lazy-load images etc. The resulting faster load time should mean retained traffic and higher seo scores.</p>
    </SmallContent>
    <SmallContent>
        <h2>User Experience</h2>
        <p>Site layouts which are easy to navigate and make sense to users. Importent content prioritized, customers drawn in, familiar navigation etc.</p>
    </SmallContent>
    <SmallContent>
        <h2>High Security</h2>
        <p>For E-ccomerce or websites with sensitive information on the server-side I leverage specialist third party services. 
             This means surface areas for attacks are reduced, keeping you and your customers safe.</p>
    </SmallContent>
    <SmallContent>
        <h2>SEO</h2>
        <p>Search engine optimization implemented. This means load time optimization as well as relevant content/keywords in metadata, footer etc to increase google site ranking.</p>
    </SmallContent>
    <SmallContent>
        <h2>Easy Editing</h2>
        <p>CMS integration with instant builds to eliminate wasted time and money. If included with your website you can change or add any piece of content to an existing layout.</p>
    </SmallContent>

  </Flex>
  </FlexMain>
   <FlexParallax>
   
   
    <ContentCenter>
    <Fade bottom>
        <h2>With a touch of flash</h2>
    </Fade>
    </ContentCenter>
    
    </FlexParallax>

    <FlexMain>
    <Flex>

        <ContentCenter><h3>"The little things that make a professional site when used in moderation."</h3></ContentCenter>
        <SmallContent>
            <h2>Content selection</h2>
            <p>Pages, headings, scripts, images... content is the most important thing. You know your business,
                 but I may be able to make some suggestions to make content more web friendly.</p>
        </SmallContent>
        <SmallContent>
            <h2>Micro Animations</h2>
            <p>Small animations to make UI easy and natural. Fancy an animated menu toggle button for mobile,
                 text that pops into the screen or an updating password strength bar, I can handle that. </p>
        </SmallContent>
        <SmallContent>
            <h2>Page Transitions</h2>
            <p>Animation goes with navigation. Going from services to contact, page to page, in a unique way is a chance to stand out while also giving content a chance to load while users are distracted.    </p>
        </SmallContent>
       
        
    </Flex>
  </FlexMain>


  <FlexMain2>   
            <h2>Let's start your project</h2>
            <h1>Phone: </h1>
            <h2>022 078 0868</h2>
            <h1>Email:</h1>
            <h3> danielkingballoch@gmail.com</h3>
            <p>See <Link to="/contact">contact page</Link> for more details.</p>
  </FlexMain2>
  
  
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
