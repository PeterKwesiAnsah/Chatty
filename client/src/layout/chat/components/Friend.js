import React from 'react';
import { makeStyles, Avatar, Typography } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
	root: {
		display: 'flex',
		padding: theme.spacing(2.5, 1.5),

		// width: '100%',
		'&:hover': {
			backgroundColor: theme.palette.primary.dark,
		},
        // transition:'all 5s',
		// backgroundColor:theme.palette.primary.dark
		alignItems: 'flex-start',
		// justifyContent: 'space-evenly',
       
	},
	avatar: {
		width: theme.spacing(7.5),
		height: theme.spacing(7.5),
		backgroundColor: theme.palette.secondary.dark,
	},
    text:{
        // // backgroundColor:theme.palette.primary.main,
        // padding:theme.spacing(0.2,1),
        // borderRadius:theme.spacing(0.5),
        marginLeft:theme.spacing(2)
        
    }
}));

const Friend = ({ friend }) => {
	const classes = useStyles();

	//getting id,email
	const { id, email } = friend;
	const username = email.split('@')[0];
	const letters = email.split('@')[0][0] + email.split('@')[0][1];

	return (
		<div className={classes.root}>
			<Avatar className={classes.avatar}>{letters.toUpperCase()}</Avatar>
			<Typography className={classes.text} >{username}</Typography>
		</div>
	);
};

export default Friend;
