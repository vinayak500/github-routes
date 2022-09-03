const express = require('express');
const router = express.Router();

const forkController = require('../../controllers/forkController');

router.get('/' , forkController.fork);


module.exports = router;