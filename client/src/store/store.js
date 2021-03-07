import { configureStore } from '@reduxjs/toolkit';
import messagesReducer from '../slices/messages';
import unReadReducer from '../slices/unRead';
import userReducer from '../slices/user';

const store = configureStore({
	reducer: {
		messages: messagesReducer,
		unReadMessages: unReadReducer,
		user: userReducer,
	},
});

export default store;
