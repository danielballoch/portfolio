import React from 'react'
import { Link, graphql } from 'gatsby'
import styled from "styled-components"
import Layout from '../components/layout'
import {FlexMain2, Content} from '../components/style'




const TextInput = styled.input`
    width: 100%; /* Full width */
    padding: 12px; /* Some padding */ 
    border: 1px solid #ccc; /* Gray border */
    border-radius: 4px; /* Rounded borders */
    box-sizing: border-box; /* Make sure that padding and width stays in place */
    margin-top: 6px; /* Add a top margin */
    margin-bottom: 16px; /* Bottom margin */
    
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
    font-family: "Helvetica Neue", Helvetica, "Segoe UI";
    /* background-color: #FF4136; */
    background-color: #528bbc;
    color: white;
    padding: 12px 20px;
    border: none;
    cursor: pointer;
    transition: 0.2s;
    &:hover {
        background-color: #36648b;
        /* background: #2a0800; */
`
const Label = styled.label`

`




export default () => (
 <Layout>
    <FlexMain2>
    <Content>
        <h1>Interested in hiring me?</h1>
        <h3>Contact below to arrange a meeting or get a project quote:</h3>
        <a href="mailto:danielpbdesign@gmail.com" rel="nofollow">Email: danielpbdesign@gmail.com</a>
        <br/>
        <a href="tel:022-078-0868">Phone: (+64) 022 078 0868</a>
        
    </Content>
    
    <Content>
    <hr/>
        <h3>Contact Form</h3>
        <form name="contact" method="post" data-netlify="true" data-netlify-honeypot="bot-field" action="/success">
        <input type="hidden" name="form-name" value="contact"/>

        <Label for="name">Name:</Label>
        <TextInput type="text" id="name" name="name"  required></TextInput>

        <Label for="email">Email:</Label>
        <TextInput type="email" id="email" name="email"  required></TextInput>

        <Label for="subject">Message:</Label>
        <TextArea id="message" name="message" placeholder="Your project details or when to meet?"  required></TextArea>
        <br></br>
        <SubmitInput type="submit" value="Submit">Send</SubmitInput>
    </form>
    </Content>
   
    
  </FlexMain2>
  </Layout>
)