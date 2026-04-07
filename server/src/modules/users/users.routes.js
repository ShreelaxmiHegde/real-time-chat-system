const { Router } = require('express');
const controller = require('./users.controller')
const router = Router();

router.route('/')
.get(controller.getUsers)

module.exports = router;