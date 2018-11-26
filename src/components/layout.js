import React, { Component } from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'
import { StaticQuery, graphql } from 'gatsby'

import Toolbar from './toolbar'
import SideDrawer from './SideDrawer/SideDrawer'
import Backdrop from './Backdrop/Backdrop'
import Footer from './footer'
import './layout.css'


export default class Layout extends React.Component {
    state = {
        sideDrawerOpen: false 
    };
    
    drawerToggleClickHandler = () => {
     this.setState((prevState)=> {
         return{sideDrawerOpen: !prevState.sideDrawerOpen};
     });
    };

    backdropClickHandler = () => {
        this.setState({sideDrawerOpen: false});
    };

    render() {
      const { children } = this.props;
      
      let backdrop;

      if(this.state.sideDrawerOpen){
          backdrop = <Backdrop click={this.backdropClickHandler}/>;
      }
      return (
        <>
        <Helmet
          title={this.props.title}
          meta={[
            { name: 'description', content: 'Sample' },
            { name: 'keywords', content: 'sample, something' },
          ]}
        >
          <html lang="en" />
        </Helmet>
        
        <Toolbar drawerClickHandler={this.drawerToggleClickHandler}/>
        <SideDrawer show={this.state.sideDrawerOpen}/>
        {backdrop}
       
          <div style={{minHeight: "100vh"}}>
            
            {children}
          </div>
        <Footer/>
        
          </>
      );
    }
  }












    



