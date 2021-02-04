import React from 'react';
import Lottie from 'react-lottie';
import { makeStyles, Typography } from '@material-ui/core';
import animationData from '../../../lotties/chattingAnimation.json';

const useStyles = makeStyles((theme) => ({
	root: {},
}));

const defaultOptions = {
	loop: true,
	autoplay: true,
	animationData: animationData,
	rendererSettings: {
		preserveAspectRatio: 'xMidYMid slice',
	},
};
const Landing = () => {
	const classes = useStyles();

	return (
		<div className={classes.root}>
			<Lottie options={defaultOptions} height={400} width={400} />
		</div>
	);
};

export default Landing;
