import React from "react"
import { Link } from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"
import Image5 from "../components/image5"
import StyledBackground from "../components/background"
import {Box, Grid, Button, Container, Divider, Typography} from "@material-ui/core"
import Resume from '../images/Resume-One-Page.pdf'
import {blueGrey} from '@material-ui/core/colors'
import {withStyles} from '@material-ui/core/styles'
const WhiteButton = withStyles(theme => ({
    root: {
        color: 'rgba(255,255,255,1)',
        borderColor: blueGrey[50],
      },
}))(Button)
const AboutPage = () => (
	<Layout>
  		<StyledBackground>
  			<Box style={{"width":"100%","height":"100vh", "paddingTop":"7%", "paddingBottom":"50px", "margin":"0 auto","overflowY": "scroll","WebkitOverflowScrolling": "touch"}}>
  			<SEO title="Home" />
  			<Grid
   				container
   				direction="column"
   				justify="center"
   				alignContent="center"
   				alignItems="center"
   				style={{"backgroundColor":"rgba(26, 26, 24,0)","maxWidth":"75vw", "minWidth":"320px", "margin":"0 auto"}}
   				spacing={3}
  			>
  				<Grid item xs={12}>
   					<div>
    					<Typography variant="h2"><span style={{"color":"white"}}>About Me</span></Typography>
    				</div>
    			</Grid>
    			<Grid item xs={12}>
    				<Grid container>
    			    	<Grid style={{"textAlign":"center"}}item md={6} xs={12}>
    						<Image5 />
    					</Grid>
    					<Grid item md={6} xs={12}>
    						<Typography gutterBottom variant="h5" style={{"color":"white"}}>Christopher Burke</Typography>
    						<Typography gutterBottom variant="body1" style={{"color":"white"}}>Hi! I am a full stack developer who recently graduated from General Assembly.</Typography>
    						<Typography gutterBottom variant="body1" style={{"color":"white"}}>I specialize in React (with Hooks) front-ends as well as Express.js, Golang, and Python backends.</Typography>
    						<Typography gutterBottom variant="body1" style={{"color":"white"}}>I have experience using Postgresql and MongoDB databases.</Typography>
    						<Typography gutterBottom variant="body1" style={{"color":"white"}}>I also have a Computer Science (B.S.) from University of Calfornia, Santa Cruz.</Typography>
    						<Typography gutterBottom variant="body1" style={{"color":"white"}}>I graduated with Honors and a culmulative GPA of 3.58.</Typography>
                <Typography gutterBottom variant="body1" style={{"color":"white"}}>Download my resume: <WhiteButton variant="outlined" size="small" href={Resume} style={{"color":"white"}} download>here</WhiteButton></Typography>
    					</Grid>
    				</Grid>
    			</Grid>
    		</Grid>
    		</Box>
    	</StyledBackground>
    </Layout>
    
)
export default AboutPage