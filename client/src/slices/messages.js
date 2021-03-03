import { createSlice } from '@reduxjs/toolkit';

const messages = createSlice({
	name: 'messages',
	initialState: [],
	reducers: {},
});

export default messages.reducer;


/*

mock data
[{friendID:ID,messages:[message]]

*/