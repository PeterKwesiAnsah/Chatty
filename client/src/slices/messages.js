import { createSlice } from '@reduxjs/toolkit';

const messagesSlice = createSlice({
	name: 'messages',
	initialState: [],
	reducers: {
		addMessage: (state, action) => {
			const { sender, message } = action.payload;
			const messagesObj = state.find(({ friendID }) => friendID === sender);
			if (messagesObj) {
				// if (message instanceof Array) {
				// 	messagesObj.messages.push(...message);

				// }
				//if a friend exists
				messagesObj.messages.push(message);
			} else {
				const messages = [];
				messages.push(message);
				state.push({ friendID: sender, messages });
			}
		},
		update: (state, action) => {
			const { user, receiver, update } = action.payload;
			const messagesObj = state.find(({ friendID }) => friendID === receiver);
			const messages = messagesObj['messages'].filter(
				({ messageID }) => messageID === `${user}.${receiver}`
			);
			messages[messages.length - 1].id = update.id;
			messages[messages.length - 1].sent = update.sent;
			messages[messages.length - 1].createdAt = update.createdAt;
		},
		updateRead: (state, action) => {
			const { id: ID, messageID } = action.payload;
			const [, receiver] = messageID.split('.');
			const messagesObj = state.find(({ friendID }) => friendID === receiver);
			const message = messagesObj.messages.find(({ id }) => id === ID);
			message.read = true;
		},
	},
});

export const { addMessage, update,updateRead } = messagesSlice.actions;

export default messagesSlice.reducer;

/*

mock data
[{friendID:ID,messages:[message]]

*/
