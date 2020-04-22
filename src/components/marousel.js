import React from 'react'
import {makeStyles, useTheme, withStyles} from '@material-ui/core/styles'
import {MobileStepper, Paper, Typography, Button} from '@material-ui/core'
import { useStaticQuery, graphql } from "gatsby"
import Marsimg1 from './marsimg1'
import Marsimg2 from './marsimg2'
import Marsimg3 from './marsimg3'


const steps = [<Marsimg1 />, <Marsimg2 />]
const useStyles = makeStyles((theme) => ({
	root: {
		maxWidth: 320,
		flexGrow: 1,
	},
	header:{
		display: "flex",
		alignItems: "center",
		height: 50,
		color: "white",
		paddingLeft: theme.spacing(1),
		backgroundColor: 'rgba(0,0,0,1)'
	},
	img: {
		width:320,
		overflow: "hidden",
		display: "block",
	}
	
}))
const WhiteButton = withStyles(theme => ({
	root: {
        color: 'rgba(255,255,255,1)',
        borderColor: 'rgba(255,255,255,1)',
      },
}))(Button)



export default function Marousel() {
	const classes = useStyles()
	const theme = useTheme()
	const [activeStep, setActiveStep] = React.useState(0)
	const maxSteps = steps.length

	const handleNext = () => {
		setActiveStep((prevActiveStep) => prevActiveStep + 1)
	}
	const handleBack = () => {
		setActiveStep((prevActiveStep) => prevActiveStep - 1)
	}
	return (
		<div className={classes.root}>
			{steps[activeStep]}
			<MobileStepper
				style={{"marginTop":"-7px"}}
				className={classes.header}
				steps={maxSteps}
				position="static"
				variant="text"
				activeStep={activeStep}
				nextButton={
					<WhiteButton variant="outlined" size="small" onClick={handleNext} disabled={activeStep === maxSteps - 1}>
						Next
					</WhiteButton>
				}
				backButton={
					<WhiteButton variant="outlined" size="small" onClick={handleBack} disabled={activeStep === 0}>
						Back
					</WhiteButton>
				}
			/>
		</div>
	)
}