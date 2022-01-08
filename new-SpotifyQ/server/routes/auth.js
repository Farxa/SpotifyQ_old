const router = require("express").Router();
const User = require('../models/User');
const bcrypt = require('bcrypt');





router.delete('/logout', (req, res, next) => {
	req.session.destroy();
	res.status(200).json({ message: 'successful logout' });
})

module.exports = router;