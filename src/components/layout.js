import React, { Component } from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'
import { StaticQuery, graphql } from 'gatsby'

import Toolbar from './toolbar'
import SideDrawer from './SideDrawer/SideDrawer'
import Backdrop from './Backdrop/Backdrop'
import Header from './header'
import Footer from './footer'
import './layout.css'

const Layout = ({ children }) => (
   
  <StaticQuery
    query={graphql`
      query SiteTitleQuery {
        site {
          siteMetadata {
            title
          }
        }
      }
    `}
    render={data => (
      <>
        <Helmet
          title={data.site.siteMetadata.title}
          meta={[
            { name: 'description', content: 'Sample' },
            { name: 'keywords', content: 'sample, something' },
          ]}
        >
          <html lang="en" />
        </Helmet>

          <Toolbar/>
          <SideDrawer/>
          <Backdrop/>
        {/* <Header/> */}
        <div>
          {children}
        </div>
        <Footer/>
      </>
    )}
  />
)

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}




export default Layout












// class App extends Component {
//     state = {
//         sideDrawerOpen = false 
//     };
    
//     drawerToggleClickHandler = () => {
//      this.setState();
//     };


// ;}
