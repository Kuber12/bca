const express = require('express');
const router = express.Router();    
const { login, register, verify } = require('../controllers/userController');
const validateToken = require("../middlewares/validateTokenHandler");

router.route('/login').post(login);
router.route('/register').post(register);
router.route('/verify').get(validateToken, verify);

module.exports = router;

