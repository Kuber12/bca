const express = require('express');
const router = express.Router();
const jwt = require('jsonwebtoken');
const { loginAdminController } = require('../controllers/adminController');

router.route('/admin/login').post(loginAdminController);

module.exports = router;

