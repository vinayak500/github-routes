const express = require('express');
const router = express.Router();

const userController = require('../../controllers/usercontroller');

router.get('/profile' , userController.userFunction );


module.exports = router;

