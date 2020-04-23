import React from "react"
import { Link } from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"
import Image5 from "../components/image5"
import StyledBackground from "../components/background"
import {Box, Grid, Button, Container, Divider, Typography} from "@material-ui/core"
import Resume from '../images/GA-Resume.pdf'
const ContactPage = () => (
	<Layout>
  		<StyledBackground>
  			<Box style={{"width":"100%", "height":"100vh", "paddingBottom":"50px","margin":"0 auto", "display":"flex","justifyContent":"center","alignContent":"center","alignItems":"center"}}>
  			<SEO title="Home" />
  			<Grid
   				container
   				direction="column"
   				justify="center"
   				alignContent="center"
   				alignItems="center"
   				style={{"backgroundColor":"rgba(26, 26, 24, 0)", "borderRadius":"10px", "maxWidth":"75vw", "margin":"5% auto"}}
   				spacing={3}
  			>
  				<Grid item xs={12}>
   					<div>
    					<Typography variant="h2"><span style={{"color":"white"}}>Contact Info</span></Typography>
    				</div>
    			</Grid>
    			<Grid item xs={12}>
          </Grid>
          <Grid item xs={12}>
            <Typography gutterBottom variant="h5" style={{"color":"white"}}>Email: cjburke04@gmail.com</Typography>
            <Typography gutterBottom variant="h5" style={{"color":"white"}}>LinkedIn: <a href="https://www.linkedin.com/in/christopher-james-burke/"target="_blank" rel="noopener norefferrer">here</a></Typography>
            <Typography gutterBottom variant="h5" style={{"color":"white"}}>Github: <a href="https://github.com/chris-jburke"target="_blank" rel="noopener norefferrer">here</a></Typography>
            <Typography gutterBottom variant="h5" style={{"color":"white"}}>Resume: <a href={Resume} download>here</a></Typography>
          </Grid>
    		</Grid>
    		</Box>
    	</StyledBackground>
    </Layout>
    
)
export default ContactPage