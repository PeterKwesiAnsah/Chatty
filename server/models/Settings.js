const mongoose = require('mongoose');

const settings = new mongoose.Schema({
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
const Settings=mongoose.model('setting',settings)

module.exports=Settings
