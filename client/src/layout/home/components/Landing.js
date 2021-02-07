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
		marginTop: theme.spacing(4),
	},
	textBox: {
		padding: theme.spacing(4),
	},
	btn: {
		textTransform: 'none',
		marginLeft: theme.spacing(3),
		color: 'inherit',
		borderRadius: theme.spacing(3),
		backgroundColor: theme.palette.primary.dark,
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
					height={550}
					width={550}
					style={{ marginRight: '64px' }}
				/>
				<div className={classes.textBox}>
					<Typography variant="h2" color="secondary" paragraph>
						Chatty
					</Typography>
					<Typography variant="h3" paragraph>
						Just Send An Invite
					</Typography>
					<Typography variant="h4" color="primary">
						Join the fastest growing Social Network
					</Typography>
					<div className={classes.paragraph}>
						<Typography variant="h5">
							With Chatty,messaging friends just go easier and better.<br></br>
							You're just one invite away from communicating with friends
							<br></br> and family around the World.<br></br>Let's show you how.
							<Button variant="contained" className={classes.btn}>
								<Typography variant="span">Get Started</Typography>
							</Button>
						</Typography>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Landing;
