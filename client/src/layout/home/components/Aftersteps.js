import React from 'react';
import { makeStyles, Grid } from '@material-ui/core';
import animationData from '../../../lotties/growthAnimation.json';
import Lottie from 'react-lottie';

const useStyles = makeStyles({
	root: {
		width: '100%',
	},
});

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
			<Grid container alignItems="center">
				<Grid item md={6} lg={6}></Grid>
				<Grid item md={6} lg={6}>
					<Lottie options={defaultOptions} height={450} width={550} />
				</Grid>
			</Grid>
		</div>
	);
};

export default Aftersteps;
