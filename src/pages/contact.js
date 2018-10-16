import React from 'react'
import { Link, graphql } from 'gatsby'
import styled from "styled-components"
import Layout from '../components/layout'



const FlexMain = styled.div`
  margin: 3rem 2rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  max-width: 1080;
  min-height: 90vh;
`

const Content = styled.div`
  align-items: center;
  min-width: 300px;
  margin: 0 auto 12px auto;
`
const TextInput = styled.input`
    width: 100%; /* Full width */
    padding: 12px; /* Some padding */ 
    border: 1px solid #ccc; /* Gray border */
    border-radius: 4px; /* Rounded borders */
    box-sizing: border-box; /* Make sure that padding and width stays in place */
    margin-top: 6px; /* Add a top margin */
    margin-bottom: 16px; /* Bottom margin */
}
`
const TextArea = styled.textarea`
width: 100%; /* Full width */
padding: 12px; /* Some padding */ 
border: 1px solid #ccc; /* Gray border */
border-radius: 4px; /* Rounded borders */
box-sizing: border-box; /* Make sure that padding and width stays in place */
margin-top: 6px; /* Add a top margin */
margin-bottom: 16px; /* Bottom margin */
resize: vertical /* Allow the user to vertically resize the textarea (not horizontally) */
`
const SubmitInput = styled.button`
    font-size: 1.5em;
    background-color: #FF4136;
    color: white;
    padding: 12px 20px;
    border: none;
    cursor: pointer;
    transition: 0.2s;
    &:hover {
        background: #2a0800;
`




export default () => (
 <Layout>
    <FlexMain>
    <Content>
        <h1>Interested in hiring me?</h1>
        <h3>Talk to me at:</h3>
        <p>email: danielpbdesign@gmail.com</p>
        <p>phone: 022 078 0868</p>
        <p>or leave a message.</p>
    </Content>
    
    <Content>
        <h3>Contact Form</h3>
        <form>

        <label for="name">Name*</label>
        <TextInput type="text" id="name" name="name"  required></TextInput>

        <label for="email">Email*</label>
        <TextInput type="email" id="email" name="email"  required></TextInput>

        <label for="subject">Message*</label>
        <TextArea id="message" name="message" placeholder="Your project details or when to meet?"  required></TextArea>
        <br></br>
        <SubmitInput type="submit" value="Submit">Send</SubmitInput>
    </form>
    </Content>
   
    
  </FlexMain>
  </Layout>
)