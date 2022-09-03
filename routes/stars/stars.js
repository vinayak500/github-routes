const express = require('express');
const router = express.Router();

const starsController = require('../../controllers/starController');

router.get('/' , starsController.star);


module.exports = router;