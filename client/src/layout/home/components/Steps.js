import React from 'react';
import { makeStyles, Grid, Typography } from '@material-ui/core';
import blob from '../../../assets/blob.svg';
import blobOne from '../../../assets/blob1.svg';
import blobTwo from '../../../assets/blob2.svg';


const useStyles = makeStyles((theme) => ({
	root: {
		width: '100%',
		backgroundColor: '#303030',
		display: 'grid',
		placeItems: 'center',
		padding: theme.spacing(8, 10),
		'@media only screen and (max-width:62.5em)': {
			padding: theme.spacing(2, 4),
			overFlow:'hidden'
		},
		textAlign: 'center',
		
	},
	blobAll: {
		position: 'relative',   

		width: theme.spacing(37),
		height: theme.spacing(37),
	},
	numberOne: {
		marginTop: theme.spacing(-20),
		marginLeft: theme.spacing(-10),
	},
	numberTwo: {
		marginTop: theme.spacing(-25),
		marginLeft: theme.spacing(-6),
	},
	numberThree: {
		marginTop: theme.spacing(-25),
		marginLeft: theme.spacing(-10),
	},
}));

const Steps = () => {
	const classes = useStyles();
	return (
		<div className={classes.root}>
			<Grid container className={classes.grid} alignItems="center">
				<Grid item xs={12} sm={12} md={6} lg={6} >
					<div className={classes.blobAll}>
						<img src={blob} alt="blobOne"></img>
						<Typography variant="h1" className={classes.numberOne}>
							1
						</Typography>
					</div>
				</Grid>
				<Grid item xs={12} sm={12} md={6} lg={6}>
					<Typography variant="h2" color="primary" paragraph>
						Create an Account.
					</Typography>
					<Typography variant="h5">
						Create and account with us by signing up with your email and
						password.
					</Typography>
				</Grid>
				<Grid item xs={12} sm={12} md={6} lg={6}>
					<div className={classes.blobAll}>
						<img src={blobOne} alt="blobOne"></img>
						<Typography variant="h1" className={classes.numberTwo}>
							2
						</Typography>
					</div>
				</Grid>
				<Grid item xs={12} sm={12} md={6} lg={6}>
					<Typography variant="h2" color="secondary" paragraph>
						Give an Invite.
					</Typography>
					<Typography variant="h5">
						Share your invite link with friends,family,loved ones and colleagues
						wherever they are.
					</Typography>
				</Grid>
				<Grid item  xs={12} sm={12} md={6} lg={6}>
					<div className={classes.blobAll}>
						<img src={blobTwo} alt="blobOne"></img>
						<Typography variant="h1" className={classes.numberThree}>
							3
						</Typography>
					</div>
				</Grid>
				<Grid item xs={12} sm={12} md={6} lg={6}>
					<Typography variant="h2" style={{ color: '#d071da' }} paragraph>
						Say Hi!.
					</Typography>
					<Typography variant="h5">
						Start messaging with friends,family,loved ones and colleagues
						wherever they are.
					</Typography>
				</Grid>
			</Grid>
		</div>
	);
};

export default Steps;
