import { Link, Redirect } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import {makeStyles} from '@material-ui/core/styles'
import {Tabs, Tab, Typography, Box, AppBar, Button} from '@material-ui/core'

function TabPanel(props) {
	const {children, value, index, ...other} = props
	return (
		<Typography
			component="div"
			role="tabpanel"
			hidden={value !== index}
			id={`nav-tabpanel-${index}`}
			aria-labelledby={`nav-tab-${index}`}
			{...other}
		>
			{value === index && <Box p={3}>{children}</Box>}
		</Typography>
	)

}
TabPanel.propTypes = {
	children: PropTypes.node,
	index: PropTypes.any.isRequired,
	value: PropTypes.any.isRequired,
}
function a11yProps(index){
	return {
		id: `nav-tab-${index}`,
		'aria-controls':`nav-tabpanel-${index}`
	}
}
const LinkProjects = React.forwardRef((props, ref) => (
    <Link ref={ref} to="/projects" {...props} />
))
const LinkAbout = React.forwardRef((props, ref) => (
    <Link ref={ref} to="/about" {...props} />
))
const LinkContact = React.forwardRef((props, ref) => (
    <Link ref={ref} to="/contact" {...props} />
))
const LinkHome = React.forwardRef((props, ref) => (
    <Link ref={ref} to="/" {...props} />
))

function LinkTab(props){
	console.log(props)
	if(props.href === "/projects") {
		return (
			<Tab
				component={LinkProjects}
				{...props}
			/>
		)
	} else if(props.href === "/about"){
		return(
			<Tab
				component={LinkAbout}
				{...props}
			/>
		)
	} else if(props.href === "/contact"){
		return (
			<Tab
				component={LinkContact}
				{...props}
			/>
		)
	} else {
		return (
			<Tab
				component={LinkHome}
				{...props}
			/>
		)
	}
}
const useStyles = makeStyles((theme) => ({
	root: {
		flexGrow: 1,
		backgroundColor: 'rgba(255,255,255,1)',
	},
}))
function NavTabs(){
	const classes = useStyles()
	const [value, setValue] = React.useState(0)
	const handleChange = (event, newValue) => {
		setValue(newValue)
	}
	return (
		<div className={classes.root}>
			<AppBar position="static" style={{"backgroundColor":"rgba(0,0,0,1)"}}>
				<Tabs
					variant="fullWidth"
					value={value}
					onChange={handleChange}
					aria-label="nav tabs portfolio"
				>
					<LinkTab label="Home" href="/" {...a11yProps(0)} />
					<LinkTab label="Projects" href="/projects" {...a11yProps(1)} />
					<LinkTab label="About" href="/about" {...a11yProps(2)} />
					<LinkTab label="Contact" href="/contact" {...a11yProps(3)} />
				</Tabs>
			</AppBar>
		</div>
	)
}

const Header = ({ siteTitle }) => (
	<NavTabs />
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
