/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"
import StyledBackground from "../components/background"
import Header from "./header"
import "./layout.css"

const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  return (
    <>
      <Header siteTitle={data.site.siteMetadata.title} />
        <main>{children}</main>
        <footer style={{"marginTop":"-20px"}}>
          <span style={{"color":"purple", "fontSize":".75em"}}>© {new Date().getFullYear()}, Built with</span> <a href="https://www.gatsbyjs.org"><span style={{"color":"purple", "fontSize":".8em"}}>Gatsby</span></a>
          {` `}
          <div style={{"marginTop":"-22px", "width":"100%","display":"flex","justifyContent":"flex-end"}}>
          <div>
          <span style={{"color":"purple", "fontSize":".8em"}}>Background vector created by alicia_mb - www.freepik.com</span>
          </div>
          </div>
        </footer>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
