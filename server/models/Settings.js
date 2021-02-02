const mongoose = require('mongoose');

const user = new mongoose.Schema({
	userID: {
		type: String,
		required: true,
	},
	theme: {
		type: String,
		required: true,
		default: 'DARK',
	},
	pushNotifications: {
		type: Boolean,
		required: true,
		default: 'false',
	},
});
