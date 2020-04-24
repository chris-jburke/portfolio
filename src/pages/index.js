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
  smol === false ? 
  <Layout>
  <StyledBackground>
  <Box style={{"width":"100%", "height":"100vh", "paddingTop":"50%", "paddingBottom":"50%", "margin":"0 auto", "display":"flex","justifyContent":"center","alignContent":"center","alignItems":"center", "overflowY": "scroll","WebkitOverflowScrolling": "touch"}}>
  <SEO title="Home" />
  <Grid
    container
    direction="column" 
    justify="center"
    alignContent="center"
    alignItems="center"
    spacing={3}
    style={{"maxWidth":"75vw", "minWidth":"320px"}}
  >
    <Grid item xs={12} style={{"display":"flex","flexWrap":"wrap", "justifyContent":"center"}}>
      <Typography variant="h2" style={{"margin":"0 5px", "color":"white"}}>Christopher</Typography>
      <Typography variant="h2" style={{"margin":"0 5px", "color":"white"}}>Burke</Typography>
    </Grid>
    <Grid item xs={12} style={{"display":"flex","flexWrap":"wrap", "justifyContent":"center"}}>
      <Typography variant="h4" style={{"margin":"0 5px", "color":"white"}}>React</Typography>
      <Typography variant="h4" style={{"margin":"0 5px", "color":"white"}}>Developer</Typography>
    </Grid>
    <Grid item xs={12}>
      <Typography gutterBottom variant="body1" style={{"marginLeft":"15px", "color":"white"}}>I am a motivated recent General Assembly and Computer Science (B.S.) graduate who is highly proficient in solving front-end development problems using industry standard tools including React with Hooks, Javascript, Typescript, and Node.js. My passion for front-end development comes from my love of learning new tools and using those tools to build awesome products.</Typography>
    </Grid>
    <Grid item xs={12}>
    
    <Grid
      container
      justify="space-around"
      style={{"textAlign":"center","width":"100%", "marginBottom":"20px"}}
    >
      <Grid style={{"textAlign":"center","width":"100%"}} item md={4} xs={12} >
        <WhiteButton variant="outlined" onClick={(e) => handleProjectsClick(e)}>
          Projects
        </WhiteButton>
      </Grid>
      <Grid style={{"textAlign":"center","width":"100%"}} item md={4} xs={12}>
        <WhiteButton variant="outlined" onClick={(e) => handleAboutClick(e)}>
          About Me
        </WhiteButton>
      </Grid>
      <Grid item md={4} xs={12}>
        <WhiteButton variant="outlined" onClick={(e) => handleContactClick(e)}>
          Contact
        </WhiteButton>
      </Grid>
    </Grid>
     </Grid>   
  </Grid>
  </Box>
  </StyledBackground>
  </Layout>
  :
  <Layout>
  <StyledBackground>
  <Box style={{"width":"100%", "height":"100vh", "paddingTop":"100%", "paddingBottom":"30%", "margin":"0 auto", "display":"flex","justifyContent":"center","alignContent":"center","alignItems":"center", "overflowY": "scroll","WebkitOverflowScrolling": "touch"}}>
  <SEO title="Home" />
  <Grid
    container
    direction="column" 
    justify="center"
    alignContent="center"
    alignItems="center"
    spacing={3}
    style={{"maxWidth":"75vw", "minWidth":"320px"}}
  >
    <Grid item xs={12} style={{"display":"flex","flexWrap":"wrap", "justifyContent":"center"}}>
      <Typography variant="h2" style={{"margin":"0 5px", "color":"white"}}>Christopher</Typography>
      <Typography variant="h2" style={{"margin":"0 5px", "color":"white"}}>Burke</Typography>
    </Grid>
    <Grid item xs={12} style={{"display":"flex","flexWrap":"wrap", "justifyContent":"center"}}>
      <Typography variant="h4" style={{"margin":"0 5px", "color":"white"}}>React</Typography>
      <Typography variant="h4" style={{"margin":"0 5px", "color":"white"}}>Developer</Typography>
    </Grid>
    <Grid item xs={12}>
      <Typography gutterBottom variant="body1" style={{"marginLeft":"15px", "color":"white"}}>I am a motivated recent General Assembly and Computer Science (B.S.) graduate who is highly proficient in solving front-end development problems using industry standard tools including React with Hooks, Javascript, Typescript, and Node.js. My passion for front-end development comes from my love of learning new tools and using those tools to build awesome products.</Typography>
    </Grid>
    <Grid item xs={12}>
    
    <Grid
      container
      justify="space-around"
      style={{"textAlign":"center","width":"100%", "marginBottom":"20px"}}
    >
      <Grid style={{"textAlign":"center","width":"100%"}} item md={4} xs={12} >
        <WhiteButton variant="outlined" onClick={(e) => handleProjectsClick(e)}>
          Projects
        </WhiteButton>
      </Grid>
      <Grid style={{"textAlign":"center","width":"100%"}} item md={4} xs={12}>
        <WhiteButton variant="outlined" onClick={(e) => handleAboutClick(e)}>
          About Me
        </WhiteButton>
      </Grid>
      <Grid item md={4} xs={12}>
        <WhiteButton variant="outlined" onClick={(e) => handleContactClick(e)}>
          Contact
        </WhiteButton>
      </Grid>
    </Grid>
     </Grid>   
  </Grid>
  </Box>
  </StyledBackground>
  </Layout>
  )
}

export default IndexPage
