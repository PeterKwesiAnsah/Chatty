import React from 'react';
import { makeStyles, Grid, Typography } from '@material-ui/core';
import animationData from '../../../lotties/growthAnimation.json';
import Lottie from 'react-lottie';


const useStyles = makeStyles((theme) => ({
	root: {
		width: '100%',
        padding: theme.spacing(8)
    }
}));

const defaultOptions = {
	loop: true,
	autoplay: true,
	animationData: animationData,
	rendererSettings: {
		preserveAspectRatio: 'xMidYMid slice',
	},
};

const Aftersteps = () => {
	const classes = useStyles();
	return (
		<div className={classes.root}>
			<Grid container alignItems="center" spacing={1}>
				<Grid item xs={12} sm={12} md={6} lg={6}>
					<Typography variant="h2" color="secondary">
						Be the First
					</Typography>
					<Typography variant="h3">To Tell your Friends!.</Typography>
				</Grid>
				<Grid item  xs={12} sm={12} md={6} lg={6}>
					<Lottie options={defaultOptions} height={350} width={350} />
				</Grid>
			</Grid>  
		</div>
	);
};

export default Aftersteps;
