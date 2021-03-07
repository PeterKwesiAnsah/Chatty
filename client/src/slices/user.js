import { createSlice } from '@reduxjs/toolkit';

const userSlice = createSlice({
	name: 'user',
	initialState: { userID: '' },
	reducers: {
		addCurrentUserID: (state, action) => {
			const { id } = action.payload;
			state.userID = id;
		},
	},
});

export const { addCurrentUserID } = userSlice.actions;
export default userSlice.reducer;
