import React, { memo } from 'react';
import { makeStyles } from '@material-ui/core';
import Message from './Message';
import { useSelector } from 'react-redux';
const useStyles = makeStyles((theme) => ({
	root: {
		width: '100%',
		height: '90%',
		backgroundRepeat: 'no-repeat',
		backgroundPosition: '50%',
		backgroundSize: 'cover',
	},
}));

const ChatBox = ({ wallPaper, userID, receiverID }) => {
	const classes = useStyles();
	const messages = useSelector(
		(state) =>
			state.messages.find(({ friendID }) => friendID === receiverID)
				?.messages || []
	);
	console.log(messages);
	// const messages = [
	// 	{
	// 		id: '6044303433c2071dac2547a3',
	// 		messageID: '601a4a719d678236206ec8f0.6019cd76444a503194234438',
	// 		content: 'charley the milk fini?',
	// 		read: false,
	// 		createdAt: '1615081524063',
	// 		updatedAt: '1615081524063',
	// 	},
	// 	{
	// 		id: '6044303433c2071dac2547a3',
	// 		messageID: '6019cd76444a503194234438.601a4a719d678236206ec8f0',
	// 		content: 'yeah',
	// 		read: false,
	// 		createdAt: '1615081524063',
	// 		updatedAt: '1615081524063',
	// 	},
	// ];
	const renderMessages = messages.map((message) => (
		<Message
			message={message}
			userID={userID}
			receiverID={receiverID}
			
		></Message>
	));

	// console.log('why');

	//subscription
	return (
		<>
			<div
				style={{ backgroundImage: `url(${wallPaper})` }}
				className={classes.root}
			>
				<React.Fragment>{renderMessages}</React.Fragment>
			</div>
		</>
	);
};

export default memo(ChatBox);
