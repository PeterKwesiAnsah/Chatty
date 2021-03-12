import React from 'react';
import { Typography, makeStyles } from '@material-ui/core';
import AccessTimeIcon from '@material-ui/icons/AccessTime';
import CheckIcon from '@material-ui/icons/Check';
import { SvgIcon } from '@material-ui/core';
import getTime from '../../../utils/getTime';
const Message = ({ message, userID, receiverID }) => {
	const { messageID, sent } = message;
	const useStyles = makeStyles((theme) => ({
		root: {
			padding: theme.spacing(0.5, 4),
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
			padding: theme.spacing(0, 1),
			borderRadius: theme.spacing(1.2),
			fontSize: theme.spacing(1.8),
			color: theme.palette.common.white,
			display: 'flex',
			alignItems: 'center',

			'& h6': {
				marginRight: theme.spacing(3),
				marginLeft: theme.spacing(0.25),
			},
		},
		status: {
			fontSize: theme.spacing(2),
			color: theme.palette.primary.light,
			'& > *': {
				fontSize: 'inherit',
				color: 'inherit',
			},

			'& > div': {
				display: 'flex',
				alignItems: 'center',
				marginTop: theme.spacing(1.5),
				'& svg': {
					fontSize: theme.spacing(2),
					marginRight: theme.spacing(0.5),
				},
			},
			'& > svg': {
				marginTop: theme.spacing(1.5),
			},
		},
		time: {
			fontSize: theme.spacing(1.5),
			display: 'inline',
			marginRight: theme.spacing(0.5),
		},
	}));
	const classes = useStyles();

	const renderStatus = (
		<div className={classes.status}>
			{sent === 'false' ? (
				<SvgIcon>
					<AccessTimeIcon></AccessTimeIcon>
				</SvgIcon>
			) : (
				<div>
					<Typography className={classes.time}>{getTime()}</Typography>
					<SvgIcon fontSize="small">
						<CheckIcon></CheckIcon>
					</SvgIcon>
				</div>
			)}
		</div>
	);

	return (
		<div className={classes.root}>
			<div className={classes.message}>
				<Typography variant="subtitle2">{message.content}</Typography>
				{renderStatus}
			</div>
		</div>
	);
};

export default Message;
