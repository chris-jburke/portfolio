import React from "react"
import { Link } from "gatsby"
import Image from "../components/image"
import Image2 from "../components/image2"
import Image3 from "../components/image3"
import Image4 from "../components/image4"
import Layout from "../components/layout"
import SEO from "../components/seo"
import Carousel from "../components/carousel"
import Marousel from "../components/marousel"
import StyledBackground from "../components/background"
import {Box, Grid, Button, Container, Divider, Typography} from "@material-ui/core"


const ProjectsPage = () => (
	<Layout>
  	<StyledBackground>
  	<SEO title="Project Page" />
  	<Box style={{"width":"100%", "margin":"0 auto","height":"100vh", "overflow-y": "scroll","WebkitOverflowScrolling": "touch"
}}>
   		<Grid
   			container
   			direction="column"
   			justify="center"
   			alignContent="center"
   			alignItems="center"
   			style={{"backgroundColor":"rgba(26, 26, 24, 1)", "borderRadius":"10px", "maxWidth":"75vw", "margin":"5% auto"}}
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
                    spacing={2}

    			>
    				<Grid  style={{"display":"flex","justifyContent":"center"}} item lg={4} xs={12}>
    					<Carousel />
    				</Grid>
    				<Grid style={{"display":"flex","justifyContent":"center","alignItems":"center"}}item lg={4} xs={12}>
    					<Typography variant="body1">
    						<h3 style={{"color":"white"}}>Elm Prints</h3>
    						<span style={{"color":"white"}}>MERN stack E-commerce application where users can buy posters/prints of movie posters and artwork. This is a decoupled app built using Node.js with Express, Mongodb and Mongoose, React with Typescript and Material-UI. Deployed on Heroku. </span>
    						<br />
    						<br />
    						<span style={{"color":"white"}}>Link to Elm Prints: </span><a href="http://elmprints.herokuapp.com/">here</a>
    					</Typography>
    				</Grid>
    			</Grid>
    		</Grid>
    		<Grid item xs={12}>
    			<Divider />
    		</Grid>
    		<Grid item xs={12}>
    			<Grid
    				container
    				justify="center"
                    spacing={2}

    			>
    				<Grid  style={{"display":"flex","justifyContent":"center"}} item lg={4} xs={12}>
    					<Marousel />
    				</Grid>
    				<Grid style={{"display":"flex","justifyContent":"center","alignItems":"center"}}item lg={4} xs={12}>
    					<Typography variant="body1">
    						<h3 style={{"color":"white"}}>Martian Terraforming</h3>
    						<span style={{"color":"white"}}>A science fiction themed idle clicker game where players can develop a Martian colony. This app is built using a Go backend which uses Gin as a routing framework and Gorm as an ORM. The front end is built using React (with Hooks). Deployed on Heroku.</span>
    						<br />
    						<br />
    						<span style={{"color":"white"}}>Link to Martian Terraforming: </span><a href="http://mars-colony-game.herokuapp.com/">here</a>
    					</Typography>
    				</Grid>
    			</Grid>
    		</Grid>
    		<Grid item xs={12}>
    			<Grid
    				container
    				justify="center"
                    spacing={2}
    			>
    				<Grid  style={{"display":"flex","justifyContent":"center"}} item lg={4} xs={12}>
    					<Image3 />
    				</Grid>
    				<Grid style={{"display":"flex","justifyContent":"center","alignItems":"center"}}item lg={4} xs={12}>
    					<Typography variant="body1">
    						<h3 style={{"color":"white"}}>Lord of Stars</h3>
    						<span style={{"color":"white"}}>An MVC framework chat application that only allow users to chat using moving quotes from the Lord of the Rings. Built using Node.js with Express, Sequelize, EJS, web sockets, and the Lord of the Rings API. Deployed on Heroku.</span>
    						<br />
    						<br />
    						<span style={{"color":"white"}}>Link to Lord of Stars: </span><a href="http://lord-of-stars.herokuapp.com/">here</a>
    					</Typography>
    				</Grid>
    			</Grid>
    		</Grid>
            <Grid item xs={12}>
                <Grid
                    container
                    justify="center"
                    spacing={2}
                >
                    <Grid  style={{"display":"flex","justifyContent":"center"}} item lg={4} xs={12}>
                        <Image4 />
                    </Grid>
                    <Grid style={{"display":"flex","justifyContent":"center","alignItems":"center"}}item lg={4} xs={12}>
                        <Typography variant="body1">
                            <h3 style={{"color":"white"}}>Checkers</h3>
                            <span style={{"color":"white"}}>This is a fully front-end web application where two players can play a game of American Checkers. Built using vanilla Javascript, CSS, and HTML. Deployed on Github.</span>
                            <br />
                            <span style={{"color":"white"}}>Link to Checkers: </span><a href="https://chris-jburke.github.io/project1-checkers/">here</a>
                        </Typography>
                    </Grid>
                </Grid>
            </Grid>
    	</Grid>
    </Box>
    </StyledBackground>
    </Layout>
)

export default ProjectsPage
