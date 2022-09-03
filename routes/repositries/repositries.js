const express = require('express');
const router = express.Router();

const repoController = require('../../controllers/repositriesController');

router.get('/' , repoController.repo);


module.exports = router;