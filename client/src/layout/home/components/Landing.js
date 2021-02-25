import React from 'react';
import Lottie from 'react-lottie';
import { makeStyles, Typography, Button } from '@material-ui/core';
import animationData from '../../../lotties/chattingAnimation.json';
import Navbar from './Navbar';

const useStyles = makeStyles((theme) => ({
	root: {},
	Landing: {
		display: 'flex',
		flexDirection: 'row-reverse',
		alignItems: 'center',
		'@media only screen and (max-width:62.5em)': {
			width: '100%',
			height: '75vh',
		},
	},
	textBox: {
		padding: theme.spacing(4),
		'@media only screen and (max-width:62.5em)': {
			width: '100%',
			textAlign: 'center',
		},
	},
	btn: {
		textTransform: 'none',
		marginTop:theme.spacing(2),
		color: 'inherit',
		borderRadius: theme.spacing(3),
		backgroundColor: theme.palette.primary[theme.palette.common.type],
		'&:hover':{
			backgroundColor:theme.palette.secondary.main
		}
	},
	lottie: {
		'@media only screen and (max-width:62.5em)': {
			display: 'none',
		},
	},
	paragraph: {
		'@media only screen and (max-width:62.5em)': {
			textAlign: 'left',
		},
	},
	header: {
		'@media only screen and (max-width:62.5em)': {
			textAlign: 'left',
		},
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
			<Navbar show></Navbar>
			<div className={classes.Landing}>
				<div className={classes.lottie}>
					<Lottie
						options={defaultOptions}
						height={550}
						width={550}
						style={{
							marginRight: '24px',
						}}
					/>
				</div>

				<div className={classes.textBox}>
					<Typography variant="h2" color="secondary" paragraph>
						Chatty
					</Typography>
					<Typography variant="h3" paragraph>
						Just Send An Invite
					</Typography>
					<Typography variant="h4" color="primary" className={classes.header}>
						Join the fastest growing Social Network
					</Typography>
					<div className={classes.paragraph}>
						<Typography variant="h5">
							With Chatty, messaging friends just go easier and better. You're
							just one invite away from communicating with friends and family
							around the World.Let's show you how.
						</Typography>
					</div>
					<Button variant="contained" className={classes.btn} href="/signUp">
						
						<Typography>Get Started</Typography>
					</Button>
				</div>
			</div>
		</div>
	);
};

export default Landing;
