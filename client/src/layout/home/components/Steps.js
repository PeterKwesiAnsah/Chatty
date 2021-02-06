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
		padding: theme.spacing(8),
	},
	blobAll: {
		position: 'relative',
		textAlign: 'center',
		width: theme.spacing(35),
		height: theme.spacing(35),
	},
	numberOne: {
		marginTop:theme.spacing(-20),
		marginLeft:theme.spacing(-10)
	},
	numberTwo: {
		marginTop:theme.spacing(-25),
		marginLeft:theme.spacing(-6)
	},
	numberThree: {
		marginTop:theme.spacing(-25),
		marginLeft:theme.spacing(-10)
	}
}));

const Steps = () => {
	const classes = useStyles();
	return (
		<div className={classes.root}>
			<Grid container spacing={2} className={classes.grid}>
				<Grid item md={6} lg={6}>
					<div className={classes.blobAll}>
						<img src={blob} alt="blobOne"></img>
						<Typography variant="h1" className={classes.numberOne}>
							1
						</Typography>
					</div>
				</Grid>
				<Grid item md={6} lg={6}></Grid>
				<Grid item md={6} lg={6}>
					<div className={classes.blobAll}>
						<img src={blobOne} alt="blobOne"></img>
						<Typography variant="h1" className={classes.numberTwo}>
							2
						</Typography>
					</div>
				</Grid>
				<Grid item md={6} lg={6}></Grid>
				<Grid item md={6} lg={6}>
					<div className={classes.blobAll}>
						<img src={blobTwo} alt="blobOne"></img>
						<Typography variant="h1" className={classes.numberThree}>
							3
						</Typography>
					</div>
				</Grid>
				<Grid item md={6} lg={6}></Grid>
			</Grid>
		</div>
	);
};

export default Steps;
