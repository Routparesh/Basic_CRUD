const User = require('../models/userModel.js');

exports.home = (req, res) => {
	res.send('Welcome to the world');
};

exports.createUser = async (req, res) => {
	try {
		const { name, email } = req.body;

		if (!name || !email) {
			throw new Error('Name and email is required');
		}

		const userExists = await User.findOne({ name });
		if (userExists) {
			throw new Error('User already exists');
		}

		const user = await User.create({ name, email });

		res.status(201).json({
			status: 'success',
			message: 'User created successfully',
			User,
		});
	} catch (error) {
		console.log(error);
		res.status(400).json({
			status: 'false',
			message: error.message,
		});
	}
};

exports.getUsers = async (req, res) => {
	try {
		const users = await User.find({});
		if (!users) {
			res.status(404).json({
				status: 'false',
				message: 'User not found',
			});
		} else {
			res.status(200).json({
				status: 'true',
				users,
			});
		}
	} catch (error) {
		console.log(error);
		res.status(400).json({
			status: 'false',
			message: error.message,
		});
	}
};

exports.editUser = async (req, res) => {
	try {
		const user = await User.findByIdAndUpdate(req.params.id, req.body);
		res.status(200).json({
			success: true,
			message: 'User updated successfully',
		});
	} catch (error) {
		console.log(error);
		res.status(400).json({
			status: 'false',
			message: error.message,
		});
	}
};

exports.userDelete = async (req, res) => {
	try {
		const userID = req.params.id;
		const user = await User.findByIdAndDelete(userID);
		res.status(200).json({
			status: 'true',
			message: 'User deleted successfully',
		});
	} catch (error) {
		console.log(error);
		res.status(400).json({
			status: 'false',
			message: error.message,
		});
	}
};
