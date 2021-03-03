import { createSlice } from '@reduxjs/toolkit';

const unReadSlice = createSlice({
	name: 'unreadMessages',
	initialState: [],
	reducers: {},
});

export default unReadSlice.reducer;
