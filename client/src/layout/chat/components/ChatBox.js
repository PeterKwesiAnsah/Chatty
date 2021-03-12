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
}));

const ChatBox = ({ wallPaper, userID, receiverID }) => {
	const classes = useStyles();
	const messages = useSelector((state) => find(state.messages, receiverID));
	const unReadMessages = useSelector((state) =>
		find(state.unReadMessages, receiverID)
	);

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
		</>
	);   
};

export default memo(ChatBox);
