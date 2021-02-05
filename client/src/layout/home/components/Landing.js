import React from 'react';
import Lottie from 'react-lottie';
import { makeStyles, Typography } from '@material-ui/core';
import animationData from '../../../lotties/chattingAnimation.json';
import Navbar from './Navbar';

const useStyles = makeStyles((theme) => ({
	root: {},
	Landing: {
		display: 'flex',
		flexDirection: 'row-reverse',
		alignItems: 'center',
	},
	textBox: {
		padding: theme.spacing(4),
	},
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
			<Navbar></Navbar>
			<div className={classes.Landing}>
				<Lottie
					options={defaultOptions}
					height={450}
					width={550}
					style={{ marginRight: '64px' }}
				/>
				<div className={classes.textBox}>
					<Typography variant="h3" color="secondary" paragraph>
						Chatty
					</Typography>
					<Typography variant="h2">Just Send An Invite</Typography>
				</div>
			</div>
		</div>
	);
};

export default Landing;
