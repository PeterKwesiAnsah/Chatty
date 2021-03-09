import React, { useState, useEffect } from 'react';
import { makeStyles, IconButton } from '@material-ui/core';
import NearMeIcon from '@material-ui/icons/NearMe';
import ChatBox from './ChatBox';
import { useMutation, gql } from '@apollo/client';
import { useLocation } from 'react-router-dom';
import { addMessage } from '../../../slices/messages';
import { useSelector, useDispatch } from 'react-redux';
const useStyles = makeStyles((theme) => ({
	textArea: {
		height: '10%',
		backgroundColor: theme.palette.primary.dark,
		display: 'flex',
		width: '100%',
		justifyContent: 'space-between',
	},
	root: {
		width: '100%',
		height: '100%',
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

const Container = ({ wallPaper }) => {
	const [message, setMessage] = useState('');
	const [createMessage, { data, loading }] = useMutation(CREATE_MESSAGE);
	//controls if a message is sent or not
	const { pathname } = useLocation();
	const classes = useStyles();
	const receiverID = pathname.split('/')[2];
	const userID = useSelector((state) => state.user.userID);

	const dispatch = useDispatch();

	//create an enter key event
	const handleReturn = (e) => {
		if (e.keyCode === 13) {
			if (message) {
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
		console.log(loading);
		if (data) {
			console.log('messageSent');
		}
	}, [loading]);

	//return key event
	useEffect(() => {
		window.addEventListener('keyup', handleReturn);

		// return () => {
		// 	window.removeEventListener('keyup', handleReturn);
		// };
	}, []);

	/*
loading:tru...view the placeholdermessage

*/
	//subscription
	return (
		<div className={classes.root}>
			<ChatBox
				wallPaper={wallPaper}
				userID={userID}
				receiverID={receiverID}
			></ChatBox>
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
		</div>
	);
};

export default Container;
