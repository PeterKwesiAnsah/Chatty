import { createSlice } from '@reduxjs/toolkit';

const unReadSlice = createSlice({
	name: 'unReadMessages',
	initialState: [],
	reducers: {
		addUnReadMessage: (state, action) => {
			const { sender, message } = action.payload;

			const unReadMessagesObj = state.find(
				({ friendID }) => friendID === sender
			);
			if (unReadMessagesObj) {
				//if a friend exists
				unReadMessagesObj.messages.push(message);
			} else {
				const messages = [];
				messages.push(message);

				state.push({ friendID: sender, messages });
			}  
		},
		reset: (state, action) => {
			const { sender } = action.payload;
			const unReadMessagesObj = state.find(
				({ friendID }) => friendID === sender
			);
			if (unReadMessagesObj) {
				//if a friend exists
				unReadMessagesObj.messages = [];
			}
		},
	},
});

export const { addUnReadMessage ,reset} = unReadSlice.actions;
export default unReadSlice.reducer;

/*


mock data
[{friendID:ID,messages:[message]]


*/
