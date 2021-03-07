import React from 'react';
import { Typography, makeStyles } from '@material-ui/core';

const Message = ({ message, userID, receiverID }) => {
	const { messageID } = message;
	const useStyles = makeStyles((theme) => ({
		root: {
			padding: theme.spacing(4),
			width: '100%',
			display: 'flex',
			justifyContent:
				messageID === `${userID}.${receiverID}` ? 'flex-end' : 'flex-start',
		},
		message: {
			backgroundColor:
				messageID === `${userID}.${receiverID}`
					? theme.palette.primary.main
					: theme.palette.primary.light,
			padding: theme.spacing(0.05,1),
			borderRadius: theme.spacing(1),
			fontSize: theme.spacing(2),
			color: theme.palette.common.white,
		},
	}));
	const classes = useStyles();

	return (
		<div className={classes.root}>
			<Typography variant="subtitle1" className={classes.message}>
				{message.content}
			</Typography>
		</div>
	);
};

export default Message;
