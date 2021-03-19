import React, { memo, useState, useEffect } from 'react';
import { makeStyles, Typography, IconButton } from '@material-ui/core';
import Message from './Message';
import find from '../../../utils/find';
import NearMeIcon from '@material-ui/icons/NearMe';
import { useMutation, gql } from '@apollo/client';
import { useLocation } from 'react-router-dom';
import { addMessage } from '../../../slices/messages';
import { update } from '../../../slices/messages';
import { useSelector, useDispatch } from 'react-redux';
import { reset } from '../../../slices/unRead';
import { nanoid } from 'nanoid';

const useStyles = makeStyles((theme) => ({
	root: {
		width: '100%',
		height: '90%',
		backgroundRepeat: 'no-repeat',
		backgroundPosition: '50%',
		backgroundSize: 'cover',
	},
	count: {
		textAlign: 'center',
		backgroundColor: '#585a5d36',
		padding: theme.spacing(1),
		'& > *': {
			backgroundColor: theme.palette.primary.light,
			borderRadius: theme.spacing(1.2),
			display: 'inline',
			padding: theme.spacing(0.5, 1),
		},
	},
	input: {
		border: '0',
		backgroundColor: 'transparent',
		fontSize: 'inherit',
		width: '70%',
		height: '100%',
		color: theme.palette.common.white,
		paddingLeft: theme.spacing(2),
		'&:focus': {
			outline: '0',
		},
	},
	textArea: {
		height: '10%',
		backgroundColor: theme.palette.primary.dark,
		display: 'flex',
		width: '100%',
		justifyContent: 'space-between',
	},
}));

const CREATE_MESSAGE = gql`
	mutation createMessage($message: MessageInput!) {
		createMessage(input: $message) {
			id
			messageID
			content
			read
			createdAt
			updatedAt
		}
	}
`;

/*

creating messages for come here

*/

const ChatBox = ({ wallPaper }) => {
	const classes = useStyles();

	const [message, setMessage] = useState('');
	const [createMessage, { data, loading }] = useMutation(CREATE_MESSAGE);
	//controls if a message is sent or not
	const { pathname } = useLocation();

	// const classes = useStyles();
	const receiverID = pathname.split('/')[2];
	const messages = useSelector((state) => find(state.messages, receiverID));

	const unReadMessages = useSelector((state) =>
		find(state.unReadMessages, receiverID)
	);

	const userID = useSelector((state) => state.user.userID);

	const dispatch = useDispatch();

	//create an enter key event
	const handleReturn = (e) => {
		if (e.keyCode === 13) {
			if (message) {
				console.log(unReadMessages);
				if (unReadMessages.length > 0) {
					//addmessage to state
					unReadMessages.forEach((message) => {
						dispatch(
							addMessage({
								sender: receiverID,
								message: {
									...message,
									read: true,
								},
							})
						);
					});
					dispatch(reset({ sender: receiverID }));
				}
				//addmessage to state
				dispatch(
					addMessage({
						sender: receiverID,
						message: {
							messageID: `${userID}.${receiverID}`,
							content: message,
							read: false,
						},
					})
				);
				setMessage('');

				createMessage({
					variables: {
						message: { receiverID, content: message },
					},
				});
			}
		}
	};

	const handleClick = () => {
		if (message) {
			//addmessage to state
			dispatch(
				addMessage({
					sender: receiverID,
					message: {
						messageID: `${userID}.${receiverID}`,
						content: message,
						read: false,
						sent: 'false',
					},
				})
			);
			setMessage('');
			createMessage({
				variables: {
					message: { receiverID, content: message },
				},
			});
		}
	};

	useEffect(() => {
		//find the last inserted data and update it to sent:true
		if (data) {
			const payload = {
				user: userID,
				receiver: receiverID,
				update: {
					id: data.createMessage.id,
					sent: 'true',
					createdAt: data.createMessage.createdAt,
				},
			};
			dispatch(update(payload));
		}
	}, [data]);

	//return key event
	useEffect(() => {
		window.addEventListener('keyup', handleReturn);

		return () => {
			window.removeEventListener('keyup', handleReturn);
		};
	});

	/*
loading:tru...view the placeholdermessage

*/
	//subscription

	const renderMessages = messages.map((message) => (
		<Message
			message={message}
			userID={userID}
			receiverID={receiverID}
			key={message.id || nanoid()}
		></Message>
	));

	const renderunReadMessages = unReadMessages.map((message) => (
		<Message
			message={message}
			userID={userID}
			receiverID={receiverID}
			key={message.id || nanoid()}          
		></Message>
	));

	//subscription
	return (
		<>
			<div
				style={{ backgroundImage: `url(${wallPaper})` }}
				className={classes.root}
			>
				<React.Fragment>{renderMessages}</React.Fragment>
				{unReadMessages.length > 0 && (
					<>
						<div className={classes.count}>
							<Typography variant="subtitle2">
								{unReadMessages.length} Unread messages
							</Typography>
						</div>
						{renderunReadMessages}
					</>
				)}
			</div>
			<div className={classes.textArea}>
				<input
					type="text"
					className={classes.input}
					value={message}
					onChange={(e) => setMessage(e.target.value)}
					placeholder="Type your message here "
				></input>
				{message && (
					<IconButton color="secondary" onClick={handleClick}>
						<NearMeIcon fontSize="large"></NearMeIcon>
					</IconButton>
				)}
			</div>
		</>
	);
};

export default memo(ChatBox);
