const { Router } = require('express');
const controller = require('./controller')
const router = Router();

router.route('/')
.get(controller.getUsers)
.post(controller.signup)

module.exports = router;