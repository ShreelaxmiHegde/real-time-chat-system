const express = require('express');
const router = express.Router({ mergeParams: true });
const controller = require('./messages.controller')

router.route('/messages')
.get(controller.getMessages)
.post(controller.sendMessage)

router.route('/:msgId')
.put(controller.editMessage)
.delete(controller.deleteMessage)

module.exports = router;