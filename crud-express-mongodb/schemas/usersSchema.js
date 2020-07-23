const mongoose = require('mongoose');

module.exports = usersSchema = mongoose.Schema({
	name: {
		type: String,
		required: true,
	},
	age: {
		type: Number,
		required: false,
	},
	email: {
		type: String,
		required: true,
	},
});
