const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
	name: {
		type: 'string',
		required: [true, 'Name is required'],
		trim: true,
		maxLength: [20, 'Name must be at least 20 characters'],
	},
	email: {
		type: 'string',
		required: [true, 'Email is required'],
		unique: true,
	},
});

module.exports = mongoose.model('User', userSchema);
