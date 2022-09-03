const express = require('express');
const router = express.Router();
const homecontroller = require('../controllers/homecontroller');


router.get('/' , homecontroller.home );

router.use('/user' , require('./user/user') );
router.use('/stars' , require('./stars/stars') );
router.use('/repositries' , require('./repositries/repositries') );
router.use('/forks' , require('./forks/forks') );


module.exports = router;