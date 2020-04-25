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
import {Box} from '@material-ui/core'
import Helmet from "react-helmet"

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
      <Helmet>
        <title>Home | Christopher Burke's Portfolio</title>
        <meta name="title" content="Home | Christopher Burke's Portfolio" />
        <meta name="description" content="This site showcases the projects worked on by me, Christopher Burke during my time at General Assembly" />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://christopherburke.netlify.app/" />
        <meta property="og:title" content="Home | Christopher Burke's Portfolio" />
        <meta property="og:description" content="This site showcases the projects worked on by me, Christopher Burke during my time at General Assembly" />
        <meta property="og:image" content="https://christopherburke.netlify.app/static/portfolio-preview-best-4d8bdf7dbc72c522d37ad67dddf424cf.jpg" />
        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:url" content="https://christopherburke.netlify.app/" />
        <meta property="twitter:title" content="Home | Christopher Burke's Portfolio" />
        <meta property="twitter:description" content="This site showcases the projects worked on by me, Christopher Burke during my time at General Assembly" />
        <meta property="twitter:image" content="https://christopherburke.netlify.app/static/portfolio-preview-best-4d8bdf7dbc72c522d37ad67dddf424cf.jpg" />        
      </Helmet>
      <Header siteTitle={data.site.siteMetadata.title} />
      <main>{children}</main>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
