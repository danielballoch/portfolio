import React from 'react'
import { Link, graphql } from 'gatsby'
import styled from "styled-components"
import Layout from '../components/layout'
import {FlexMain2, Content2,Flex} from '../components/style'






export default () => (
 <Layout>
    <FlexMain2>
        
    <Content2> 
        <h1>Website Design & Development</h1>
        
        <p>Full blown websites. Eccomerce, blogs, portfolios with all the bells and whistles. <br/> <a href="#"> See portfolio.</a></p>
        <hr/>
    </Content2>
    
    <Content2>
        <h1>Hosting & deployment</h1>
        
        <p>I can get everything up and running for you or help along the way. Domain name accusition, site hosting etc. <br/> <a href="#"> See hosting and deployment options.</a></p>
        <hr/>
    </Content2>
    <Content2>
        <h1>CMS Integration</h1>
        
        <p>Configure a Content Managment System so you can easily make small changes without having to hire someone else or delve into the code. <br/> <a href="#"> Learn about content managment systems.</a></p>
        
    </Content2>
  </FlexMain2>
  </Layout>
)

