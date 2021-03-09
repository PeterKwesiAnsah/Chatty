import React, { memo } from 'react';
import { makeStyles, Typography } from '@material-ui/core';
import Message from './Message';
import { useSelector } from 'react-redux';
import find from '../../../utils/find';
const useStyles = makeStyles((theme) => ({
	root: {
		width: '100%',
		height: '90%',
		backgroundRepeat: 'no-repeat',
		backgroundPosition: '50%',
		backgroundSize: 'cover',
	},
	count: {
		textAlign:'center',
		backgroundColor:'#585a5d36',
		padding:theme.spacing(1),
		'& > *':{
			backgroundColor:theme.palette.primary.light,
			borderRadius:theme.spacing(1.2),
			display:'inline',
			padding:theme.spacing(.5,1)
		}
		
	},
}));

const ChatBox = ({ wallPaper, userID, receiverID }) => {
	const classes = useStyles();
	const messages = useSelector((state) => find(state.messages, receiverID));
	const unReadMessages = useSelector((state) =>
		find(state.unReadMessages, receiverID)
	);
	console.log(unReadMessages);
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

	const renderunReadMessages = unReadMessages.map((message) => (
		<Message
			message={message}
			userID={userID}
			receiverID={receiverID}
		></Message>
	));

	// const unreadMessages

	// console.log('why');

	//unreadMessages are messages left to be rePlied

	//subscription
	return (
		<>
			<div
				style={{ backgroundImage: `url(${wallPaper})` }}
				className={classes.root}
			>
				<React.Fragment>{renderMessages}</React.Fragment>

				<>
					<div className={classes.count}>
						<Typography variant="subtitle2">{unReadMessages.length} Unread messages</Typography>
					</div>
					{renderunReadMessages}
				</>
			</div>
		</>
	);
};

export default memo(ChatBox);
