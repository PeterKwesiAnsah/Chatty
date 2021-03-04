import React from 'react';
import { makeStyles, Avatar, Typography } from '@material-ui/core';
import { useLocation } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';

const Friend = ({ friend }) => {
	const { pathname } = useLocation();
	//getting id,email
	const { id, email } = friend;

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
				count: messages.length,
			};
		}
		return null;
	});
	// const unReadMessages = {
	// 	count: 2,
	// 	message: {
	// 		content: 'how are you',
	// 	},
	// };

	const lastMessage = useSelector((state) => {
		const messagesObj = state.messages.find(({ friendID }) => id === friendID);
		if (messagesObj) {
			const { messages } = messagesObj;
			return messages[messages.length - 1];
		}
		return null;
	});

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
			fontSize: theme.spacing(1.7),
			color: theme.palette.secondary.light,
		},
		chat: {
			display: 'flex',
			alignItems: 'center',
			'& > *': {
				marginRight: theme.spacing(0.5),
			},
			// justifyContent: 'center',
		},
	}));
	const classes = useStyles();
	console.log(lastMessage, unReadMessages);

	const username = email.split('@')[0];
	const letters = email.split('@')[0][0] + email.split('@')[0][1];

	const handleRoutesChange = () => {
		//dispatch actions here both to store.messages and store.unReadMessages
	};

	return (
		<div className={classes.root} onClick={handleRoutesChange}>
			<Avatar className={classes.avatar}>{letters.toUpperCase()}</Avatar>
			<div className={classes.chatInfo}>
				<Typography variant="subtitle2" className={classes.text}>{username}</Typography>
				{!(unReadMessages || lastMessage) ? (
					<Typography variant="subtitle1" className={classes.chatDescription}>
						You have sent or received no messages
					</Typography>
				) : unReadMessages ? (
					<div className={classes.chat}>
						<Typography variant="subtitle2" style={{ color: '#fff' }} className>
							{letters.toUpperCase()}
						</Typography>
						<Typography variant="subtitle1" className={classes.chatDescription}>
							:{unReadMessages.message.content}
						</Typography>

						<Typography variant="h6" className={classes.chatCount}>
							{unReadMessages.count}
						</Typography>
					</div>
				) : (
					<Typography></Typography>
				)}
			</div>
		</div>
	);
};

export default Friend;
