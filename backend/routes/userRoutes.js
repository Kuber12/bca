const express = require('express');
const router = express.Router();
const jwt = require('jsonwebtoken');
const { login, register } = require('../controllers/userController');

router.route('/login').post(login);
router.route('/register').post(register);

module.exports = router;

