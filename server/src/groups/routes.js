const { Router } = require('express');
const controller = require('./controller')
const router = Router();

router.route('/')
.get(controller.showAllGroups)
.post(controller.createGroup);

router.route('/:id')
.delete(controller.deleteGroup)

router.route('/:id/join')
.post(controller.joinGroup);

module.exports = router;