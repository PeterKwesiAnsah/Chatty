import React, { useState } from 'react';
import { makeStyles, Avatar, Typography } from '@material-ui/core';
import { useLocation } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { addMessage } from '../../../slices/messages';
import { reset } from '../../../slices/unRead';
import AccessTimeIcon from '@material-ui/icons/AccessTime';
import CheckIcon from '@material-ui/icons/Check';
import { SvgIcon } from '@material-ui/core';
import getTime from '../../../utils/getTime';

const Friend = ({ friend }) => {
	// const [showCount, setShowCount] = useState(true);
	const { pathname } = useLocation();
	//getting id,email
	const { id, email } = friend;

	const dispatch = useDispatch();

	//getUnreadMessages && last Message from Messages
	//if unreadMessages exist..render the last message and it count
	const unReadMessages = useSelector((state) => {
		const unReadMessagesObj = state.unReadMessages.find(
			({ friendID }) => id === friendID
		);
		if (unReadMessagesObj) {
			const { friendID, messages } = unReadMessagesObj;
			return {
				friendID,
				message: messages[messages.length - 1],
				messages,
				count: messages.length,
			};
		}
		return null;
	});

	const userID = useSelector((state) => state.user.userID);
	// const unReadMessages = {
	// 	count: 2,
	// 	message: {
	// 		content: 'how are you',
	// 	},
	// };

	const lastMessage = useSelector((state) => {
		const messagesObj = state.messages.find(({ friendID }) => id === friendID);
		//refactor code
		if (messagesObj) {
			const { messages } = messagesObj;
			return messages[messages.length - 1];
		}
		return null;
	});
	console.log(lastMessage,unReadMessages);

	const useStyles = makeStyles((theme) => ({
		root: {
			display: 'flex',
			padding: theme.spacing(1.5, 1.5),
			backgroundColor:
				pathname === `/chat/${id}` ? theme.palette.primary.main : 'transparent',
			// width: '100%',
			'&:hover': {
				backgroundColor: '#585a5d85',
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
			fontWeight: '600',
		},
		chatInfo: {
			width: '100%',
			display: 'flex',
			flexDirection: 'column',
			justifyContent: 'space-between',
			padding: theme.spacing(1.5),

			// borderTop: `0.05px solid ${theme.palette.secondary.light}`,
			// borderBottom: `0.05px solid ${theme.palette.secondary.light}`,
		},
		chatCount: {
			backgroundColor: theme.palette.primary.light,
			borderRadius: '50%',
			height: theme.spacing(2.8),
			width: theme.spacing(2.8),
			textAlign: 'center',
			display: 'flex',
			alignItems: 'center',
			justifyContent: 'center',
			fontSize: theme.spacing(1.8),
			// padding: theme.spacing(1),
		},

		chatDescription: {
			fontSize: theme.spacing(2),
			color: theme.palette.secondary.light,
		},
		chat: {
			display: 'flex',
			alignItems: 'center',
			justifyContent: 'space-between',
			'& > *': {
				marginRight: theme.spacing(0.5),
			},
			'& svg': {
				color: theme.palette.primary.light,
			},

			// justifyContent: 'center',
		},
		friendHeader: {
			width: '100%',
			display: 'flex',
			justifyContent: 'space-between',
		},
		chatTime: {
			color: theme.palette.primary.light,
		},
	}));
	const classes = useStyles();

	const username = email.split('@')[0];
	const letters = email.split('@')[0][0] + email.split('@')[0][1];

	const renderStatus = (
		<>
			{lastMessage?.sent === 'false' &&
			lastMessage?.messageID === `${userID}.${id}` ? (
				<SvgIcon fontSize="small">
					<AccessTimeIcon></AccessTimeIcon>
				</SvgIcon>
			) : (
				<>
					{lastMessage?.messageID === `${userID}.${id}` && (
						<SvgIcon fontSize="small">
							<CheckIcon></CheckIcon>
						</SvgIcon>
					)}
				</>
			)}
		</>
	);


	return (
		<div className={classes.root}>
			<Avatar className={classes.avatar}>{letters.toUpperCase()}</Avatar>
			<div className={classes.chatInfo}>
				<div className={classes.friendHeader}>
					<Typography variant="subtitle2" className={classes.text}>
						{username}
					</Typography>
					{(lastMessage || unReadMessages) && (
						<Typography variant="subtitle2" className={classes.chatTime}>
							{getTime(
								lastMessage?.createdAt || unReadMessages?.message?.createdAt
							)}
						</Typography>
					)}
				</div>

				{!(unReadMessages || lastMessage) ? (
					<Typography variant="subtitle2" className={classes.chatDescription}>
						You have sent or received no messages
					</Typography>
				) : (unReadMessages?.message) ? (
					<div className={classes.chat}>
						<Typography>
							{/* <Typography
								variant="subtitle2"
								style={{ color: '#fff' }}
								display="inline"
							>
								{letters.toUpperCase()}
							</Typography> */}
							<Typography
								variant="subtitle1"
								className={classes.chatDescription}
								display="inline"
							>
								{unReadMessages.message?.content}
							</Typography>
						</Typography>
						{pathname !== `/chat/${id}` && (
							<Typography variant="h6" className={classes.chatCount}>
								{unReadMessages.count}
							</Typography>
						)}
					</div>
				) : (
					// <Typography></Typography>
					<div className={classes.chat} style={{ justifyContent: 'unset' }}>
						{/* <Typography variant="subtitle2" style={{ color: '#fff' }}>
							{lastMessage?.messageID === `${userID}.${id}`
								? 'You'
								: letters.toUpperCase()}
						</Typography> */}
						{renderStatus}
						<Typography variant="subtitle1" className={classes.chatDescription}>
							{lastMessage?.content}
						</Typography>

						{/* <Typography variant="h6" className={classes.chatCount}>
						{unReadMessages.count}
					</Typography> */}
					</div>
				)}
			</div>
		</div>
	);
};

export default Friend;
