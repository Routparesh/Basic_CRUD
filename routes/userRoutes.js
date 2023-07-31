const express = require('express');

const {
	home,
	createUser,
	getUsers,
	editUser,
	userDelete,
} = require('../controllers/userController');

const router = express.Router();

router.get('/', home);
router.post('/createuser', createUser);
router.put('/getusers', getUsers);
router.put('/edituser/:id', editUser);
router.delete('/deleteuser/:id', userDelete);

module.exports = router;
