import React, { useEffect } from 'react';
import { makeStyles } from '@material-ui/core';
import { ThemeProvider } from '@material-ui/core/styles';
import { useRouteMatch } from 'react-router-dom';
import ChatRoutes from './components/ChatRoutes';
import SideView from './components/SideView';
import chatTheme from '../../theme/chatTheme';
import { useSubscription, gql } from '@apollo/client';
import { useLocation } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { addUnReadMessage } from '../../slices/unRead';

const useStyles = makeStyles((theme) => ({
	root: {
		width: '100vw',
		height: '100vh',
		display: 'flex',
	},
}));

const Chat = () => {
	const classes = useStyles();
	//listen to subscriptions here
	const NEW_MESSAGE = gql`
		subscription getNewMessage {
			newMessage {
				id
				messageID
				content
				read
				createdAt
				updatedAt
			}
		}
	`;
	//route match of parent route
	const match = useRouteMatch();
	const { loading, data: message, error } = useSubscription(NEW_MESSAGE);
	const { pathname } = useLocation();
	const unReadMessages = useSelector((state) => state.unReadMessages);
	const dispatch = useDispatch();

	useEffect(() => {
		if (message) {
			//when a new data is created
			const { id, messageID } = message.newMessage;

			//get receiver and senderIDs
			const [sender, receiver] = messageID.split('.');

			if (receiver === '6019cd76444a503194234438') {
				//user not present in sender's route....add message to unRead
				if (pathname !== `chat/${sender}`) {
					//update the unReadMessagesStore
					dispatch(addUnReadMessage({ sender, message: message.newMessage }));
				}
				//if it is
				else {
					//update the Message store
					//update the read to true in database
				}
			}
		}
	}, [message]);

	return (
		<ThemeProvider theme={chatTheme}>
			<div className={classes.root}>
				<SideView route={match.url}></SideView>
				<ChatRoutes route={match.url}></ChatRoutes>
			</div>
		</ThemeProvider>
	);
};

export default Chat;
