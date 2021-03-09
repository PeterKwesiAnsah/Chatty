import { createSlice } from '@reduxjs/toolkit';

const messagesSlice = createSlice({
	name: 'messages',
	initialState: [],
	reducers: {
		addMessage: (state, action) => {
			const { sender, message } = action.payload;
			const messagesObj = state.find(({ friendID }) => friendID === sender);
			if (messagesObj) {
				if (message instanceof Array) {
					messagesObj.messages.push(...message);
				}
				//if a friend exists
				messagesObj.messages.push(message);
			} else {
				const messages = [];
				messages.push(message);
				state.push({ friendID: sender, messages });
			}
		},
	},
});

export const { addMessage } = messagesSlice.actions;

export default messagesSlice.reducer;

/*

mock data
[{friendID:ID,messages:[message]]

*/
