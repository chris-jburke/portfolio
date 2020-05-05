import React from "react"
import { Link, navigate } from "gatsby"
import {Box, Grid, Button, Container, Divider, Typography, useMediaQuery} from "@material-ui/core"
import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"
import StyledBackground from "../components/background"
import {blueGrey} from '@material-ui/core/colors'
import {withStyles} from '@material-ui/core/styles'

const WhiteButton = withStyles(theme => ({
    root: {
        color: 'rgba(255,255,255,1)',
        borderColor: blueGrey[50],
        minHeight: "50px",
        minWidth: "200px",
      },
}))(Button)
const LinkBehavior = React.forwardRef((props, ref) => (
  <Link ref={ref} to="/projects" {...props} />
))
const AboutBehavior = React.forwardRef((props, ref) => (
    <Link ref={ref} to="/about" {...props} />
))
const ContactBehavior = React.forwardRef((props, ref) => (
    <Link ref={ref} to="/contact" {...props} />
))
const IndexPage = () => {
  const smol = useMediaQuery('(max-width:375px')
  const handleProjectsClick = (e) => {
    e.preventDefault()
    navigate("/projects")
  } 
  const handleAboutClick = (e) => {
    e.preventDefault()
    navigate("/about")
  }
  const handleContactClick = (e) => {
    e.preventDefault()
    navigate("/contact")
  }
  return (
  <Layout>
  <StyledBackground>
  <Box style={{"width":"100%", "height":"100vh", "paddingTop":"10%", "paddingBottom":"30%", "margin":"0 auto","overflowY": "scroll","WebkitOverflowScrolling": "touch"}}>
  <Grid
    container
    direction="column" 
    justify="center"
    alignContent="center"
    alignItems="center"
    spacing={3}
    style={{"maxWidth":"75vw", "minWidth":"300px", "margin":"0 auto"}}
  >
    <Grid item xs={12} style={{"display":"flex","flexWrap":"wrap", "justifyContent":"center"}}>
      <Typography variant="h2" style={{"margin":"0 5px", "color":"white"}}>Christopher</Typography>
      <Typography variant="h2" style={{"margin":"0 5px", "color":"white"}}>Burke</Typography>
    </Grid>
    <Grid item xs={12} style={{"display":"flex","flexWrap":"wrap", "justifyContent":"center"}}>
      <Typography variant="h4" style={{"margin":"0 5px", "color":"white"}}>Full Stack</Typography>
      <Typography variant="h4" style={{"margin":"0 5px", "color":"white"}}>Engineer</Typography>
    </Grid>
    <Grid item xs={12} style={{"display":"flex","flexWrap":"wrap", "justifyContent":"center"}}>
      <Typography variant="h6" style={{"marginRight":"5px","color":"white"}}>Javascript, Typescript, Go, </Typography>
      <Typography variant="h6" style={{"marginRight":"5px", "color":"white"}}>Python, React.js, Node.js, </Typography>
      <Typography variant="h6" style={{"color":"white"}}>PostgresQL, MongoDB</Typography>
    </Grid>
    <Grid item xs={12}>
      <Typography gutterBottom variant="body1" style={{"marginLeft":"15px", "color":"white"}}>I am a motivated recent General Assembly and Computer Science (B.S.) graduate who is highly proficient in solving front-end development problems using industry standard tools including React with Hooks, Javascript, Typescript, and Node.js. My passion for front-end development comes from my love of learning new tools and using those tools to build awesome products.</Typography>
    </Grid> 
  </Grid>
  </Box>
  </StyledBackground>
  </Layout>
  )
}

export default IndexPage
