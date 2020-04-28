import React from "react"
import { Link } from "gatsby"
import Image from "../components/image"
import Image2 from "../components/image2"
import Image3 from "../components/image3"
import Image4 from "../components/image4"
import Layout from "../components/layout"
import Carousel from "../components/carousel"
import Marousel from "../components/marousel"
import StyledBackground from "../components/background"
import {Box, Grid, Button, Container, Divider, Typography} from "@material-ui/core"
import {blueGrey} from '@material-ui/core/colors'
import {withStyles} from '@material-ui/core/styles'
//"rgba(26, 26, 24, 1)"
const WhiteButton = withStyles(theme => ({
    root: {
        color: 'rgba(255,255,255,1)',
        borderColor: blueGrey[50],
      },
}))(Button)
const ProjectsPage = () => (
	<Layout>
  	<StyledBackground>
  	<Box style={{"margin":"0 auto", "width":"100%","height":"100%", "paddingBottom":"120px", "overflowX":"hidden", "overflowY": "scroll","WebkitOverflowScrolling": "touch"}}>
   		<Grid
   			container
   			direction="column"
   			justify="center"
   			alignContent="center"
   			alignItems="center"
   			style={{"maxWidth":"90vw","minWidth":"320px", "margin":"0 auto"}}
   			spacing={3}
   		>
   			<Grid item xs={12}>
   				<div>
    				<Typography variant="h2"><span style={{"color":"white"}}>Projects</span></Typography>
    			</div>
    		</Grid>
    		<Grid item xs={12}>
    		</Grid>
    		<Grid item xs={12}>
    			<Grid
    				container
    				justify="center"
                    spacing={5}

    			>
    				<Grid  style={{"display":"flex","justifyContent":"center"}} item lg={4} xs={12}>
    					<Carousel />
    				</Grid>
    				<Grid style={{"display":"flex","justifyContent":"center","alignItems":"center"}}item lg={4} xs={12}>
    					<Box >
    						<Typography style={{"marginBottom":"10px"}}variant="h3"><span style={{"color":"white"}}>Elm Prints</span></Typography>
    						<Typography variant="body1" style={{"color":"white"}}>MERN stack E-commerce application where users can buy posters/prints of movie posters and artwork. This is a decoupled app built using Node.js with Express, Mongodb and Mongoose, React with Typescript and Material-UI. Deployed on Heroku. </Typography>
    						<Typography variant="body1"><span style={{"color":"white"}}>Link to Elm Prints: </span><WhiteButton variant="outlined" size="small" href="http://elmprints.herokuapp.com/" target="_blank" rel="noopener norefferrer">here</WhiteButton></Typography>
                            <Typography variant="body1"><span style={{"color":"white"}}>Link to the Github: </span><WhiteButton variant="outlined" size="small" href="https://github.com/chris-jburke/elmprints" target="_blank" rel="noopener norefferrer">here</WhiteButton></Typography>
    					</Box>
    				</Grid>
    			</Grid>
    		</Grid>
    		<Grid item xs={12}>
    			<Grid
    				container
    				justify="center"
                    spacing={5}

    			>
    				<Grid  style={{"display":"flex","justifyContent":"center"}} item lg={4} xs={12}>
    					<Marousel />
    				</Grid>
    				<Grid style={{"display":"flex","justifyContent":"center","alignItems":"center"}}item lg={4} xs={12}>
    					<Box>
    						<Typography variant="h3" style={{"marginBottom":"10px"}}><span style={{"color":"white"}}>Martian Terraforming</span></Typography>
    						<Typography variant="body1"><span style={{"color":"white"}}>A science fiction themed idle clicker game where players can develop a Martian colony. This app is built using a Go backend which uses Gin as a routing framework and Gorm as an ORM. The front end is built using React (with Hooks). Deployed on Heroku.</span></Typography>
                            <Typography variant="body1"><span style={{"color":"white"}}>Link to Martian Terraforming: </span><WhiteButton variant="outlined" size="small" href="http://mars-colony-game.herokuapp.com/" target="_blank" rel="noopener norefferrer">here</WhiteButton></Typography>
    						<Typography variant="body1"><span style={{"color":"white"}}>Link to the Github: </span><WhiteButton variant="outlined" size="small" href="https://github.com/chris-jburke/mars-colony-game" target="_blank" rel="noopener norefferrer">here</WhiteButton></Typography>
    					</Box>
    				</Grid>
    			</Grid>
    		</Grid>
    		<Grid item xs={12}>
    			<Grid
    				container
    				justify="center"
                    spacing={5}
    			>
    				<Grid  style={{"display":"flex","justifyContent":"center"}} item lg={4} xs={12}>
    					<Image3 />
    				</Grid>
    				<Grid style={{"display":"flex","justifyContent":"center","alignItems":"center"}}item lg={4} xs={12}>
    					<Box>
    						<Typography variant="h3" style={{"marginBottom":"10px"}}><span style={{"color":"white"}}>Lord of Stars</span></Typography>
    						<Typography variant="body1"><span style={{"color":"white"}}>An MVC framework chat application that only allow users to chat using moving quotes from the Lord of the Rings. Built using Node.js with Express, Sequelize, EJS, web sockets, and the Lord of the Rings API. Deployed on Heroku.</span></Typography>
    						<Typography variant="body1"><span style={{"color":"white"}}>Link to Lord of Stars: </span><WhiteButton variant="outlined" size="small" href="http://lord-of-stars.herokuapp.com/" target="_blank" rel="noopener norefferrer">here</WhiteButton></Typography>
                            <Typography variant="body1"><span style={{"color":"white"}}>Link to the Github: </span><WhiteButton variant="outlined" size="small" href="https://github.com/chris-jburke/project2-lord-of-stars" target="_blank" rel="noopener norefferrer">here</WhiteButton></Typography>    					
                        </Box>
    				</Grid>
    			</Grid>
    		</Grid>
            <Grid item xs={12}>
                <Grid
                    container
                    justify="center"
                    spacing={5}
                >
                    <Grid  style={{"display":"flex","justifyContent":"center"}} item lg={4} xs={12}>
                        <Image4 />
                    </Grid>
                    <Grid style={{"display":"flex","justifyContent":"center","alignItems":"center"}}item lg={4} xs={12}>
                        <Box>
                            <Typography variant="h3" style={{"marginBottom":"10px"}}><span style={{"color":"white"}}>Checkers</span></Typography>
                            <Typography variant="body1"><span style={{"color":"white"}}>This is a fully front-end web application where two players can play a game of American Checkers. Built using vanilla Javascript, CSS, and HTML. Deployed on Github.</span></Typography>                          
                            <Typography variant="body1"><span style={{"color":"white"}}>Link to Checkers: </span><WhiteButton variant="outlined" size="small" href="https://chris-jburke.github.io/project1-checkers/" target="_blank" rel="noopener norefferrer">here</WhiteButton></Typography>
                            <Typography variant="body1"><span style={{"color":"white"}}>Link to the Github: </span><WhiteButton variant="outlined" size="small" href="https://github.com/chris-jburke/project1-checkers" target="_blank" rel="noopener norefferrer">here</WhiteButton></Typography>                            
                        </Box>
                    </Grid>
                </Grid>
            </Grid>
    	</Grid>
    </Box>
    </StyledBackground>
    </Layout>
)

export default ProjectsPage
