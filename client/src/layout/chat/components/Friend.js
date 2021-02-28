import React from 'react';
import { makeStyles, Avatar, Typography } from '@material-ui/core';
import { useLocation } from 'react-router-dom';

const Friend = ({ friend }) => {
	const { pathname } = useLocation();
	//getting id,email
	const { id, email } = friend;
	const useStyles = makeStyles((theme) => ({
		root: {
			display: 'flex',
			padding: theme.spacing(2.5, 1.5),
			backgroundColor:
				pathname === `/chat/${id}` ? theme.palette.primary.main : 'transparent',

			// width: '100%',
			'&:hover': {
				backgroundColor:"#585a5d85",
			},
			// transition:'all 5s',
			// backgroundColor:theme.palette.primary.dark
			// alignItems: 'flex-start',
			// justifyContent: 'space-evenly',
		},
		avatar: {
			width: theme.spacing(7.5),
			height: theme.spacing(7.5),
			backgroundColor: theme.palette.secondary.dark,
		},
		text: {
			// // backgroundColor:theme.palette.primary.main,
			// padding:theme.spacing(0.2,1),
			// borderRadius:theme.spacing(0.5),
			marginLeft: theme.spacing(2),
			fontWeight: '600',
		},
		chatInfo: {
			width: '100%',
			padding: theme.spacing(0.3, 0),
			// borderTop: `0.05px solid ${theme.palette.secondary.light}`,
			// borderBottom: `0.05px solid ${theme.palette.secondary.light}`,
		},
	}));
	const classes = useStyles();
														
	const username = email.split('@')[0];
	const letters = email.split('@')[0][0] + email.split('@')[0][1];

	return (
		<div className={classes.root}>
			<Avatar className={classes.avatar}>{letters.toUpperCase()}</Avatar>
			<div className={classes.chatInfo}>
				<Typography className={classes.text}>{username}</Typography>
			</div>
		</div>
	);
};

export default Friend;
