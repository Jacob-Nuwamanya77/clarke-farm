const express = require('express');
const bcrypt = require("bcrypt");
const router = express.Router();
const User = require('../Models/userModel');

//Add new User route
router.post('/', async (req, res) => {
	try {
		const user = await User(req.body);
		//generate salt to hash password. The number in brackets stands for the salt rounds
		const salt = await bcrypt.genSalt(10);
		user.password = await bcrypt.hash(user.password, salt);
		user.save().then((value) => {
			res.send(value);
		})
	} catch (error) {
		console.log(error);
	}

});
//Handle user login and token generation
router.post('/login', async (req, res) => {

	const { username, password } = req.body;

	try {
		//check if user exists
		let user = await User.findOne({ username });
		if (!user) {
			return res.status(400).json({
				message: 'User' + username + 'not found',
				status: 400
			});
		}
		//check password validity
		const isMatch = await bcrypt.compare(password, user.password);
		if (!isMatch) {
			return res.status(400).json({
				message: 'Incorrect Password !',
				status: 400
			});
		}
		else {
			//random token as string 
			function generateToken(token_length) {
				let token = '';
				let characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
				let characterLength = characters.length;
				for (let i = 0; i < token_length; i++) {
					token += characters.charAt(Math.floor(Math.random() * characterLength));
				}
				return token;
			}
			//update user Objects
			const payload = { _id: user._id };
			const updatefield = { access_token: generateToken(30) };

			await User.findOneAndUpdate(payload, updatefield, { returnOriginal: false }, (error, result) => {
				if (error) {
					res.status(400).json({
						message: 'Failed to update User token'
					})
				}
				else {
					res.status(200).json({
						message: 'successful login and update',
						data: result

					})
				}
			})

		}



	} catch (e) {
		console.error(e);
		res.status(500).json({
			message: 'Server Error' + e
		})
	}
});
//user logout
router.post('logout', async (req, res) => {

});
module.exports = router;
