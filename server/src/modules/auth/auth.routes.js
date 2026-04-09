const express = require('express');
const router = express.Router();
const controller = require('./auth.controller');
const verifyToken = require('../../middleware');

router.post('/signup', controller.signup)

router.post('/login', controller.login)

router.get('/user', verifyToken, controller.getUser);

module.exports = router;