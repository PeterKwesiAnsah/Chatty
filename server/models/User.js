const mongoose = require('mongoose');

const user = new mongoose.Schema({
	email: {
		type: String,
		required: true,
	},
	password: {
		type: String,
		required: true,
	},
	invitedBy: String,
});

const User=mongoose.model('user',user)
