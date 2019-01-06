import React from 'react';
import styled from 'styled-components';
import Img from 'gatsby-image'
import bg2 from '../images/fresh_snow.png'

export const FlexMain = styled.div`
max-width: 1080px;
display: flex;
flex-direction: column;
margin:56px auto;

`
export const FlexMain2 = styled(FlexMain)`
  align-items: center;
  justify-content: center;
  padding: 0 1em;
  min-height: 90vh;
`



export const Flex = styled.div`
margin: 3rem 1rem;
display: flex;
flex-wrap: wrap;
align-items: flex-start;
// justify-content: space-around;
background-color:rgba(255,255,255, 0.95);
background-image: url("$(bg2)");
// border-radius: 25%;
@media (min-width: 630px) {
    padding: 3em; 
}
box-shadow: 0 1px 3px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.24);
`
export const FlexParallax = styled(Flex)`
background-image: url(${bg2});
background-attachment: fixed;
margin: 0;
padding: 6em;
box-shadow: none;
`
export const Content = styled.div`
  align-items: center;
  min-width: 300px;
  margin: 0 auto 2em auto;
`
export const Content2 = styled(Content)`
max-width: 600px;
padding: 0 1em;
`


export const SmallContent = styled.div`
  max-width: 300px;
  margin: auto;
  padding: 10px;
  align-self: flex-start;
  
`
export const ContentCenter = styled.div`
  align-items: center;
  max-width: 900px;
  margin: 0 auto 1px auto;
 text-align: center;
 padding: 10px;
`



export const HeroWrapper = styled.div`

left: 0;
margin: 0 0 0 0;
height: 77vh;
align-items: center;
object-fit: cover;
overflow: visable;
@media (max-width: 555px) {
    height: 40vh;
}
`
export const HeroText = styled.div`
text-align: center;
margin: 20vh auto;
@media (max-width: 555px) {
    margin: 9vh 12%;
}
transition: 0.2s;
`
export const HeroHead = styled.h1`
font-size: 9vh;
line-height: 1;
padding: 0;
margin: 0;
`
export const HeroSub = styled.h1`
font-size: 5vh;
line-height: 1;
padding: 0;
margin: 0;
`

export const StyledImage = styled(Img)`
    margin: 56px 0 0 0;
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
    @media (max-width: 555px) {
    height: 60vh;
}

 
`